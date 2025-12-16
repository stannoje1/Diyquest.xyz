import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, DollarSign, Users, AlertTriangle, Lightbulb, Star } from "lucide-react"

export default function MetalWoodCoffeeTable() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">Intermediate Project</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Metal & Wood Coffee Table</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Create a stunning modern coffee table combining sleek metal hairpin legs with a beautiful reclaimed wood top.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>6-8 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>$80-120</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video rounded-lg bg-muted mb-8 flex items-center justify-center">
                <img
                  src="/metal-wood-coffee-table-modern.jpg"
                  alt="Modern coffee table with hairpin legs and reclaimed wood top"
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
                        Build a sleek, modern coffee table that perfectly balances industrial metal with warm wood tones. 
                        This intermediate-level project combines metalworking with woodworking to create a functional piece of furniture.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">What You'll Learn</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Metal rod bending techniques
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Welding or metal joining
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Wood planing and finishing
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Mixed material construction
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Finished Dimensions</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Length: 48 inches</li>
                            <li>• Width: 24 inches</li>
                            <li>• Height: 18 inches</li>
                            <li>• Top thickness: 1.5 inches</li>
                            <li>• Weight capacity: 75 lbs</li>
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
                        <li>• Always wear welding mask and protective gear when welding</li>
                        <li>• Ensure proper ventilation when using metal primers and paints</li>
                        <li>• Use push sticks when working wood through power tools</li>
                        <li>• Check metal legs for sharp edges and file smooth</li>
                        <li>• Let metal cool completely before handling after welding</li>
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
                          <h4 className="font-semibold mb-3">Metal Components</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 4x 1/2" steel rod, 16" long (hairpin legs)</li>
                            <li>• 2x 3/4" × 3" flat steel bar (mounting plates)</li>
                            <li>• Metal primer and paint (black or desired color)</li>
                            <li>• Welding rods or brazing material</li>
                            <li>• 8x 1/4" × 2" machine screws</li>
                            <li>• 8x nuts and washers</li>
                            <li>• Felt pads (optional, for floor protection)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Wood Components</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 1x reclaimed wood slab, 48" × 24" × 1.5"</li>
                            <li>• Or 2x12" boards glued together</li>
                            <li>• Wood stain (walnut or natural)</li>
                            <li>• Polyurethane finish (satin)</li>
                            <li>• Wood glue (if joining boards)</li>
                            <li>• 120, 220, 320 grit sandpaper</li>
                            <li>• Wood conditioner</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Optional Upgrades</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                          <li>• Live edge wood slab for unique look</li>
                          <li>• Copper pipes for different aesthetic</li>
                          <li>• Glass top for modern look</li>
                          <li>• LED strip lighting underneath</li>
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
                          <h4 className="font-semibold mb-3 text-orange-600">Metalworking Tools</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Welder (MIG or stick)</li>
                            <li>• Angle grinder</li>
                            <li>• Metal cutting saw</li>
                            <li>• Drill with metal bits</li>
                            <li>• Files and sandpaper</li>
                            <li>• Measuring tape</li>
                            <li>• Metal bending jig</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">Woodworking Tools</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Table saw or circular saw</li>
                            <li>• Planer (or hand plane)</li>
                            <li>• Random orbital sander</li>
                            <li>• Router (for edges)</li>
                            <li>• Clamps</li>
                            <li>• Chisels</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Safety & Finishing</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Welding helmet</li>
                            <li>• Safety glasses</li>
                            <li>• Work gloves</li>
                            <li>• Dust mask</li>
                            <li>• Spray booth or ventilation</li>
                            <li>• Drop cloths</li>
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
                        <CardTitle>Step 1: Design and Cut Materials</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Create full-scale paper templates for hairpin leg shape</li>
                          <li>Cut steel rods to length using metal saw</li>
                          <li>Cut mounting plates from flat bar steel</li>
                          <li>Cut wood to final dimensions, leaving 1/4" extra for final sanding</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 2: Form Hairpin Legs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Mark bend points on steel rods using template</li>
                          <li>Use tube bender or create bending jig</li>
                          <li>Bend each rod to create classic hairpin shape</li>
                          <li>Check that all legs are identical using template</li>
                          <li>File ends smooth and ensure they sit flat</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 3: Weld Mounting Plates</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Position mounting plates at top of each hairpin leg</li>
                          <li>Clamp in place ensuring plates are level</li>
                          <li>Weld plates to legs with strong penetration</li>
                          <li>Grind welds smooth for clean appearance</li>
                          <li>Drill mounting holes in plates</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 4: Finish Metal Legs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Clean all metal surfaces with degreaser</li>
                          <li>Sand entire surface with 220 grit</li>
                          <li>Apply metal primer in thin, even coats</li>
                          <li>Sand primer lightly when dry</li>
                          <li>Apply 2-3 coats of metal paint</li>
                          <li>Allow full cure time before assembly</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 5: Prepare Wood Top</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>If using multiple boards, glue and clamp together</li>
                          <li>Plane surface smooth and to final thickness</li>
                          <li>Sand progressively from 120 to 320 grit</li>
                          <li>Route edges to desired profile (roundover recommended)</li>
                          <li>Apply wood conditioner for even stain absorption</li>
                          <li>Stain and apply 3 coats of polyurethane</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 6: Final Assembly</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Mark leg positions on underside of table top</li>
                          <li>Position legs and mark screw holes</li>
                          <li>Drill pilot holes for machine screws</li>
                          <li>Attach legs using screws, washers, and nuts</li>
                          <li>Check table is level and stable</li>
                          <li>Add felt pads to leg bottoms if desired</li>
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
                            <span><strong>Consistent Bends:</strong> Make a bending jig from wood to ensure all hairpin legs are identical.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Weld Quality:</strong> Practice welding on scrap metal first to get consistent, strong welds.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Wood Selection:</strong> Choose wood with interesting grain - it's the star of this piece.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Finish Timing:</strong> Complete metal finishing before wood to avoid contamination.</span>
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
                            <h4 className="font-medium mb-2">Wobbly Table</h4>
                            <p>Check that leg ends are perfectly flat. File or grind any high spots. Ensure mounting plates are level during welding.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Uneven Hairpin Legs</h4>
                            <p>Use a bending jig for consistency. Mark all bend points accurately before starting.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Poor Weld Appearance</h4>
                            <p>Ensure proper amperage settings and travel speed. Clean metal thoroughly before welding.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Style Variations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Industrial:</strong> Leave metal raw with clear coat for authentic look</li>
                          <li>• <strong>Mid-Century:</strong> Use brass or copper-colored paint on legs</li>
                          <li>• <strong>Rustic:</strong> Use heavily distressed wood and aged metal finish</li>
                          <li>• <strong>Modern:</strong> Glass top with polished chrome legs</li>
                          <li>• <strong>Scandinavian:</strong> Light wood stain with white-painted legs</li>
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