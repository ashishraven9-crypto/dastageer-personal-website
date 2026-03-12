// ─────────────────────────────────────────────────────────────────────────────
//  A/B Testing Engine
//  Handles variant assignment, persistence, and engagement event tracking
// ─────────────────────────────────────────────────────────────────────────────

export type Variant = "beige" | "midnight" | "forest";

export interface EngagementEvent {
  type: "pageview" | "scroll_depth" | "section_view" | "cta_click" | "blog_expand" | "contact_submit" | "time_on_page" | "skill_hover" | "project_hover";
  variant: Variant;
  value?: number | string;
  timestamp: number;
}

export interface VariantMetrics {
  variant: Variant;
  label: string;
  color: string;
  pageviews: number;
  avgScrollDepth: number;
  ctaClicks: number;
  blogExpands: number;
  contactSubmits: number;
  avgTimeOnPage: number; // seconds
  sectionViews: Record<string, number>;
  skillHovers: number;
  projectHovers: number;
  engagementScore: number; // composite 0–100
}

const STORAGE_KEY = "gmd_ab_variant";
const EVENTS_KEY = "gmd_ab_events";
const SESSION_START_KEY = "gmd_session_start";

// ── Variant Assignment ──────────────────────────────────────────────────────
export function getOrAssignVariant(): Variant {
  const stored = localStorage.getItem(STORAGE_KEY) as Variant | null;
  if (stored && ["beige", "midnight", "forest"].includes(stored)) return stored;
  // Random assignment with equal 33.3% distribution
  const variants: Variant[] = ["beige", "midnight", "forest"];
  const assigned = variants[Math.floor(Math.random() * variants.length)];
  localStorage.setItem(STORAGE_KEY, assigned);
  return assigned;
}

export function setVariant(variant: Variant): void {
  localStorage.setItem(STORAGE_KEY, variant);
}

// ── Event Tracking ──────────────────────────────────────────────────────────
export function trackEvent(type: EngagementEvent["type"], variant: Variant, value?: number | string): void {
  const events = getStoredEvents();
  events.push({ type, variant, value, timestamp: Date.now() });
  // Keep last 500 events to avoid storage bloat
  const trimmed = events.slice(-500);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(trimmed));
}

