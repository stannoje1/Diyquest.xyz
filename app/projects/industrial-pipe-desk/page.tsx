import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, DollarSign, Users, AlertTriangle, Lightbulb, Star } from "lucide-react"

export default function IndustrialPipeDesk() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Pipe Desk</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Build a stunning industrial-style desk with steel pipes and reclaimed wood. Perfect for modern offices and creative spaces.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>8-12 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>$120-180</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Advanced</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video rounded-lg bg-muted mb-8 flex items-center justify-center">
                <img
                  src="/industrial-pipe-desk-workspace.jpg"
                  alt="Industrial pipe desk with reclaimed wood surface"
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
                        Create a robust industrial-style desk that combines the raw appeal of steel pipes with 
                        the warmth of reclaimed wood. This project requires advanced metalworking skills but 
                        results in a unique, durable workspace.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">What You'll Learn</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Pipe threading and fitting
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Wood finishing techniques
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Industrial design principles
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Advanced measuring and leveling
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Finished Dimensions</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Length: 60 inches</li>
                            <li>• Width: 30 inches</li>
                            <li>• Height: 29 inches</li>
                            <li>• Desktop thickness: 2 inches</li>
                            <li>• Weight capacity: 200+ lbs</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                        Safety Considerations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Always wear safety glasses when cutting or threading pipes</li>
                        <li>• Use proper ventilation when applying finishes</li>
                        <li>• Ensure all pipe connections are tight to prevent wobbling</li>
                        <li>• Sand reclaimed wood thoroughly to remove splinters</li>
                        <li>• Use proper lifting techniques - this desk will be heavy</li>
                      </ul>
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
                          <h4 className="font-semibold mb-3">Steel Pipes & Fittings</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 4x 1" black iron pipes, 28" long (legs)</li>
                            <li>• 2x 1" black iron pipes, 26" long (side supports)</li>
                            <li>• 2x 1" black iron pipes, 56" long (length supports)</li>
                            <li>• 8x 1" floor flanges</li>
                            <li>• 4x 1" 90-degree elbows</li>
                            <li>• 4x 1" tees</li>
                            <li>• Pipe thread compound</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Wood & Finishing</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 1x reclaimed wood slab, 60" × 30" × 2"</li>
                            <li>• Wood stain (walnut or ebony)</li>
                            <li>• Polyurethane finish (satin)</li>
                            <li>• 120, 220, 320 grit sandpaper</li>
                            <li>• Wood conditioner</li>
                            <li>• Pipe clamps (4-6 pieces)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Hardware & Fasteners</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                          <li>• 16x 2.5" wood screws</li>
                          <li>• 8x 1/4" × 3" lag bolts</li>
                          <li>• Washers and nuts</li>
                          <li>• Adjustable feet (optional)</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="tools" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Required Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-orange-600">Essential Tools</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Pipe cutter or hacksaw</li>
                            <li>• Pipe threading machine</li>
                            <li>• Pipe wrench set</li>
                            <li>• Orbital sander</li>
                            <li>• Drill with bits</li>
                            <li>• Level</li>
                            <li>• Measuring tape</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">Helpful Tools</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Angle grinder</li>
                            <li>• Bench vise</li>
                            <li>• Router (for edge treatment)</li>
                            <li>• Clamps</li>
                            <li>• Safety equipment</li>
                            <li>• Work table</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Safety Gear</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Safety glasses</li>
                            <li>• Work gloves</li>
                            <li>• Dust mask</li>
                            <li>• Hearing protection</li>
                            <li>• Steel-toe boots</li>
                            <li>• First aid kit</li>
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
                        <CardTitle>Step 1: Plan and Prepare</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Create detailed drawings with all measurements</li>
                          <li>Layout all pipes and fittings to verify quantities</li>
                          <li>Prepare workspace with adequate ventilation</li>
                          <li>Inspect reclaimed wood for defects and plan cuts</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 2: Cut and Thread Pipes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Cut all pipes to specified lengths using pipe cutter</li>
                          <li>Thread both ends of each pipe using threading machine</li>
                          <li>Clean threads and apply thread compound</li>
                          <li>Test fit all connections before final assembly</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 3: Assemble Frame</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Connect floor flanges to leg pipes</li>
                          <li>Attach horizontal supports using tees and elbows</li>
                          <li>Assemble frame in logical sections</li>
                          <li>Check for square and level during assembly</li>
                          <li>Tighten all connections securely</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 4: Prepare Desktop</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Sand desktop starting with 120 grit, finishing with 320</li>
                          <li>Apply wood conditioner to ensure even stain absorption</li>
                          <li>Apply stain in thin, even coats</li>
                          <li>Allow proper drying time between coats</li>
                          <li>Apply 3 coats of polyurethane, sanding lightly between coats</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 5: Final Assembly</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Position frame upside down on work surface</li>
                          <li>Place desktop face-down on frame</li>
                          <li>Mark mounting holes through pipe flanges</li>
                          <li>Drill pilot holes and attach with lag bolts</li>
                          <li>Flip desk upright and check stability</li>
                          <li>Add adjustable feet if needed for leveling</li>
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
                          Pro Tips
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Thread Quality:</strong> Use cutting oil when threading to ensure clean, smooth threads that will assemble easily.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Wood Selection:</strong> Choose reclaimed wood with interesting grain patterns - the character adds to the industrial aesthetic.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Pipe Preparation:</strong> Clean pipes with degreaser before assembly to remove manufacturing oils.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Finishing:</strong> Apply finish to pipes as well - clear coat prevents rust and makes cleaning easier.</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Troubleshooting</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4 text-sm">
                          <div>
                            <h4 className="font-medium mb-2">Wobbly Desk</h4>
                            <p>Check that all pipe connections are tight. Ensure floor is level or use adjustable feet to compensate.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Uneven Desktop</h4>
                            <p>Use shims between frame and desktop. Sand high spots or add washers to low areas before final attachment.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Stripped Threads</h4>
                            <p>Use pipe repair compound or replace the fitting. Prevention is better - don't over-tighten connections.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Customization Ideas</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Add a lower shelf using additional pipes and a smaller wood slab</li>
                          <li>• Install cable management grommets in the desktop</li>
                          <li>• Use different pipe finishes (galvanized, copper, or painted)</li>
                          <li>• Add industrial-style lighting underneath</li>
                          <li>• Include built-in power outlets in the frame</li>
                          <li>• Create matching storage cubes using similar construction</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}