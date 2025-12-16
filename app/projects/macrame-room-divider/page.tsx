import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, DollarSign, Users, AlertTriangle, Lightbulb, Star, Ruler } from "lucide-react"

export default function MacrameRoomDivider() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">Advanced Project</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Macramé Room Divider</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Create a stunning large-scale macramé panel to divide spaces while maintaining an open, airy feel. Perfect for studios, lofts, or creating privacy zones.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>15-25 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>$60-120</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Advanced</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video rounded-lg bg-muted mb-8 flex items-center justify-center">
                <img
                  src="/macrame-room-divider-boho-large.jpg"
                  alt="Large-scale macramé room divider with geometric patterns"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="pb-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                  <TabsTrigger value="instructions">Instructions</TabsTrigger>
                  <TabsTrigger value="tips">Tips</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        Transform your living space with this impressive macramé room divider. This advanced project combines 
                        traditional knotting techniques with contemporary design to create a functional art piece that defines 
                        spaces while maintaining visual flow.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Techniques Mastered</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Large-scale project planning
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Complex geometric patterns
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Multi-panel construction
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Professional finishing
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Structural stability
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Finished Specifications</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Width: 6-8 feet</li>
                            <li>• Height: 6-8 feet</li>
                            <li>• Panels: 3-4 sections</li>
                            <li>• Panel spacing: 2-4 inches</li>
                            <li>• Installation: Ceiling-mounted or freestanding</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Design Benefits & Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold mb-2">Functional Benefits</h4>
                          <ul className="space-y-1">
                            <li>• Creates privacy without blocking light</li>
                            <li>• Defines separate areas in open floor plans</li>
                            <li>• Acts as room-sized art installation</li>
                            <li>• Portable and reconfigurable design</li>
                            <li>• Sound dampening properties</li>
                            <li>• Improves acoustics in large spaces</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Ideal Locations</h4>
                          <ul className="space-y-1">
                            <li>• Studio apartments and lofts</li>
                            <li>• Open-plan offices and coworking spaces</li>
                            <li>• Meditation and yoga studios</li>
                            <li>• Retail and boutique displays</li>
                            <li>• Event and wedding venues</li>
                            <li>• Children's play areas</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="materials" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Materials List</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Primary Materials</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 6mm cotton rope - 1000-1500 feet</li>
                            <li>• 3 wooden dowels, 1.5" x 8' each</li>
                            <li>• Heavy-duty ceiling hooks or stands</li>
                            <li>• Connecting hardware (S-hooks, chains)</li>
                            <li>• Wood stain or paint (optional)</li>
                            <li>• Sandpaper (120 and 220 grit)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Tools Required</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Large work surface or floor space</li>
                            <li>• Measuring tape (25+ feet)</li>
                            <li>• Sharp scissors or rope cutter</li>
                            <li>• Drill with bits</li>
                            <li>• Level</li>
                            <li>• Stud finder</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Material Calculations</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Base calculation:</strong> Width × Height × 8 = approximate rope needed</li>
                          <li>• <strong>Pattern density:</strong> Dense patterns require 25% more rope</li>
                          <li>• <strong>Fringe allowance:</strong> Add 20% for finishing elements</li>
                          <li>• <strong>Safety margin:</strong> Order 15% extra for mistakes and adjustments</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Rope Selection Guide</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold mb-2">Cotton Rope</h4>
                          <ul className="space-y-1">
                            <li>• Best overall choice</li>
                            <li>• Soft, natural texture</li>
                            <li>• Easy to work with</li>
                            <li>• Takes dye well</li>
                            <li>• Eco-friendly option</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Jute Rope</h4>
                          <ul className="space-y-1">
                            <li>• Rustic, natural look</li>
                            <li>• Very affordable</li>
                            <li>• Strong and durable</li>
                            <li>• Can be rough on hands</li>
                            <li>• Limited color options</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Synthetic Rope</h4>
                          <ul className="space-y-1">
                            <li>• Weather resistant</li>
                            <li>• Consistent thickness</li>
                            <li>• Won't shrink or stretch</li>
                            <li>• Various colors available</li>
                            <li>• Less eco-friendly</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="tools" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Essential Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-orange-600">Cutting & Measuring</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• 25-foot measuring tape</li>
                            <li>• Sharp fabric scissors</li>
                            <li>• Rotary cutter (optional)</li>
                            <li>• Metal ruler</li>
                            <li>• Chalk or fabric markers</li>
                            <li>• Cutting mat (large)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">Assembly Tools</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Macramé comb/beater</li>
                            <li>• T-pins or clips</li>
                            <li>• Project board (4x8 feet)</li>
                            <li>• Grid paper for planning</li>
                            <li>• Rubber mallet</li>
                            <li>• Clamps (various sizes)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Installation</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Power drill</li>
                            <li>• Drill bits (various sizes)</li>
                            <li>• Stud finder</li>
                            <li>• Level (4-foot minimum)</li>
                            <li>• Socket wrench set</li>
                            <li>• Safety equipment</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructions" className="space-y-6">
                  <div className="grid gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Phase 1: Planning & Preparation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Measure your space and determine divider dimensions</li>
                          <li>Create a scaled drawing with measurements</li>
                          <li>Plan your pattern design on grid paper</li>
                          <li>Calculate exact rope requirements</li>
                          <li>Prepare your work surface (minimum 8x10 feet)</li>
                          <li>Cut all mounting dowels to length and sand smooth</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Phase 2: Foundation Setup</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Mark rope attachment points on dowels (every 3-4 inches)</li>
                          <li>Cut base cords: each should be 2.5 times the finished height</li>
                          <li>Attach cords to dowels using lark's head knots</li>
                          <li>Ensure even spacing and consistent tension</li>
                          <li>Create a working grid with horizontal guidelines</li>
                          <li>Test pattern on a small section first</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Phase 3: Pattern Construction</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Begin with square knots every 6-8 inches down</li>
                          <li>Create diamond patterns using diagonal double half hitches</li>
                          <li>Add alternating square knots for stability</li>
                          <li>Incorporate spiral patterns for visual interest</li>
                          <li>Maintain consistent spacing throughout</li>
                          <li>Check measurements frequently</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Phase 4: Panel Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Work each panel to approximately 80% completion</li>
                          <li>Create connecting loops between panels</li>
                          <li>Test fit panels together regularly</li>
                          <li>Adjust pattern density as needed</li>
                          <li>Add decorative elements (beads, tassels)</li>
                          <li>Ensure structural integrity at stress points</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Phase 5: Assembly & Finishing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Complete final rows of each panel</li>
                          <li>Trim all cord ends to uniform length</li>
                          <li>Create finished bottom edge with fringe or hem</li>
                          <li>Connect panels using discrete joining methods</li>
                          <li>Add mounting hardware to top dowels</li>
                          <li>Steam or lightly dampen to set final shape</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Phase 6: Installation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Locate ceiling joists or wall studs for secure mounting</li>
                          <li>Install ceiling hooks rated for 50+ pounds each</li>
                          <li>Use adjustable chains for height fine-tuning</li>
                          <li>Hang panels with helper for large installations</li>
                          <li>Level and adjust until perfectly positioned</li>
                          <li>Test stability and make final adjustments</li>
                        </ol>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="tips" className="space-y-6">
                  <div className="grid gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-yellow-500" />
                          Expert Tips for Large-Scale Projects
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Work in Sections:</strong> Complete one panel at a time to maintain quality and prevent overwhelming yourself.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Consistent Tension:</strong> Mark your preferred knot tightness and refer to it throughout the project.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Regular Breaks:</strong> Take breaks every 2 hours to prevent hand fatigue and maintain precision.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Pattern Documentation:</strong> Photograph your work frequently to track pattern progression.</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-500" />
                          Safety Considerations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Weight Distribution:</strong> Ensure ceiling/wall supports can handle distributed load</li>
                          <li>• <strong>Electrical Safety:</strong> Keep installation away from electrical fixtures and outlets</li>
                          <li>• <strong>Fire Safety:</strong> Natural fibers are fire-resistant but not fireproof</li>
                          <li>• <strong>Child Safety:</strong> Consider cord length and accessibility in homes with small children</li>
                          <li>• <strong>Seismic Areas:</strong> Use additional securing methods in earthquake-prone regions</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Design Variations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h4 className="font-semibold mb-2">Pattern Options</h4>
                            <ul className="space-y-1">
                              <li>• <strong>Geometric:</strong> Repeating diamonds and squares</li>
                              <li>• <strong>Organic:</strong> Flowing curves and natural shapes</li>
                              <li>• <strong>Minimalist:</strong> Simple vertical or diagonal lines</li>
                              <li>• <strong>Mixed Media:</strong> Incorporate wood, metal, or beads</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Configuration Options</h4>
                            <ul className="space-y-1">
                              <li>• <strong>Fixed Panels:</strong> Permanent room division</li>
                              <li>• <strong>Sliding Track:</strong> Moveable room configuration</li>
                              <li>• <strong>Accordion Style:</strong> Foldable for storage</li>
                              <li>• <strong>Floor Stand:</strong> Portable, no installation required</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Maintenance & Care</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Regular Dusting:</strong> Use vacuum brush attachment monthly</li>
                          <li>• <strong>Deep Cleaning:</strong> Gentle hand washing for spot cleaning only</li>
                          <li>• <strong>Inspection:</strong> Check mounting hardware quarterly</li>
                          <li>• <strong>Retightening:</strong> Adjust knots that may have loosened over time</li>
                          <li>• <strong>Storage:</strong> Lay flat when not in use to prevent stretching</li>
                          <li>• <strong>Humidity Control:</strong> Avoid placement in very humid environments</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Related Projects Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Related Fiber Arts Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">
                        <a href="/projects/macrame-plant-hanger" className="text-blue-600 hover:underline">
                          Macramé Plant Hanger
                        </a>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Master basic macramé knots with this beginner-friendly hanging planter project.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">
                        <a href="/projects/woven-wall-tapestry" className="text-blue-600 hover:underline">
                          Woven Wall Tapestry
                        </a>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Explore traditional weaving techniques to create stunning wall art with texture and color.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}