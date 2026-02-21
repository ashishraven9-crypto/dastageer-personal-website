'use client'

import { ImageWithFallback } from './figma/ImageWithFallback'
import marcusPhoto from '../assets/team-member-1.png'
import sofiaPhoto from '../assets/team-member-2.png'
import jakePhoto from '../assets/team-member-3.png'
import mayaPhoto from '../assets/team-member-4.png'
import connorPhoto from '../assets/team-member-5.png'
import zaraPhoto from '../assets/team-member-6.png'
import leoPhoto from '../assets/team-member-7.png'

export function Team() {
  const teamMembers = [
    {
      name: "Marcus Chen",
      role: "STRATEGY LEAD",
      specialty: "Strategic Management",
      description: "Transforms complex business challenges into clear, actionable strategies. Expert in organizational design and stakeholder management.",
      image: marcusPhoto,
      rotation: 'rotate-3',
    },
    {
      name: "Sofia Reyes",
      role: "PROJECT DIRECTOR",
      specialty: "Operations",
      description: "Drives cross-functional initiatives from ideation to execution. Master of agile methodologies and resource optimization.",
      image: sofiaPhoto,
      rotation: 'rotate-2',
    },
    {
      name: "Jake Morrison",
      role: "AI ARCHITECT",
      specialty: "AI & Machine Learning",
      description: "Designs and deploys intelligent systems that automate workflows. Specialist in NLP, predictive analytics, and generative AI.",
      image: jakePhoto,
      rotation: 'rotate-2',
    },
    {
      name: "Maya Patel",
      role: "DATA SCIENTIST",
      specialty: "Analytics",
      description: "Converts raw data into strategic insights using advanced statistical models. Expert in visualization and decision intelligence.",
      image: mayaPhoto,
      rotation: '-rotate-2',
    },
    {
      name: "Connor Blake",
      role: "TECH LEAD",
      specialty: "Engineering",
      description: "Architects scalable solutions that bridge business needs with cutting-edge technology. Full-stack expertise with cloud-native focus.",
      image: connorPhoto,
      rotation: 'rotate-1',
    },
    {
      name: "Zara Kim",
      role: "UX STRATEGIST",
      specialty: "Design & Research",
      description: "Crafts user experiences grounded in research and behavioral science. Advocates for human-centered AI design principles.",
      image: zaraPhoto,
      rotation: '-rotate-1',
    },
    {
      name: "Leo Fernandez",
      role: "GROWTH ANALYST",
      specialty: "Business Intelligence",
      description: "Identifies market opportunities through competitive analysis and trend forecasting. Expert in growth frameworks and KPI optimization.",
      image: leoPhoto,
      rotation: 'rotate-3',
    }
  ]

  return (
    <div className="relative py-32 bg-background w-full" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">Meet the Team</span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground">
            <span className="block mb-2">The People Behind</span>
            <span className="block text-primary">The Vision</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Highly skilled and passionately driven
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
          {/* First row - 4 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
            {teamMembers.slice(0, 4).map((member) => (
              <div
                key={member.name}
                className={`group transform ${member.rotation} hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-20`}
                style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))', overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}
              >
                <div className="bg-card border-2 border-border rounded-xl relative shadow-lg overflow-hidden" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
                  
                  {/* Accent dots */}
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg border border-primary/50" />
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg border border-primary/50" />

                  <div className="p-6 text-center relative z-10">
                    {/* Role Badge */}
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-primary mb-2 tracking-widest">{member.role}</h3>
                      <div className="w-full h-0.5 bg-border mb-2" />
                    </div>

                    {/* Photo */}
                    <div className="relative mb-4 mx-auto w-32 h-32 border-2 border-border bg-secondary rounded-full overflow-hidden" style={{ overflow: 'visible' }}>
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Details */}
                    <div className="text-left space-y-2">
                      <div className="font-black text-lg text-foreground">{member.name}</div>
                      <div className="font-bold text-primary text-sm">{member.specialty}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed bg-secondary/50 p-3 rounded-lg border-l-2 border-primary">
                        {member.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row - 3 members centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl mx-auto" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
            {teamMembers.slice(4, 7).map((member) => (
              <div
                key={member.name}
                className={`group transform ${member.rotation} hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-20`}
                style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))', overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}
              >
                <div className="bg-card border-2 border-border rounded-xl relative shadow-lg overflow-hidden" style={{ overflow: 'visible', height: 'auto', minHeight: '0', maxHeight: 'none' }}>
                  
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg border border-primary/50" />
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg border border-primary/50" />

                  <div className="p-6 text-center relative z-10">
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-primary mb-2 tracking-widest">{member.role}</h3>
                      <div className="w-full h-0.5 bg-border mb-2" />
                    </div>

                    <div className="relative mb-4 mx-auto w-32 h-32 border-2 border-border bg-secondary rounded-full overflow-hidden" style={{ overflow: 'visible' }}>
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div className="text-left space-y-2">
                      <div className="font-black text-lg text-foreground">{member.name}</div>
                      <div className="font-bold text-primary text-sm">{member.specialty}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed bg-secondary/50 p-3 rounded-lg border-l-2 border-primary">
                        {member.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
