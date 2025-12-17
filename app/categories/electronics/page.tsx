import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Users, Cpu, Zap, Wifi } from "lucide-react"
import Link from "next/link"

export default function ElectronicsCategory() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Category</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Electronics Projects</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Dive into the exciting world of DIY electronics! From basic circuits to smart home 
                automation, learn to build, program, and create electronic devices that make life 
                easier, more fun, and more connected.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Coming Soon</span>
                </div>
                <span>•</span>
                <span>Beginner to Expert</span>
                <span>•</span>
                <span>Arduino & Raspberry Pi</span>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Projects */}
        <section className="pb-20">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Exciting Projects Coming Soon</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Home Weather Station",
                  description: "Build an Arduino-based weather monitoring system with WiFi connectivity and web dashboard.",
                  difficulty: "Intermediate",
                  time: "6-8 hours",
                  cost: "$45-70",
                  category: "Arduino"
                },
                {
                  title: "LED Strip Mood Lighting",
                  description: "Create programmable RGB lighting with smartphone control and music synchronization.",
                  difficulty: "Beginner",
                  time: "3-4 hours", 
                  cost: "$25-40",
                  category: "Arduino"
                },
                {
                  title: "Home Security Camera System",
                  description: "Raspberry Pi-powered surveillance system with motion detection and cloud storage.",
                  difficulty: "Advanced",
                  time: "10-15 hours",
                  cost: "$80-150",
                  category: "Raspberry Pi"
                },
                {
                  title: "Smart Plant Watering System",
                  description: "Automated plant care with soil sensors, pump control, and mobile notifications.",
                  difficulty: "Intermediate",
                  time: "5-7 hours",
                  cost: "$35-55",
                  category: "Arduino"
                },
                {
                  title: "Digital Clock with Weather Display",
                  description: "OLED display showing time, weather, and custom messages with button controls.",
                  difficulty: "Beginner",
                  time: "4-6 hours",
                  cost: "$30-50",
                  category: "Arduino"
                },
                {
                  title: "Voice-Controlled Home Assistant",
                  description: "Build a custom voice assistant using Raspberry Pi for smart home control.",
                  difficulty: "Expert",
                  time: "15-20 hours",
                  cost: "$120-200",
                  category: "Raspberry Pi"
                }
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden opacity-75 hover:opacity-90 transition-all">
                  <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Cpu className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                        <Badge variant="outline" className="mb-2">{project.category}</Badge>
                      </div>
                    </div>
                    <Badge 
                      className="absolute top-4 left-4 bg-background/90 text-foreground hover:bg-background"
                      variant={
                        project.difficulty === "Beginner" ? "secondary" : 
                        project.difficulty === "Intermediate" ? "default" : 
                        project.difficulty === "Advanced" ? "destructive" : "destructive"
                      }
                    >
                      {project.difficulty}
                    </Badge>
                    <Badge 
                      className="absolute top-4 right-4 bg-yellow-500 text-yellow-900"
                      variant="secondary"
                    >
                      Coming Soon
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{project.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{project.cost}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Skills You'll Master</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Cpu className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                    <h3 className="font-bold mb-2">Microcontrollers</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn Arduino and Raspberry Pi programming, circuit design, and sensor integration.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Zap className="h-8 w-8 mx-auto mb-4 text-yellow-600" />
                    <h3 className="font-bold mb-2">Circuit Building</h3>
                    <p className="text-sm text-muted-foreground">
                      Master breadboarding, soldering, component selection, and electrical safety practices.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Wifi className="h-8 w-8 mx-auto mb-4 text-green-600" />
                    <h3 className="font-bold mb-2">IoT & Connectivity</h3>
                    <p className="text-sm text-muted-foreground">
                      Build connected devices with WiFi, Bluetooth, and cloud integration capabilities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <Cpu className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h2 className="text-2xl font-bold mb-4">Be First to Know!</h2>
                  <p className="text-muted-foreground mb-6">
                    Electronics projects are in development! Sign up to be notified when we launch 
                    our Arduino tutorials, Raspberry Pi projects, and smart home automation guides.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <Badge variant="outline">Arduino Tutorials</Badge>
                    <Badge variant="outline">Raspberry Pi Projects</Badge>
                    <Badge variant="outline">Smart Home Automation</Badge>
                    <Badge variant="outline">IoT Devices</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    In the meantime, check out our other categories to build foundational DIY skills!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6">
                  While we prepare our electronics collection, explore our other categories to 
                  build essential DIY skills that complement electronics projects.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/categories/woodworking" className="text-primary hover:underline font-medium">
                    Try Woodworking →
                  </Link>
                  <Link href="/essential-diy-tools" className="text-primary hover:underline font-medium">
                    Essential Tools Guide →
                  </Link>
                  <Link href="/projects" className="text-primary hover:underline font-medium">
                    Browse All Projects →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}