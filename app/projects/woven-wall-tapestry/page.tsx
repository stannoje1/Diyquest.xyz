import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, DollarSign, Users, AlertTriangle, Lightbulb, Star } from "lucide-react"

export default function WovenWallTapestry() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Woven Wall Tapestry</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Create stunning wall art using traditional weaving techniques. Learn to combine colors and textures for a personalized textile masterpiece.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>6-10 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>$25-50</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video rounded-lg bg-muted mb-8 flex items-center justify-center">
                <img
                  src="/woven-wall-tapestry-boho-art.jpg"
                  alt="Colorful woven wall tapestry with geometric patterns"
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
                        Dive into the meditative world of weaving while creating beautiful wall art. This intermediate project 
                        teaches fundamental weaving techniques including plain weave, color blending, and texture incorporation.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">What You'll Learn</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Plain weave technique
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Color gradient creation
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Texture incorporation
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Fringe and edge finishing
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Finished Dimensions</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Width: 12-16 inches</li>
                            <li>• Height: 18-24 inches</li>
                            <li>• Fringe length: 3-4 inches</li>
                            <li>• Mounting rod: 14-18 inches</li>
                            <li>• Total hanging length: 26-32 inches</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Historical & Cultural Context</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Ancient Art:</strong> Weaving dates back over 12,000 years across all cultures</li>
                        <li>• <strong>Therapeutic Benefits:</strong> Repetitive motions promote relaxation and focus</li>
                        <li>• <strong>Sustainable Practice:</strong> Uses natural fibers and traditional techniques</li>
                        <li>• <strong>Personal Expression:</strong> Each piece reflects the weaver's unique style</li>
                        <li>• <strong>Modern Revival:</strong> Contemporary artists blend traditional and innovative techniques</li>
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
                          <h4 className="font-semibold mb-3">Yarns & Fibers</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Cotton warp yarn (natural or white), 1 skein</li>
                            <li>• Wool yarn in 3-5 colors, 1 skein each</li>
                            <li>• Textured yarns (bouclé, mohair, or novelty)</li>
                            <li>• Metallic thread for accents (optional)</li>
                            <li>• Ribbon or fabric strips</li>
                            <li>• Roving or unspun wool for texture</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Tools & Hardware</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Simple frame loom or embroidery hoop</li>
                            <li>• Wooden dowel or branch for hanging</li>
                            <li>• Tapestry needle (blunt tip)</li>
                            <li>• Weaving comb or fork</li>
                            <li>• Sharp scissors</li>
                            <li>• Measuring tape</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Color Palette Ideas</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                          <li>• <strong>Earth Tones:</strong> Browns, rust, cream, gold</li>
                          <li>• <strong>Ocean Blues:</strong> Navy, turquoise, seafoam, white</li>
                          <li>• <strong>Sunset:</strong> Orange, coral, pink, yellow</li>
                          <li>• <strong>Forest:</strong> Greens, browns, moss, sage</li>
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
                            <li>• Frame loom or large hoop</li>
                            <li>• Tapestry needles</li>
                            <li>• Weaving comb</li>
                            <li>• Sharp scissors</li>
                            <li>• Measuring tape</li>
                            <li>• Yarn needles</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">Helpful Tools</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Shed stick (for separating warps)</li>
                            <li>• Bobbin or shuttle</li>
                            <li>• T-pins</li>
                            <li>• Ruler or gauge</li>
                            <li>• Small mirror (for checking patterns)</li>
                            <li>• Graph paper (for planning)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Optional Supplies</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Yarn swift</li>
                            <li>• Ball winder</li>
                            <li>• Steamer (for finishing)</li>
                            <li>• Blocking board</li>
                            <li>• Color wheel</li>
                            <li>• Weaving books</li>
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
                        <CardTitle>Step 1: Set Up Your Loom</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Secure your frame loom in a comfortable working position</li>
                          <li>Plan your warp spacing (12-16 threads per inch recommended)</li>
                          <li>Cut warp threads 6 inches longer than finished height</li>
                          <li>Tie warp threads to loom with even tension</li>
                          <li>Check that all threads are parallel and properly spaced</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 2: Create the Foundation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Start with several rows of plain weave using warp yarn</li>
                          <li>This creates a stable foundation for your design</li>
                          <li>Keep edges straight and tension consistent</li>
                          <li>Beat gently with your comb after each row</li>
                          <li>Leave 3-4 inches of yarn for fringe at the beginning</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 3: Plan Your Design</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Sketch your design on paper first</li>
                          <li>Plan color transitions and texture placement</li>
                          <li>Consider balance and focal points</li>
                          <li>Start with simple geometric shapes</li>
                          <li>Mark key transition points on your loom</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 4: Begin Pattern Weaving</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Thread your tapestry needle with first color</li>
                          <li>Work over and under alternate warp threads</li>
                          <li>Change colors by ending and starting new threads</li>
                          <li>Leave 2-3 inch tails for later weaving in</li>
                          <li>Build up patterns row by row</li>
                          <li>Use different textures for visual interest</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 5: Add Texture and Interest</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Incorporate loops for raised texture</li>
                          <li>Add strips of fabric or ribbon</li>
                          <li>Vary yarn thickness within rows</li>
                          <li>Create color gradients with blending</li>
                          <li>Leave some warp threads exposed for contrast</li>
                          <li>Add beads or other embellishments</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 6: Finishing and Mounting</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Complete final rows of foundation weaving</li>
                          <li>Remove tapestry carefully from loom</li>
                          <li>Weave in all loose ends with needle</li>
                          <li>Trim fringe to desired length</li>
                          <li>Steam lightly to set the weave</li>
                          <li>Attach to dowel or branch for hanging</li>
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
                            <span><strong>Even Tension:</strong> Maintain consistent tension for professional results. The weave should lay flat naturally.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Color Transitions:</strong> Blend colors gradually by alternating threads for smooth gradients.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Beating Technique:</strong> Beat gently and consistently to avoid distorting the weave structure.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Edge Control:</strong> Pay special attention to selvedges (edges) to maintain straight lines.</span>
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
                            <h4 className="font-medium mb-2">Curved Edges</h4>
                            <p>This usually indicates uneven tension. Try to maintain consistent pull on weft threads and avoid over-beating.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Lumpy Texture</h4>
                            <p>Ensure weft threads are placed at proper angle (not too steep) and beaten evenly across the width.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Color Bleeding</h4>
                            <p>Test yarn colorfastness before weaving. Set colors with vinegar solution if necessary.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Loose Ends</h4>
                            <p>Always leave sufficient tail length (2-3 inches) and weave ends back into the fabric structure.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Advanced Techniques</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Soumak Wrapping:</strong> Creates raised diagonal lines</li>
                          <li>• <strong>Rya Knots:</strong> Adds shaggy texture and dimension</li>
                          <li>• <strong>Slit Tapestry:</strong> Allows for vertical color changes</li>
                          <li>• <strong>Eccentric Wefts:</strong> Creates curved and flowing lines</li>
                          <li>• <strong>Pile Techniques:</strong> Incorporates loops and cut pile</li>
                          <li>• <strong>Mixed Media:</strong> Combines weaving with other fiber arts</li>
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