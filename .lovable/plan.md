

# Complete Site Rebrand: G.Md.Dastageer - Management & AI

## The Problem

The CSS variables were updated to a dark cinematic palette, but nearly every component has **hardcoded colors** (like `bg-white`, `text-black`, `text-amber-100`, inline `style` backgrounds) that completely override the theme. The branding also still says "MOJJU" everywhere.

## What Will Change

### 1. Branding Updates (All Components)

| Current | New |
|---------|-----|
| MOJJU | G.Md.Dastageer |
| "AI Film Production Without Limits" | "MBA Student at NIT Kurukshetra" |
| Film/video production focus | Management & AI focus |
| "Book a Call" CTA | "Get in Touch" CTA |
| MOJJU social links | Removed or placeholder |
| "MOJJU Discovery Call" | "Discovery Call" or contact form |
| "MOJJU LAB" stamps | Removed |

### 2. Hero.tsx - Fix Hardcoded Elements

- Change logo text from "MOJJU" to "G.Md.Dastageer"
- Update hero title from "AI FILM / PRODUCTION / WITHOUT LIMITS" to "Management & AI" themed headline
- Update nav links to match new sections
- Change `bg-red-600` CTA button to use `bg-primary` (gold)

### 3. Services.tsx - Remove Hardcoded Dark Background

- Remove inline `style={{ background: 'linear-gradient(135deg, #2d1810...)' }}`
- Replace with `bg-background` or `bg-card` classes
- Fix photo cards: remove `bg-white`, `text-gray-800`, `text-gray-600` hardcoded colors
- Replace with theme-aware classes (`bg-card`, `text-foreground`, `text-muted-foreground`)
- Remove "MOJJU LAB" stamp text
- Update service titles/descriptions to Management & AI topics
- Remove darkroom/photo lab metaphor, use cleaner layout

### 4. About.tsx - Minor Fixes

- Already uses `bg-background`, `text-foreground` mostly
- Fix hardcoded `from-gray-950 via-gray-900 to-gray-950` on film strip
- Update process steps content from film production to Management & AI workflow

### 5. Team.tsx - Fix Light Backgrounds

- Remove hardcoded `bg-gradient-to-b from-white to-gray-50` on wanted posters
- Remove `text-black`, `text-gray-800` hardcoded colors
- Replace board background `from-slate-100 via-gray-50 to-slate-200` with dark theme equivalents
- Update team member names and descriptions to fit the new brand context

### 6. Awards.tsx - Minor Fixes

- Fix hardcoded `bg-gray-800` on some award cards
- Use `bg-card` consistently

### 7. Contact.tsx - Fix White Embed Area

- Remove `bg-white` from Cal.com container
- Update "MOJJU Discovery Call" to just "Discovery Call"
- Apply theme colors to the embed wrapper

### 8. Footer.tsx - Update Branding

- Change "MOJJU" to "G.Md.Dastageer"
- Update description text to Management & AI focus
- Update copyright text
- Update or remove social media links
- Update "Tools We Use" section to relevant tools (AI tools, management frameworks, etc.)
- Update address/location

### 9. AnimationShowcase.tsx (if present)

- Check for any hardcoded colors and fix

## Files Modified

- `src/components/Hero.tsx`
- `src/components/Services.tsx`
- `src/components/About.tsx`
- `src/components/Team.tsx`
- `src/components/Awards.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## Technical Approach

Replace all hardcoded color classes and inline styles with theme-variable-based equivalents:

```text
Hardcoded                    -->  Theme-based
bg-white                     -->  bg-card or bg-background
text-black                   -->  text-foreground
text-gray-800                -->  text-foreground
text-gray-600                -->  text-muted-foreground
text-amber-100               -->  text-foreground
bg-red-600                   -->  bg-primary
style={{ background: '...'}} -->  className="bg-background"
from-slate-100 via-gray-50   -->  from-card via-secondary
```

This ensures the dark cinematic gold palette from the CSS variables actually takes effect across the entire site.

