'use client'

export function Footer() {
  const tools = [
    'ChatGPT & GPT-4',
    'Claude AI',
    'Python & TensorFlow',
    'Tableau & Power BI',
    'Notion & Obsidian',
    'Figma',
    'Google Analytics',
    'Jira & Confluence',
    'Midjourney',
    'Runway ML',
    'LangChain'
  ]

  return (
    <footer className="relative py-20 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-4">
            <div>
              <div className="font-bagel text-background text-3xl tracking-wider mb-4">
                G.Md.Dastageer
              </div>
              <p className="text-background/70 leading-relaxed mb-6">
                MBA student at NIT Kurukshetra passionate about the intersection of 
                management strategy and artificial intelligence.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-6">
                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-background/80 hover:text-background">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 gentle-animation cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-background/80 hover:text-background">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="col-span-12 md:col-span-8">
            <div>
              <h4 className="font-black text-2xl text-background mb-4">TOOLS & FRAMEWORKS</h4>
              
              <p className="text-background/70 text-base mb-8 leading-relaxed">
                Leveraging the latest AI and management tools to deliver data-driven strategies 
                and intelligent solutions for modern business challenges.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="text-background/80 hover:text-background gentle-animation text-sm font-medium"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/70 mb-4 md:mb-0">
              © 2025 G.Md.Dastageer. All rights reserved.
            </div>
            <div className="text-sm text-background/70">
              NIT Kurukshetra, Haryana, India
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
