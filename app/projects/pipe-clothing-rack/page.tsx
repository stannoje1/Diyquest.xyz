import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, DollarSign, Users, AlertTriangle, Lightbulb, Star } from "lucide-react"

export default function PipeClothingRack() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">Beginner Project</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Pipe Clothing Rack</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Build a stylish industrial clothing rack using galvanized pipes. Perfect for bedrooms, closets, or retail displays.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>3-4 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>$45-70</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Beginner</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video rounded-lg bg-muted mb-8 flex items-center justify-center">
                <img
                  src="/pipe-clothing-rack-industrial-style.jpg"
                  alt="Industrial pipe clothing rack with galvanized finish"
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
                        Create a functional and stylish clothing rack using standard galvanized pipes and fittings. 
                        This beginner-friendly project requires no welding and can be customized to fit any space or style.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">What You'll Learn</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Pipe fitting and assembly
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Basic plumbing techniques
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Industrial design aesthetics
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Functional furniture construction
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Finished Dimensions</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Width: 48 inches</li>
                            <li>• Depth: 16 inches</li>
                            <li>• Height: 65 inches</li>
                            <li>• Hanging rod height: 60 inches</li>
                            <li>• Weight capacity: 50+ lbs</li>
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
                        <li>• Wear safety glasses when cutting pipes</li>
                        <li>• Use proper lifting techniques - assembled rack is heavy</li>
                        <li>• Ensure all connections are tight to prevent instability</li>
                        <li>• Check that rack is level and stable before loading with clothes</li>
                        <li>• Consider wall anchoring for added stability in high-traffic areas</li>
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
                          <h4 className="font-semibold mb-3">Galvanized Pipes</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 4x 1" × 60" vertical pipes (uprights)</li>
                            <li>• 2x 1" × 44" horizontal pipes (top & bottom rails)</li>
                            <li>• 2x 1" × 12" horizontal pipes (side supports)</li>
                            <li>• 1x 1" × 44" pipe for clothing rod</li>
                            <li>• Optional: 1x wooden dowel, 1-1/8" × 44" (softer on clothes)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Fittings & Hardware</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 4x 1" floor flanges</li>
                            <li>• 8x 1" 90-degree elbows</li>
                            <li>• 4x 1" tee fittings</li>
                            <li>• 2x 1" caps (for clothing rod ends)</li>
                            <li>• Pipe thread compound</li>
                            <li>• 4x rubber furniture pads (floor protection)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Optional Accessories</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                          <li>• S-hooks for accessories</li>
                          <li>• Wire basket for shoes</li>
                          <li>• Wooden shelf board, 44" × 12"</li>
                          <li>• Industrial casters (for mobile version)</li>
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
                            <li>• Pipe wrench (2 sizes)</li>
                            <li>• Pipe cutter or hacksaw</li>
                            <li>• Measuring tape</li>
                            <li>• Level</li>
                            <li>• Marker or chalk</li>
                            <li>• Rag for cleanup</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">Helpful Tools</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Pipe threading tool</li>
                            <li>• Deburring tool</li>
                            <li>• Work bench or saw horses</li>
                            <li>• Drop cloth</li>
                            <li>• Assembly area</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Safety Gear</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Safety glasses</li>
                            <li>• Work gloves</li>
                            <li>• Steel-toe boots (recommended)</li>
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
                          <li>Lay out all pipes and fittings to verify quantities</li>
                          <li>Measure your space to confirm dimensions will work</li>
                          <li>Clean pipes with degreaser if needed</li>
                          <li>Organize workspace with adequate room for assembly</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 2: Assemble Base Frame</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Connect floor flanges to bottom of 4 vertical pipes</li>
                          <li>Apply thread compound to all connections</li>
                          <li>Attach 12" side pipes to two vertical pipes using elbows</li>
                          <li>Connect 44" bottom rail using tee fittings</li>
                          <li>Check frame is square and level</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 3: Add Top Structure</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Attach elbows to top of all vertical pipes</li>
                          <li>Connect 12" side pipes between front and back uprights</li>
                          <li>Install 44" top rail using tee fittings</li>
                          <li>Ensure all connections are hand-tight plus 1-2 turns with wrench</li>
                          <li>Check that frame is stable and doesn't wobble</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 4: Install Clothing Rod</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Position clothing rod 4-6" below top rail</li>
                          <li>Mark positions for rod supports on vertical pipes</li>
                          <li>Install tee fittings at marked positions</li>
                          <li>Insert clothing rod through tee fittings</li>
                          <li>Add caps to rod ends for finished appearance</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 5: Final Assembly and Testing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Tighten all connections securely but don't over-tighten</li>
                          <li>Check that rack sits level and stable</li>
                          <li>Add rubber pads to floor flanges</li>
                          <li>Test with light clothing load before full use</li>
                          <li>Adjust any loose connections as needed</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 6: Optional Upgrades</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Add wooden shelf by securing board to lower rail</li>
                          <li>Install wire basket using S-hooks</li>
                          <li>Add casters to base for mobility (requires longer pipes)</li>
                          <li>Install additional rods at different heights</li>
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
                            <span><strong>Thread Compound:</strong> Use pipe thread compound on all connections to prevent leaks and ensure tight fits.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Dry Assembly:</strong> Test fit everything before final tightening to ensure proper alignment.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Clothing Rod:</strong> Use a wooden dowel instead of pipe for the clothing rod - it's gentler on fabric.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Stability:</strong> For extra stability, consider attaching to wall with brackets.</span>
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
                            <h4 className="font-medium mb-2">Wobbly Rack</h4>
                            <p>Check all connections for tightness. Ensure base sits flat on floor. Consider adding diagonal braces for extra rigidity.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Pipes Won't Fit</h4>
                            <p>Check pipe threading. Remove any burrs with deburring tool. Apply thread compound for easier assembly.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Uneven Height</h4>
                            <p>Adjust floor pads or use adjustable furniture feet. Check that floor is level.</p>
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
                          <li>• <strong>Colors:</strong> Paint pipes in custom colors to match decor</li>
                          <li>• <strong>Size Variations:</strong> Adjust dimensions for different spaces</li>
                          <li>• <strong>Double Rack:</strong> Add second clothing rod at lower height</li>
                          <li>• <strong>Retail Style:</strong> Add price tag clips and signage holders</li>
                          <li>• <strong>Mobile Version:</strong> Add heavy-duty casters to base</li>
                          <li>• <strong>Storage:</strong> Include shelving, baskets, or shoe racks</li>
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