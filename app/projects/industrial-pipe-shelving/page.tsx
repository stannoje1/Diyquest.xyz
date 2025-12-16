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
  Drill,
  HardHat,
  Zap
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IndustrialPipeShelvingPage() {
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
              <span className="text-foreground">Industrial Pipe Shelving</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Project Image */}
              <div className="relative">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-32 bg-slate-800 rounded-sm mx-auto mb-4 shadow-lg relative">
                        <div className="absolute top-2 left-2 w-36 h-2 bg-amber-600 rounded"></div>
                        <div className="absolute top-6 left-2 w-36 h-2 bg-amber-600 rounded"></div>
                        <div className="absolute top-10 left-2 w-36 h-2 bg-amber-600 rounded"></div>
                        <div className="absolute left-0 top-0 w-2 h-full bg-slate-600 rounded"></div>
                        <div className="absolute right-0 top-0 w-2 h-full bg-slate-600 rounded"></div>
                      </div>
                      <p className="text-slate-800 font-medium">Industrial Pipe Shelving</p>
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
                    <Badge variant="secondary">Advanced</Badge>
                    <Badge variant="outline">Plumbing</Badge>
                    <Badge variant="outline">Woodworking</Badge>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Industrial Pipe Shelving Unit
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Create a stunning industrial-style shelving unit using galvanized steel pipes 
                    and reclaimed wood planks. This rugged yet stylish storage solution adds 
                    character to any space while providing robust, adjustable shelving.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">4-6 Hours</div>
                      <div className="text-xs text-muted-foreground">Build Time</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <DollarSign className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">$80-150</div>
                      <div className="text-xs text-muted-foreground">Est. Cost</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Wrench className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">Advanced</div>
                      <div className="text-xs text-muted-foreground">Tools Req.</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Star className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm font-medium">4.9/5</div>
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
                <TabsTrigger value="tips">Tips & Safety</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                      <div className="prose max-w-none">
                        <p>
                          This industrial pipe shelving unit combines the raw beauty of galvanized steel 
                          with the warmth of reclaimed wood to create a statement piece that's both 
                          functional and visually striking. The modular design allows for customization 
                          of height and shelf spacing to fit your specific needs.
                        </p>
                        <p>
                          The finished unit stands approximately 72" tall with four adjustable shelves, 
                          each measuring 36" × 10". The pipe frame is constructed using standard ¾" 
                          galvanized steel pipes and fittings, creating a sturdy foundation that can 
                          support substantial weight while maintaining the authentic industrial aesthetic.
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Working with galvanized steel pipe and fittings</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Pipe threading and assembly techniques</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Wood preparation and finishing for industrial style</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Creating adjustable shelf mounting systems</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Structural stability and weight distribution</span>
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <HardHat className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 mb-1">Safety Notice</h4>
                          <p className="text-sm text-amber-700">
                            This project involves working with metal pipes and power tools. Always wear 
                            safety glasses, work gloves, and ensure proper ventilation when applying finishes.
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
                            <span className="font-medium">Advanced</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Category</span>
                            <span className="font-medium">Storage & Organization</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Dimensions</span>
                            <span className="font-medium">36" × 12" × 72"</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Pipe Size</span>
                            <span className="font-medium">¾" Galvanized</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Wood Type</span>
                            <span className="font-medium">Reclaimed Pine</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Weight Capacity</span>
                            <span className="font-medium">200+ lbs</span>
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
                            <span className="text-sm">Precise Measuring</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Drill className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Drilling & Threading</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Wrench className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Pipe Assembly</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Power Tool Use</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Style Variations</h3>
                        <div className="space-y-2 text-sm">
                          <div className="font-medium">• Black Iron Pipe</div>
                          <div className="text-muted-foreground">More rustic appearance</div>
                          <div className="font-medium mt-2">• Stainless Steel</div>
                          <div className="text-muted-foreground">Modern, clean finish</div>
                          <div className="font-medium mt-2">• Copper Pipes</div>
                          <div className="text-muted-foreground">Warm, premium look</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="materials" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Pipe & Hardware</h2>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Galvanized Steel Components</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>¾" × 72" vertical pipes (2)</span>
                            <span className="text-muted-foreground">$35</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>¾" × 36" horizontal pipes (8)</span>
                            <span className="text-muted-foreground">$45</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>¾" × 12" depth pipes (8)</span>
                            <span className="text-muted-foreground">$25</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>¾" 90° elbows (12)</span>
                            <span className="text-muted-foreground">$18</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>¾" T-joints (8)</span>
                            <span className="text-muted-foreground">$16</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>¾" floor flanges (2)</span>
                            <span className="text-muted-foreground">$12</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Pipe thread compound</span>
                            <span className="text-muted-foreground">$8</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Wood & Finishing</h2>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Shelf Materials</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Reclaimed pine boards 36" × 10" × 1½" (4)</span>
                            <span className="text-muted-foreground">$60</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Wood screws (2½")</span>
                            <span className="text-muted-foreground">$5</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Sandpaper (80, 120, 220 grit)</span>
                            <span className="text-muted-foreground">$8</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Wood stain (Dark Walnut)</span>
                            <span className="text-muted-foreground">$12</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Polyurethane finish</span>
                            <span className="text-muted-foreground">$15</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between items-center font-semibold">
                            <span>Total Estimated Cost</span>
                            <span>$259</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-6">Tools Required</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Essential Tools</h3>
                        <div className="grid gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Pipe threader or dies</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Pipe wrench set</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Drill with metal bits</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Miter saw or hacksaw</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Level</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Additional Tools</h3>
                        <div className="grid gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Measuring tape</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Random orbital sander</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Clamps</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>Safety equipment</span>
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
                          <h3 className="text-lg font-semibold">Plan and Measure</h3>
                          <p className="text-muted-foreground">
                            Create a detailed plan with exact measurements. Determine shelf spacing based on 
                            your storage needs. Standard spacing is 18" between shelves, but this can be adjusted.
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li>• Draw a detailed schematic with all dimensions</li>
                            <li>• Calculate exact pipe lengths needed</li>
                            <li>• Plan joint locations and threading requirements</li>
                            <li>• Account for fitting dimensions in your measurements</li>
                          </ul>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Always account for the depth of pipe fittings when calculating lengths.
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
                          <h3 className="text-lg font-semibold">Cut and Thread Pipes</h3>
                          <p className="text-muted-foreground">
                            Cut all pipes to exact lengths using a hacksaw or pipe cutter. Thread the ends 
                            that will connect to fittings. Apply pipe thread compound to all threaded connections.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Safety:</strong> Wear safety glasses and work gloves. Metal shavings are sharp and can cause injury.
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
                          <h3 className="text-lg font-semibold">Assemble the Base Frame</h3>
                          <p className="text-muted-foreground">
                            Start by assembling the bottom rectangular frame using the floor flanges, 
                            elbows, and horizontal pipes. Ensure the frame is perfectly square and level.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Use a square to check corners and a level to ensure the frame sits flat.
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
                          <h3 className="text-lg font-semibold">Install Vertical Supports</h3>
                          <p className="text-muted-foreground">
                            Attach the 72" vertical pipes to the base frame corners. Add T-joints at each 
                            shelf level. Work systematically from bottom to top, checking alignment frequently.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Important:</strong> Don't fully tighten joints until the entire frame is assembled.
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
                          <h3 className="text-lg font-semibold">Add Horizontal Shelf Supports</h3>
                          <p className="text-muted-foreground">
                            Install the horizontal pipes between T-joints to create the shelf support frames. 
                            Each shelf requires 4 horizontal pipes to create a rectangular frame.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Tip:</strong> Use a level to ensure all horizontal supports are perfectly level.
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
                          <h3 className="text-lg font-semibold">Prepare and Install Shelves</h3>
                          <p className="text-muted-foreground">
                            Sand the reclaimed wood progressively from 80 to 220 grit. Apply stain and 
                            protective finish. Once dry, secure shelves to the pipe frame using wood screws.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Finishing:</strong> Allow 24 hours drying time between stain and protective coat applications.
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
                          <h3 className="text-lg font-semibold">Final Assembly and Testing</h3>
                          <p className="text-muted-foreground">
                            Tighten all joints securely and check the entire structure for stability. 
                            Test weight capacity gradually and make any necessary adjustments.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Testing:</strong> Load shelves gradually and check for any movement or stress points.
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
                          <h3 className="font-semibold mb-2">Pipe Threading</h3>
                          <p className="text-sm text-muted-foreground">
                            If you don't own threading tools, most hardware stores will thread pipes 
                            to your specifications for a small fee.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Joint Alignment</h3>
                          <p className="text-sm text-muted-foreground">
                            Mark joint orientations with masking tape before assembly to ensure 
                            proper alignment of all fittings.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Wood Selection</h3>
                          <p className="text-sm text-muted-foreground">
                            Reclaimed wood adds character, but inspect for nails or metal hardware 
                            that could damage tools.
                          </p>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Weight Distribution</h3>
                          <p className="text-sm text-muted-foreground">
                            Place heavier items on lower shelves to maintain stability and 
                            prevent top-heavy swaying.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Safety Guidelines</h2>
                    <Card className="border-red-200 bg-red-50">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-red-800">
                          <HardHat className="h-5 w-5" />
                          <h3 className="font-semibold">Critical Safety Points</h3>
                        </div>
                        <Separator className="bg-red-200" />
                        <div>
                          <h4 className="font-semibold mb-1 text-red-800">Eye Protection</h4>
                          <p className="text-sm text-red-700">
                            Always wear safety glasses when cutting, threading, or assembling metal pipes.
                          </p>
                        </div>
                        <Separator className="bg-red-200" />
                        <div>
                          <h4 className="font-semibold mb-1 text-red-800">Hand Protection</h4>
                          <p className="text-sm text-red-700">
                            Wear work gloves when handling pipes and fittings. Metal edges can be sharp.
                          </p>
                        </div>
                        <Separator className="bg-red-200" />
                        <div>
                          <h4 className="font-semibold mb-1 text-red-800">Structural Stability</h4>
                          <p className="text-sm text-red-700">
                            Ensure unit is anchored to wall if over 6 feet tall to prevent tipping.
                          </p>
                        </div>
                        <Separator className="bg-red-200" />
                        <div>
                          <h4 className="font-semibold mb-1 text-red-800">Chemical Safety</h4>
                          <p className="text-sm text-red-700">
                            Use pipe thread compound in well-ventilated areas and follow manufacturer guidelines.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Customization Ideas</h3>
                        <div className="space-y-2 text-sm">
                          <div className="font-medium">• Add LED Strip Lighting</div>
                          <div className="text-muted-foreground">Install under-shelf lighting for ambiance</div>
                          <div className="font-medium mt-2">• Include Hooks</div>
                          <div className="text-muted-foreground">Add S-hooks for hanging storage</div>
                          <div className="font-medium mt-2">• Rolling Casters</div>
                          <div className="text-muted-foreground">Make it portable with locking wheels</div>
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
                Explore more industrial-style furniture and storage solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/projects/industrial-pipe-desk" className="group block">
                <Card className="group cursor-pointer hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                      <div className="text-slate-600 font-medium">Industrial Pipe Desk</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="destructive">Advanced</Badge>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Industrial Pipe Desk
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Build a robust industrial-style desk with steel pipes and reclaimed wood. Perfect for modern offices.
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">8-12 hours</span>
                        <span className="font-medium">$120-180</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/projects/metal-wood-coffee-table" className="group block">
                <Card className="group cursor-pointer hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                      <div className="text-slate-600 font-medium">Metal & Wood Coffee Table</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="default">Intermediate</Badge>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Metal & Wood Coffee Table
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Create a stunning coffee table with hairpin legs and beautiful reclaimed wood top.
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">6-8 hours</span>
                        <span className="font-medium">$80-120</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/projects/pipe-clothing-rack" className="group block">
                <Card className="group cursor-pointer hover:shadow-lg transition-all">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-t-lg flex items-center justify-center">
                      <div className="text-slate-600 font-medium">Pipe Clothing Rack</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">Beginner</Badge>
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        Pipe Clothing Rack
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Build a stylish clothing rack using galvanized pipes. No welding required!
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">3-4 hours</span>
                        <span className="font-medium">$45-70</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}