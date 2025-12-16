import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  Clock, 
  DollarSign, 
  Star, 
  Share2, 
  Bookmark, 
  ChevronRight,
  Wrench,
  Ruler,
  Scissors,
  Drill
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ModernWoodenDeskOrganizerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b">
          <div className="container py-8 md:py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/projects" className="hover:text-foreground">Projects</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Modern Wooden Desk Organizer</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Project Image */}
              <div className="relative">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-amber-800 rounded-lg mx-auto mb-4 shadow-lg transform rotate-3"></div>
                      <p className="text-amber-800 font-medium">Modern Wooden Desk Organizer</p>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Intermediate</Badge>
                    <Badge variant="outline">Woodworking</Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Modern Wooden Desk Organizer
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Transform your workspace with this sleek, minimalist wooden desk organizer. 
                    Perfect for keeping pens, papers, and small items neatly arranged while 
                    adding a touch of natural elegance to your desk.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">2-3 Hours</div>
                      <div className="text-xs text-muted-foreground">Build Time</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <DollarSign className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">$25-40</div>
                      <div className="text-xs text-muted-foreground">Est. Cost</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Wrench className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">Basic</div>
                      <div className="text-xs text-muted-foreground">Tools Req.</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Star className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">4.8/5</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA Button */}
                <Button size="lg" className="w-full md:w-auto">
                  Start Building Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container">
            <Tabs defaultValue="overview" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="tips">Tips & Variations</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                      <div className="prose max-w-none">
                        <p>
                          This modern wooden desk organizer combines functionality with aesthetic appeal, 
                          featuring multiple compartments for different office supplies. The design uses 
                          clean lines and natural wood grain to create an organizer that complements any 
                          contemporary workspace.
                        </p>
                        <p>
                          The organizer includes compartments for pens and pencils, a slot for papers and 
                          notebooks, a small drawer for clips and small items, and a phone stand. The 
                          entire unit measures approximately 12" × 8" × 4" and can be customized to fit 
                          your specific needs.
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Basic wood joinery techniques</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Precision measuring and cutting</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Sanding and finishing techniques</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Creating functional compartments</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Project Details</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Difficulty</span>
                            <span className="font-medium">Intermediate</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Category</span>
                            <span className="font-medium">Office & Organization</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Dimensions</span>
                            <span className="font-medium">12" × 8" × 4"</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Wood Type</span>
                            <span className="font-medium">Oak or Pine</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Finish</span>
                            <span className="font-medium">Natural Oil</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Required Skills</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Ruler className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Measuring & Marking</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Scissors className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Cutting Wood</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Drill className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Drilling Holes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Wrench className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Assembly</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="materials" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Materials Needed</h2>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Wood & Hardware</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Oak or Pine board (1" × 8" × 3')</span>
                            <span className="text-muted-foreground">$15-25</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Wood screws (1¼")</span>
                            <span className="text-muted-foreground">$3</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Wood glue</span>
                            <span className="text-muted-foreground">$4</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Sandpaper (120, 220 grit)</span>
                            <span className="text-muted-foreground">$5</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Danish oil or polyurethane</span>
                            <span className="text-muted-foreground">$8</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between items-center font-semibold">
                            <span>Total Estimated Cost</span>
                            <span>$35-45</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Tools Required</h2>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Essential Tools</h3>
                        <div className="grid gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Miter saw or hand saw</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Drill with bits</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Measuring tape</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Square</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Pencil</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Clamps</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Random orbital sander (optional)</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructions" className="space-y-6">
                <h2 className="text-2xl font-semibold">Step-by-Step Instructions</h2>
                
                <div className="space-y-8">
                  {/* Step 1 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          1
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-semibold">Cut the Wood Pieces</h3>
                          <p className="text-muted-foreground">
                            Start by cutting your wood to the following dimensions:
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li>• Base: 12" × 8" × ¾"</li>
                            <li>• Back panel: 12" × 4" × ¾"</li>
                            <li>• Side dividers: 6" × 3" × ¾" (2 pieces)</li>
                            <li>• Center divider: 4" × 3" × ¾"</li>
                            <li>• Drawer front: 3" × 2" × ¾"</li>
                          </ul>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Double-check all measurements before cutting and sand cut edges smooth.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 2 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          2
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-semibold">Create the Phone Stand Slot</h3>
                          <p className="text-muted-foreground">
                            On the back panel, mark and cut a angled slot (approximately 15°) that's ½" wide 
                            and 3" long for the phone stand. This slot should be positioned about 2" from one end.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Use a jigsaw or router to create clean, smooth edges for the slot.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 3 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          3
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-semibold">Assemble the Frame</h3>
                          <p className="text-muted-foreground">
                            Attach the back panel to the base using wood glue and screws. Make sure the back 
                            panel is flush with the back edge of the base and perpendicular to the surface.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Pre-drill holes to prevent splitting and use clamps to hold pieces while the glue sets.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 4 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          4
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-semibold">Install the Dividers</h3>
                          <p className="text-muted-foreground">
                            Position and attach the side dividers and center divider to create separate 
                            compartments. The layout should include spaces for pens, paper storage, 
                            and a small drawer compartment.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Test fit all pieces before applying glue to ensure proper alignment.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 5 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          5
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-semibold">Sand and Finish</h3>
                          <p className="text-muted-foreground">
                            Sand the entire organizer starting with 120-grit, then 220-grit sandpaper. 
                            Apply your chosen finish (danish oil or polyurethane) according to manufacturer instructions.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Allow each coat to dry completely before applying the next. Light sanding between coats creates a smoother finish.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Pro Tips</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Wood Selection</h3>
                          <p className="text-sm text-muted-foreground">
                            Oak provides durability and beautiful grain, while pine is more budget-friendly 
                            and easier to work with for beginners.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Finishing Options</h3>
                          <p className="text-sm text-muted-foreground">
                            Danish oil penetrates the wood for a natural look, while polyurethane 
                            provides better protection for heavy use.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Safety First</h3>
                          <p className="text-sm text-muted-foreground">
                            Always wear safety glasses when cutting or sanding. Ensure good ventilation 
                            when applying finishes.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Variations</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Add LED Lighting</h3>
                          <p className="text-sm text-muted-foreground">
                            Install battery-powered LED strip lights under the top edge for accent lighting.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Wireless Charging</h3>
                          <p className="text-sm text-muted-foreground">
                            Integrate a wireless charging pad into the top surface for modern convenience.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Size Variations</h3>
                          <p className="text-sm text-muted-foreground">
                            Scale the dimensions up or down to fit your specific desk space and storage needs.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Projects Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Related Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover more woodworking and organization projects to enhance your workspace
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="group cursor-pointer hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">Beginner</Badge>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Related Project {i}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Brief description of another great DIY project for your workspace.
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">1-2 hours</span>
                        <span className="font-medium">$15-25</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}