export function getStoredEvents(): EngagementEvent[] {
  try {
    const raw = localStorage.getItem(EVENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearEvents(): void {
  localStorage.removeItem(EVENTS_KEY);
}

// ── Session Timing ──────────────────────────────────────────────────────────
export function startSession(): void {
  if (!sessionStorage.getItem(SESSION_START_KEY)) {
    sessionStorage.setItem(SESSION_START_KEY, Date.now().toString());
  }
}

export function getSessionDuration(): number {
  const start = sessionStorage.getItem(SESSION_START_KEY);
  if (!start) return 0;
  return Math.round((Date.now() - parseInt(start)) / 1000);
}

// ── Metrics Computation ─────────────────────────────────────────────────────
const VARIANT_META: Record<Variant, { label: string; color: string }> = {
  beige:    { label: "Warm Beige",    color: "#C4A882" },
  midnight: { label: "Midnight Dark", color: "#6366F1" },
  forest:   { label: "Forest Green",  color: "#10B981" },
};

export function computeMetrics(): VariantMetrics[] {
  const events = getStoredEvents();
  const variants: Variant[] = ["beige", "midnight", "forest"];

  return variants.map((variant) => {
    const varEvents = events.filter((e) => e.variant === variant);

    const pageviews = varEvents.filter((e) => e.type === "pageview").length;

    const scrollEvents = varEvents.filter((e) => e.type === "scroll_depth");
    const avgScrollDepth = scrollEvents.length
      ? Math.round(scrollEvents.reduce((s, e) => s + (Number(e.value) || 0), 0) / scrollEvents.length)
      : 0;

    const ctaClicks = varEvents.filter((e) => e.type === "cta_click").length;
    const blogExpands = varEvents.filter((e) => e.type === "blog_expand").length;
    const contactSubmits = varEvents.filter((e) => e.type === "contact_submit").length;
    const skillHovers = varEvents.filter((e) => e.type === "skill_hover").length;
    const projectHovers = varEvents.filter((e) => e.type === "project_hover").length;

    const timeEvents = varEvents.filter((e) => e.type === "time_on_page");
    const avgTimeOnPage = timeEvents.length
      ? Math.round(timeEvents.reduce((s, e) => s + (Number(e.value) || 0), 0) / timeEvents.length)
      : 0;

    const sectionViewEvents = varEvents.filter((e) => e.type === "section_view");
    const sectionViews: Record<string, number> = {};
    sectionViewEvents.forEach((e) => {
      const section = String(e.value || "unknown");
      sectionViews[section] = (sectionViews[section] || 0) + 1;
    });

    // Composite engagement score (0–100)
    const engagementScore = Math.min(100, Math.round(
      (avgScrollDepth * 0.25) +
      (Math.min(ctaClicks * 10, 20)) +
      (Math.min(blogExpands * 15, 15)) +
      (Math.min(contactSubmits * 20, 20)) +
      (Math.min(avgTimeOnPage / 3, 10)) +
      (Math.min(skillHovers * 2, 5)) +
      (Math.min(projectHovers * 2, 5))
    ));

    return {
      variant,
      label: VARIANT_META[variant].label,
      color: VARIANT_META[variant].color,
      pageviews,
      avgScrollDepth,
      ctaClicks,
      blogExpands,
      contactSubmits,
      avgTimeOnPage,
      sectionViews,
      skillHovers,
      projectHovers,
      engagementScore,
    };
  });
}

// ── Seed Demo Data (for first-time visitors to show non-empty dashboard) ────
export function seedDemoData(): void {
  const existing = getStoredEvents();
  if (existing.length > 0) return; // Don't overwrite real data

  const now = Date.now();
  const demo: EngagementEvent[] = [];
  const variants: Variant[] = ["beige", "midnight", "forest"];

  // Simulate realistic engagement data for each variant
  const variantData = {
    beige:    { views: 42, scrollDepths: [65, 72, 58, 80, 70, 68, 75, 62, 85, 71], ctaClicks: 8,  blogExpands: 5,  contactSubmits: 2, times: [95, 120, 88, 145, 102], skillHovers: 18, projectHovers: 12 },
    midnight: { views: 38, scrollDepths: [78, 85, 90, 72, 88, 82, 76, 91, 84, 79], ctaClicks: 12, blogExpands: 9,  contactSubmits: 4, times: [140, 165, 128, 180, 155], skillHovers: 25, projectHovers: 19 },
    forest:   { views: 35, scrollDepths: [55, 60, 70, 52, 65, 58, 72, 61, 68, 56], ctaClicks: 6,  blogExpands: 4,  contactSubmits: 1, times: [75, 90, 68, 110, 82], skillHovers: 14, projectHovers: 9 },
  };

  variants.forEach((v) => {
    const d = variantData[v];
    // Pageviews
    for (let i = 0; i < d.views; i++) {
      demo.push({ type: "pageview", variant: v, timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
    }
    // Scroll depths
    d.scrollDepths.forEach((depth) => {
      demo.push({ type: "scroll_depth", variant: v, value: depth, timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
    });
    // CTA clicks
    for (let i = 0; i < d.ctaClicks; i++) {
      demo.push({ type: "cta_click", variant: v, value: "hero", timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
    }
    // Blog expands
    for (let i = 0; i < d.blogExpands; i++) {
      demo.push({ type: "blog_expand", variant: v, timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
    }
    // Contact submits
    for (let i = 0; i < d.contactSubmits; i++) {
      demo.push({ type: "contact_submit", variant: v, timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
    }
    // Time on page
    d.times.forEach((t) => {
      demo.push({ type: "time_on_page", variant: v, value: t, timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
    });
    // Skill hovers
    for (let i = 0; i < d.skillHovers; i++) {
      demo.push({ type: "skill_hover", variant: v, timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
    }
    // Project hovers
    for (let i = 0; i < d.projectHovers; i++) {
      demo.push({ type: "project_hover", variant: v, timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
    }
    // Section views
    ["about", "skills", "projects", "experience", "blog", "contact"].forEach((section) => {
      const count = Math.floor(Math.random() * d.views * 0.6 + 5);
      for (let i = 0; i < count; i++) {
        demo.push({ type: "section_view", variant: v, value: section, timestamp: now - Math.random() * 7 * 24 * 3600 * 1000 });
      }
    });
  });

  localStorage.setItem(EVENTS_KEY, JSON.stringify(demo));
}
