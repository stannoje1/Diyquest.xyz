import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, DollarSign, Users, AlertTriangle, Lightbulb, Star } from "lucide-react"

export default function MacramePlantHanger() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Macramé Plant Hanger</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Create beautiful hanging planters using traditional macramé knots. Perfect for adding greenery to any space while learning a timeless craft.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>2-3 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>$8-15</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Beginner</span>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video rounded-lg bg-muted mb-8 flex items-center justify-center">
                <img
                  src="/macrame-plant-hanger-boho.jpg"
                  alt="Macramé plant hanger with cascading greenery"
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
                        Learn the ancient art of macramé while creating functional plant hangers that bring natural beauty to your home. 
                        This beginner-friendly project teaches essential knots and techniques that form the foundation of macramé crafting.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">What You'll Learn</h4>
                          <ul className="space-y-1 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Square knot technique
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Gathering knot creation
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Cord length calculations
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Pattern symmetry and balance
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Finished Dimensions</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Total length: 36-40 inches</li>
                            <li>• Cradle diameter: 8-10 inches</li>
                            <li>• Hanging loop: 6 inches</li>
                            <li>• Plant pot capacity: 6-8 inches</li>
                            <li>• Weight capacity: 5-8 lbs</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Benefits of Macramé</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Meditative Practice:</strong> Repetitive knotting promotes relaxation and mindfulness</li>
                        <li>• <strong>Sustainable Craft:</strong> Uses natural fibers and creates long-lasting pieces</li>
                        <li>• <strong>Space-Saving:</strong> Vertical gardening maximizes limited floor space</li>
                        <li>• <strong>Air Purification:</strong> Hanging plants improve indoor air quality</li>
                        <li>• <strong>Customizable:</strong> Easy to adjust length and style for any space</li>
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
                          <h4 className="font-semibold mb-3">Cord & Rope</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 8x 4mm macramé cord, 6 feet long (natural cotton)</li>
                            <li>• Or 1x 50-foot spool of 4mm cord</li>
                            <li>• Alternative: 3-strand twisted cotton rope</li>
                            <li>• Color options: natural, cream, or dyed</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Hardware & Accessories</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• 1x metal or wooden ring, 2-3 inches diameter</li>
                            <li>• Ceiling hook or wall anchor</li>
                            <li>• Plant pot (6-8 inches diameter)</li>
                            <li>• Saucer or drip tray (optional)</li>
                            <li>• Measuring tape</li>
                            <li>• Scissors</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Cord Selection Guide</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                          <li>• <strong>3mm:</strong> Delicate hangers for small plants</li>
                          <li>• <strong>4mm:</strong> Standard size for most projects</li>
                          <li>• <strong>5mm:</strong> Chunky look for larger plants</li>
                          <li>• <strong>Single-strand:</strong> Clean, modern appearance</li>
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
                            <li>• Sharp scissors</li>
                            <li>• Measuring tape</li>
                            <li>• Comb (for fringing)</li>
                            <li>• Clipboard or hook (work surface)</li>
                            <li>• Pins (for measuring)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600">Helpful Tools</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Macramé board</li>
                            <li>• T-pins</li>
                            <li>• Spray bottle (for shaping)</li>
                            <li>• Lighter (for sealing ends)</li>
                            <li>• Tweezers (for tight knots)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600">Optional Supplies</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Fabric stiffener</li>
                            <li>• Natural dyes</li>
                            <li>• Beads for decoration</li>
                            <li>• Feathers or tassels</li>
                            <li>• Wood stain (for ring)</li>
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
                        <CardTitle>Step 1: Prepare Your Cords</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Cut 8 pieces of cord, each 6 feet long</li>
                          <li>Fold each cord in half to find the center point</li>
                          <li>Mount your ring on a stable surface or clipboard</li>
                          <li>Check that all cords are the same length</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 2: Mount Cords to Ring</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Loop each folded cord through the ring (larks head knot)</li>
                          <li>Pull the cord ends through the loop and tighten</li>
                          <li>Space all 8 cords evenly around the ring</li>
                          <li>You now have 16 working cords hanging down</li>
                          <li>Group cords into 4 sets of 4 strands each</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 3: Create the First Tier</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Measure 6 inches down from the ring</li>
                          <li>Using each group of 4 cords, tie a gathering knot</li>
                          <li>Make sure all knots are at the same level</li>
                          <li>Pull tight to create secure connection points</li>
                          <li>This forms the top support structure</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 4: Form the Plant Cradle</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Measure 8-10 inches down from first tier</li>
                          <li>Split each group: take 2 cords from adjacent groups</li>
                          <li>Tie these new groups of 4 cords with gathering knots</li>
                          <li>This creates the basket that will hold your pot</li>
                          <li>Test fit with your plant pot to check size</li>
                          <li>Adjust knot positions if needed for proper fit</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 5: Add Lower Support Tier</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Measure 4-6 inches below the cradle knots</li>
                          <li>Regroup cords back to original 4 groups</li>
                          <li>Tie gathering knots to create bottom support</li>
                          <li>This prevents the pot from slipping through</li>
                          <li>Ensure all knots are level and secure</li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Step 6: Finish the Ends</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Trim all cord ends to desired length (4-6 inches)</li>
                          <li>Fray the ends with a comb for a boho look</li>
                          <li>Or tie a final knot for a clean finish</li>
                          <li>Add beads or feathers if desired</li>
                          <li>Test the hanger with your plant and pot</li>
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
                            <span><strong>Cord Length:</strong> Always cut cords longer than needed - you can trim excess but can't add length.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Even Tension:</strong> Keep consistent tension when tying knots for a professional appearance.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Test Fit:</strong> Use your actual plant pot during construction to ensure proper sizing.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span><strong>Plant Selection:</strong> Choose plants that trail naturally for the most dramatic effect.</span>
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
                            <h4 className="font-medium mb-2">Uneven Hanging</h4>
                            <p>Check that all cords are the same length and knots are at the same level. Adjust individual knots as needed.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Pot Falls Through</h4>
                            <p>Tighten the cradle knots or add an additional tier closer to the bottom of the pot.</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Loose or Sliding Knots</h4>
                            <p>Ensure you're pulling knots tight during tying. Cotton cord may stretch initially - retighten after first use.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Styling Variations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Bohemian:</strong> Add feathers, beads, and natural fringe</li>
                          <li>• <strong>Minimalist:</strong> Clean lines with sealed cord ends</li>
                          <li>• <strong>Colorful:</strong> Use dyed cords in gradient or ombre effects</li>
                          <li>• <strong>Multi-tier:</strong> Create multiple cradles for several small plants</li>
                          <li>• <strong>Decorative Ring:</strong> Use copper, brass, or painted wooden rings</li>
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