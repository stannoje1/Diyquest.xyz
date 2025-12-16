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
  Scissors,
  Ruler,
  Palette,
  Heart,
  Sparkles
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MacrameWallHangingPage() {
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
              <span className="text-foreground">Macramé Wall Hanging</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Project Image */}
              <div className="relative">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-40 mx-auto mb-4 relative">
                        {/* Macramé design representation */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-800 rounded"></div>
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 space-y-1">
                          <div className="flex justify-center space-x-1">
                            <div className="w-1 h-8 bg-rose-600"></div>
                            <div className="w-1 h-8 bg-rose-600"></div>
                            <div className="w-1 h-8 bg-rose-600"></div>
                            <div className="w-1 h-8 bg-rose-600"></div>
                          </div>
                          <div className="flex justify-center">
                            <div className="w-8 h-8 border-2 border-rose-600 rounded-full bg-transparent"></div>
                          </div>
                          <div className="flex justify-center space-x-2">
                            <div className="w-1 h-6 bg-rose-600"></div>
                            <div className="w-1 h-6 bg-rose-600"></div>
                            <div className="w-1 h-6 bg-rose-600"></div>
                          </div>
                          <div className="flex justify-center space-x-1">
                            <div className="w-1 h-4 bg-rose-600"></div>
                            <div className="w-1 h-6 bg-rose-600"></div>
                            <div className="w-1 h-8 bg-rose-600"></div>
                            <div className="w-1 h-6 bg-rose-600"></div>
                            <div className="w-1 h-4 bg-rose-600"></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-rose-800 font-medium">Macramé Wall Hanging</p>
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
                    <Badge variant="secondary">Beginner</Badge>
                    <Badge variant="outline">Fiber Arts</Badge>
                    <Badge variant="outline">Home Decor</Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Boho Macramé Wall Hanging
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Create a stunning bohemian macramé wall hanging using traditional knotting 
                    techniques. This beautiful fiber art piece adds texture and warmth to any 
                    space while showcasing the timeless craft of macramé.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">3-4 Hours</div>
                      <div className="text-xs text-muted-foreground">Craft Time</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <DollarSign className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">$15-30</div>
                      <div className="text-xs text-muted-foreground">Est. Cost</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Scissors className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">Minimal</div>
                      <div className="text-xs text-muted-foreground">Tools Req.</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Star className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">4.7/5</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA Button */}
                <Button size="lg" className="w-full md:w-auto">
                  Start Creating Now
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
                <TabsTrigger value="tips">Techniques & Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                      <div className="prose max-w-none">
                        <p>
                          This beautiful macramé wall hanging combines traditional knotting techniques 
                          to create a stunning piece of fiber art. The design features a central 
                          diamond pattern with cascading fringe details, perfect for adding bohemian 
                          charm to any room.
                        </p>
                        <p>
                          The finished piece measures approximately 18" wide by 30" long and uses 
                          natural cotton cord to create an organic, textural element for your walls. 
                          This project is perfect for beginners wanting to learn fundamental macramé 
                          knots while creating something beautiful for their home.
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Basic macramé knots (square knot, half hitch, clove hitch)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Creating geometric patterns with knotwork</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Proper cord tension and spacing techniques</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Finishing techniques and fringe creation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Design principles for fiber art composition</span>
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-emerald-800 mb-1">Therapeutic Benefits</h4>
                          <p className="text-sm text-emerald-700">
                            Macramé is known for its meditative qualities. The repetitive knotting motions 
                            can help reduce stress and promote mindfulness while creating something beautiful.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Project Details</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Difficulty</span>
                            <span className="font-medium">Beginner</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Category</span>
                            <span className="font-medium">Fiber Arts & Crafts</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Finished Size</span>
                            <span className="font-medium">18" × 30"</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Cord Type</span>
                            <span className="font-medium">3mm Cotton</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Style</span>
                            <span className="font-medium">Bohemian</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Care</span>
                            <span className="font-medium">Spot Clean</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Required Skills</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Scissors className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Basic Cutting</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Ruler className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Measuring</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Hand Knotting</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Pattern Following</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Style Variations</h3>
                        <div className="space-y-2 text-sm">
                          <div className="font-medium">• Natural Cotton</div>
                          <div className="text-muted-foreground">Classic bohemian look</div>
                          <div className="font-medium mt-2">• Colored Cord</div>
                          <div className="text-muted-foreground">Modern, vibrant aesthetic</div>
                          <div className="font-medium mt-2">• Metallic Accents</div>
                          <div className="text-muted-foreground">Glamorous, contemporary feel</div>
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
                        <h3 className="font-semibold mb-4">Core Materials</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>3mm cotton macramé cord (200 yards)</span>
                            <span className="text-muted-foreground">$18</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Wooden dowel rod (18" × ½")</span>
                            <span className="text-muted-foreground">$3</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Metal or wooden ring (4" diameter)</span>
                            <span className="text-muted-foreground">$4</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Sharp fabric scissors</span>
                            <span className="text-muted-foreground">$8</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Measuring tape</span>
                            <span className="text-muted-foreground">$2</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Comb for fringe (optional)</span>
                            <span className="text-muted-foreground">$3</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between items-center font-semibold">
                            <span>Total Estimated Cost</span>
                            <span>$38</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Optional Enhancements</h2>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Decorative Elements</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Wooden beads (assorted sizes)</span>
                            <span className="text-muted-foreground">$5</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Small feathers</span>
                            <span className="text-muted-foreground">$3</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Natural crystals or stones</span>
                            <span className="text-muted-foreground">$8</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Metallic thread accents</span>
                            <span className="text-muted-foreground">$4</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Dried flowers or leaves</span>
                            <span className="text-muted-foreground">$6</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Cord Selection Guide</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium mb-1">3mm Cotton Cord</div>
                            <div className="text-muted-foreground">Perfect for beginners, easy to work with</div>
                          </div>
                          <Separator />
                          <div>
                            <div className="font-medium mb-1">4mm Cotton Cord</div>
                            <div className="text-muted-foreground">Creates bolder, more substantial pieces</div>
                          </div>
                          <Separator />
                          <div>
                            <div className="font-medium mb-1">Natural Jute</div>
                            <div className="text-muted-foreground">Rustic texture, earthy appearance</div>
                          </div>
                          <Separator />
                          <div>
                            <div className="font-medium mb-1">Colored Cotton</div>
                            <div className="text-muted-foreground">Modern look with vibrant options</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-6">Tools & Workspace</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Essential Tools</h3>
                        <div className="grid gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Sharp fabric scissors</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Measuring tape</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Clipboard or mounting board</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Pins or clips</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Workspace Setup</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Good lighting - natural light preferred</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Comfortable seating with back support</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Large, flat surface for laying out cords</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>Vertical mounting space for working</span>
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
                          <h3 className="text-lg font-semibold">Prepare Your Cords</h3>
                          <p className="text-muted-foreground">
                            Cut 16 cords, each 60 inches long. This will give you 32 working strands when 
                            folded in half. Keep cords organized and untangled as you work.
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li>• Measure twice, cut once for accuracy</li>
                            <li>• Keep cut ends neat with sharp scissors</li>
                            <li>• Bundle cords to prevent tangling</li>
                          </ul>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Use a measuring board or tape cords to a table for consistent cutting.
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
                          <h3 className="text-lg font-semibold">Mount Cords to Dowel</h3>
                          <p className="text-muted-foreground">
                            Fold each cord in half and use a lark's head knot to attach it to the wooden dowel. 
                            Space the knots evenly across the dowel, leaving small gaps between each mounting point.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Lark's Head Knot:</strong> Fold cord in half, place loop over dowel, pull ends through loop and tighten.
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
                          <h3 className="text-lg font-semibold">Create the First Row Pattern</h3>
                          <p className="text-muted-foreground">
                            Starting 4 inches below the dowel, use groups of 4 cords to tie square knots. 
                            This creates 8 square knots across the width of your hanging.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Square Knot:</strong> Use outer 2 cords to tie around center 2 cords - left over right, then right over left.
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
                          <h3 className="text-lg font-semibold">Form the Diamond Pattern</h3>
                          <p className="text-muted-foreground">
                            2 inches below the first row, offset your groupings by using 2 cords from adjacent 
                            groups to create a diamond pattern. Continue alternating patterns for 3-4 rows.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Pattern:</strong> Leave outer 2 cords free on each side, work with interior cords only.
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
                          <h3 className="text-lg font-semibold">Add the Center Ring Element</h3>
                          <p className="text-muted-foreground">
                            Take 8 center cords and thread them through your 4" ring. Use half hitch knots 
                            to secure the cords around the ring, creating a focal point in your design.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Half Hitch:</strong> Loop cord around ring and pull end through the loop, tighten against ring.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 6 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          6
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-semibold">Complete Lower Section</h3>
                          <p className="text-muted-foreground">
                            Below the ring, continue the diamond pattern for 2-3 more rows, then transition 
                            to straight vertical sections. Add occasional decorative knots if desired.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Variation:</strong> Try spiral knots or gathering knots for texture variety.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 7 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          7
                        </div>
                        <div className="space-y-3 flex-1">
                          <h3 className="text-lg font-semibold">Create and Style the Fringe</h3>
                          <p className="text-muted-foreground">
                            Trim the bottom cords to create an attractive fringe. Cut at varying lengths for 
                            a natural, organic look. Use a comb to separate fibers for a fuller appearance.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Styling:</strong> Brush out cord ends with a comb or wire brush for a feathered effect.
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
                    <h2 className="text-2xl font-semibold mb-6">Macramé Techniques</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Consistent Tension</h3>
                          <p className="text-sm text-muted-foreground">
                            Keep steady, moderate tension on your cords. Too tight and the piece becomes 
                            stiff; too loose and it loses structure.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Measuring & Spacing</h3>
                          <p className="text-sm text-muted-foreground">
                            Use a ruler or measuring tape frequently to maintain consistent spacing 
                            between knot rows for a professional appearance.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Cord Management</h3>
                          <p className="text-sm text-muted-foreground">
                            Keep long cords organized by wrapping excess length and securing with 
                            clips to prevent tangling while working.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Pattern Planning</h3>
                          <p className="text-sm text-muted-foreground">
                            Sketch your design beforehand or use graph paper to plan knot placement 
                            and overall proportions.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Design Variations</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Color Combinations</h3>
                          <p className="text-sm text-muted-foreground">
                            Try ombre effects using cords in graduated shades, or create bold 
                            stripes with contrasting colors.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Add Natural Elements</h3>
                          <p className="text-sm text-muted-foreground">
                            Incorporate driftwood, shells, or crystals for an organic, 
                            beach-inspired aesthetic.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Scale Adjustments</h3>
                          <p className="text-sm text-muted-foreground">
                            Make smaller versions for cozy spaces or larger statement pieces 
                            by adjusting cord quantity and dowel length.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Mixed Materials</h3>
                          <p className="text-sm text-muted-foreground">
                            Combine cotton cord with metallic threads, leather strips, or 
                            rope for unique textural contrasts.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Palette className="h-4 w-4" />
                          Care & Maintenance
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="font-medium">• Dusting</div>
                          <div className="text-muted-foreground">Use soft brush or vacuum with brush attachment</div>
                          <div className="font-medium mt-2">• Spot Cleaning</div>
                          <div className="text-muted-foreground">Gentle soap and water, air dry completely</div>
                          <div className="font-medium mt-2">• Storage</div>
                          <div className="text-muted-foreground">Hang properly to maintain shape</div>
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
                Explore more fiber arts and bohemian decor projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Macramé Plant Hanger", difficulty: "Beginner", time: "2-3 hours", cost: "$12-20" },
                { title: "Woven Wall Tapestry", difficulty: "Intermediate", time: "5-7 hours", cost: "$25-40" },
                { title: "Macramé Room Divider", difficulty: "Advanced", time: "8-12 hours", cost: "$60-90" }
              ].map((project, i) => (
                <Card key={i} className="group cursor-pointer hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-rose-100 to-rose-200 rounded-t-lg flex items-center justify-center">
                      <div className="text-rose-700 font-medium">{project.title}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={project.difficulty === "Beginner" ? "secondary" : project.difficulty === "Intermediate" ? "default" : "destructive"}>
                          {project.difficulty}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Continue your fiber arts journey with this beautiful complementary project.
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{project.time}</span>
                        <span className="font-medium">{project.cost}</span>
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