import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  RefreshCw,
  Palette,
  Scissors,
  Paintbrush,
  Sparkles,
  Recycle,
  DollarSign,
  Clock,
  Star,
  Heart,
  TreePine,
  Award,
  TrendingUp,
  Eye
} from "lucide-react"
import Link from "next/link"

export default function UpcyclingFurniturePage() {
  const beforeAfterProjects = [
    {
      id: 1,
      title: "Vintage Dresser Revival",
      difficulty: "Intermediate",
      time: "6-8 hours",
      cost: "$30-50",
      before: {
        condition: "Scratched oak veneer, missing hardware, water stains",
        description: "A tired 1970s dresser with damaged finish and outdated brass pulls."
      },
      after: {
        transformation: "Navy blue chalk paint, gold accents, modern hardware",
        description: "Sophisticated statement piece with contemporary style and perfect finish."
      },
      techniques: ["Sanding", "Chalk painting", "Hardware replacement", "Protective topcoat"],
      materials: ["Chalk paint", "Sandpaper", "New pulls", "Wax/polyurethane"],
      tips: "Remove all hardware before painting for professional results"
    },
    {
      id: 2,
      title: "Coffee Table Makeover",
      difficulty: "Beginner",
      time: "3-4 hours", 
      cost: "$15-25",
      before: {
        condition: "Worn wood finish, scratches, dated appearance",
        description: "Basic wooden coffee table with sun damage and surface scratches."
      },
      after: {
        transformation: "White distressed finish with natural wood top",
        description: "Charming farmhouse-style table with rustic appeal and character."
      },
      techniques: ["Distressing", "Two-tone painting", "Light sanding", "Staining"],
      materials: ["White paint", "Wood stain", "Sandpaper", "Brushes"],
      tips: "Distress after painting for authentic worn look"
    },
    {
      id: 3,
      title: "Bookshelf Transformation",
      difficulty: "Advanced",
      time: "8-12 hours",
      cost: "$40-80",
      before: {
        condition: "Plain laminate bookshelf, boring beige color",
        description: "Generic flat-pack bookshelf lacking personality and style."
      },
      after: {
        transformation: "Built-in look with crown molding, rich espresso stain",
        description: "Custom-looking built-in with architectural details and rich finish."
      },
      techniques: ["Adding trim", "Staining", "Backing upgrade", "Crown molding"],
      materials: ["Wood trim", "Stain", "Backing material", "Wood glue"],
      tips: "Add backing and trim to transform basic shelves into custom look"
    },
    {
      id: 4,
      title: "Chair Reupholstery",
      difficulty: "Intermediate",
      time: "4-6 hours",
      cost: "$25-45",
      before: {
        condition: "Faded floral fabric, worn cushion, solid frame",
        description: "Well-built vintage chair with outdated upholstery and tired appearance."
      },
      after: {
        transformation: "Modern geometric fabric, new foam, refreshed frame",
        description: "Contemporary seating with bold pattern and restored comfort."
      },
      techniques: ["Fabric removal", "Reupholstering", "Foam replacement", "Finishing"],
      materials: ["New fabric", "Foam padding", "Staple gun", "Fabric adhesive"],
      tips: "Take photos during disassembly to remember construction order"
    },
    {
      id: 5,
      title: "Kitchen Cabinet Update",
      difficulty: "Advanced",
      time: "12-20 hours",
      cost: "$100-200",
      before: {
        condition: "Honey oak finish, dated cathedral doors, brass hardware",
        description: "1990s kitchen cabinets with golden oak stain and traditional styling."
      },
      after: {
        transformation: "Crisp white paint, modern flat doors, brushed nickel hardware",
        description: "Contemporary kitchen with clean lines and timeless appeal."
      },
      techniques: ["Deglossing", "Priming", "Spray painting", "Hardware upgrade"],
      materials: ["Primer", "Paint", "New hardware", "Spray equipment"],
      tips: "Remove doors and paint separately for smooth, professional finish"
    },
    {
      id: 6,
      title: "Nightstand Refresh",
      difficulty: "Beginner",
      time: "2-4 hours",
      cost: "$10-20",
      before: {
        condition: "Scratched surface, wobbly leg, plain appearance",
        description: "Basic nightstand with wear marks and loose construction."
      },
      after: {
        transformation: "Teal accent color, decorative handles, stabilized structure",
        description: "Stylish bedside table with personality and improved functionality."
      },
      techniques: ["Light repair", "Color washing", "Hardware upgrade", "Stabilization"],
      materials: ["Colored paint", "Wood glue", "New knobs", "Sandpaper"],
      tips: "Fix structural issues before cosmetic improvements"
    }
  ]

  const techniques = [
    {
      name: "Chalk Paint Technique",
      icon: Paintbrush,
      difficulty: "Beginner",
      description: "No-prep painting method that adheres to most surfaces",
      bestFor: ["Furniture with good bones", "Vintage pieces", "Distressed looks"],
      pros: ["No sanding required", "Easy to distress", "Matte finish"],
      cons: ["Requires wax/sealer", "Can chip easily", "Limited color range"]
    },
    {
      name: "Spray Painting",
      icon: Sparkles,
      difficulty: "Intermediate", 
      description: "Professional smooth finish using spray equipment",
      bestFor: ["Smooth surfaces", "Modern looks", "Cabinet doors"],
      pros: ["Ultra-smooth finish", "Even coverage", "Professional results"],
      cons: ["Equipment needed", "Overspray concerns", "Weather dependent"]
    },
    {
      name: "Wood Staining",
      icon: TreePine,
      difficulty: "Intermediate",
      description: "Enhancing natural wood grain with colored stains",
      bestFor: ["Solid wood pieces", "Natural looks", "Quality hardwoods"],
      pros: ["Shows wood grain", "Durable finish", "Classic appeal"],
      cons: ["Requires proper wood", "Multiple coats", "Careful prep needed"]
    },
    {
      name: "Reupholstering",
      icon: Scissors,
      difficulty: "Advanced",
      description: "Replacing fabric and padding on upholstered furniture",
      bestFor: ["Quality frames", "Chairs and ottomans", "Custom looks"],
      pros: ["Complete customization", "Restored comfort", "Unique results"],
      cons: ["Time intensive", "Skill required", "Material costs"]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-emerald-50 to-background">
          <div className="container py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  <Recycle className="h-3 w-3 mr-1" />
                  Sustainable DIY
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Furniture Makeover
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Upcycling Old Furniture: 
                <span className="text-emerald-600"> Before & After</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Transform tired, outdated furniture into stunning statement pieces. Discover inspiring 
                before and after makeovers, learn proven techniques, and create beautiful furniture 
                while saving money and helping the environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Eye className="h-5 w-5 mr-2" />
                  View Transformations
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Paintbrush className="h-5 w-5 mr-2" />
                  Learn Techniques
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-8 w-8 mx-auto mb-3 text-emerald-600" />
                  <div className="text-2xl font-bold mb-1">70-90%</div>
                  <div className="text-sm text-muted-foreground">Cost Savings vs New</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Recycle className="h-8 w-8 mx-auto mb-3 text-emerald-600" />
                  <div className="text-2xl font-bold mb-1">12M Tons</div>
                  <div className="text-sm text-muted-foreground">Furniture Waste Annually</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-emerald-600" />
                  <div className="text-2xl font-bold mb-1">300%</div>
                  <div className="text-sm text-muted-foreground">Value Increase Potential</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-8 w-8 mx-auto mb-3 text-emerald-600" />
                  <div className="text-2xl font-bold mb-1">Unique</div>
                  <div className="text-sm text-muted-foreground">One-of-a-Kind Results</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-8 md:py-12 bg-muted/20">
          <div className="container">
            <Tabs defaultValue="transformations" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="transformations">Before & After</TabsTrigger>
                <TabsTrigger value="techniques">Techniques</TabsTrigger>
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="inspiration">Find Pieces</TabsTrigger>
              </TabsList>

              <TabsContent value="transformations" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Amazing Furniture Transformations</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    See how ordinary, worn furniture becomes extraordinary with creativity, effort, and the right techniques.
                  </p>
                </div>

                <div className="space-y-8">
                  {beforeAfterProjects.map((project, index) => (
                    <Card key={project.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-2 gap-0">
                          {/* Before Section */}
                          <div className="p-6 bg-red-50 border-r">
                            <div className="flex items-center gap-2 mb-4">
                              <Badge variant="destructive">BEFORE</Badge>
                              <span className="text-lg font-semibold">#{index + 1} {project.title}</span>
                            </div>
                            
                            <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 rounded-lg mb-4 flex items-center justify-center">
                              <div className="text-center text-red-700">
                                <div className="text-sm font-medium mb-2">BEFORE</div>
                                <div className="w-32 h-20 bg-red-300 rounded mx-auto opacity-60"></div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold text-red-800 mb-1">Condition</h4>
                                <p className="text-sm text-red-700">{project.before.condition}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-red-800 mb-1">Description</h4>
                                <p className="text-sm text-red-700">{project.before.description}</p>
                              </div>
                            </div>
                          </div>

                          {/* After Section */}
                          <div className="p-6 bg-emerald-50">
                            <div className="flex items-center gap-2 mb-4">
                              <Badge variant="default" className="bg-emerald-600">AFTER</Badge>
                              <div className="flex gap-2">
                                <Badge variant="outline">{project.difficulty}</Badge>
                                <Badge variant="outline">{project.time}</Badge>
                                <Badge variant="outline">{project.cost}</Badge>
                              </div>
                            </div>

                            <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg mb-4 flex items-center justify-center">
                              <div className="text-center text-emerald-700">
                                <div className="text-sm font-medium mb-2">AFTER</div>
                                <div className="w-32 h-20 bg-emerald-400 rounded mx-auto shadow-lg"></div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold text-emerald-800 mb-1">Transformation</h4>
                                <p className="text-sm text-emerald-700">{project.after.transformation}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-emerald-800 mb-1">Result</h4>
                                <p className="text-sm text-emerald-700">{project.after.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-6 border-t bg-background">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-2">Techniques Used</h4>
                              <div className="flex flex-wrap gap-1">
                                {project.techniques.map((technique, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {technique}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Materials Needed</h4>
                              <ul className="space-y-1">
                                {project.materials.map((material, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    {material}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Pro Tip</h4>
                              <p className="text-sm text-muted-foreground italic">
                                "{project.tips}"
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="techniques" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Essential Upcycling Techniques</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Master these fundamental techniques to transform any piece of furniture with confidence.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {techniques.map((technique) => (
                    <Card key={technique.name} className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <technique.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{technique.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {technique.difficulty}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{technique.description}</p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Best For</h4>
                            <ul className="space-y-1">
                              {technique.bestFor.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                  <Star className="h-3 w-3 text-amber-500" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-green-700">Pros</h4>
                              <ul className="space-y-1">
                                {technique.pros.map((pro, i) => (
                                  <li key={i} className="text-xs text-green-600 flex items-center gap-1">
                                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-red-700">Cons</h4>
                              <ul className="space-y-1">
                                {technique.cons.map((con, i) => (
                                  <li key={i} className="text-xs text-red-600 flex items-center gap-1">
                                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="getting-started" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Your First Upcycling Project</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Step 1: Choose the Right Piece</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Look for solid wood construction over particle board</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Check that drawers and doors work properly</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Ensure the piece has good bones - solid structure</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Avoid pieces with extensive water damage or pest issues</span>
                            </li>
                          </ul>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Step 2: Plan Your Transformation</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Measure the piece and your intended space</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Choose colors that complement your decor</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Research techniques suitable for your skill level</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>Create a budget for materials and tools</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Essential Tools for Beginners</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Basic Tools</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Sandpaper (120, 220 grit)</li>
                              <li>• Paint brushes</li>
                              <li>• Screwdriver set</li>
                              <li>• Drop cloths</li>
                              <li>• Safety glasses</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Helpful Additions</h4>
                            <ul className="space-y-1 text-sm">
                              <li>• Electric sander</li>
                              <li>• Paint sprayer</li>
                              <li>• Clamps</li>
                              <li>• Work gloves</li>
                              <li>• Measuring tape</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Common Mistakes to Avoid</h2>
                    <Card className="border-amber-200 bg-amber-50">
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2 text-amber-800">Preparation Shortcuts</h3>
                          <p className="text-sm text-amber-700">
                            Skipping proper cleaning, sanding, or priming leads to poor paint adhesion 
                            and finish quality. Preparation is 70% of the final result.
                          </p>
                        </div>
                        <Separator className="bg-amber-200" />
                        <div>
                          <h3 className="font-semibold mb-2 text-amber-800">Wrong Paint Choice</h3>
                          <p className="text-sm text-amber-700">
                            Using wall paint instead of furniture paint, or choosing low-quality 
                            products that won't withstand furniture use and cleaning.
                          </p>
                        </div>
                        <Separator className="bg-amber-200" />
                        <div>
                          <h3 className="font-semibold mb-2 text-amber-800">Rushing the Process</h3>
                          <p className="text-sm text-amber-700">
                            Not allowing proper drying time between coats leads to poor finish 
                            quality and durability issues down the road.
                          </p>
                        </div>
                        <Separator className="bg-amber-200" />
                        <div>
                          <h3 className="font-semibold mb-2 text-amber-800">Ignoring Hardware</h3>
                          <p className="text-sm text-amber-700">
                            Keeping old, worn hardware when everything else is refreshed makes 
                            the entire project look unfinished and amateur.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Project Timeline Guide</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Simple paint refresh</span>
                            <Badge variant="outline">2-3 days</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Full refinishing</span>
                            <Badge variant="outline">1-2 weeks</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Reupholstery project</span>
                            <Badge variant="outline">1-3 weeks</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Major reconstruction</span>
                            <Badge variant="outline">2-4 weeks</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="inspiration" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Where to Find Great Pieces</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Thrift Stores & Consignment Shops
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Best for: Unique finds, budget-friendly prices, regular turnover
                          </p>
                          <div className="text-xs text-muted-foreground">
                            <strong>Tips:</strong> Visit regularly, check back rooms, build relationships with staff
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Estate Sales & Auctions</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Best for: Quality vintage pieces, complete sets, unique antiques
                          </p>
                          <div className="text-xs text-muted-foreground">
                            <strong>Tips:</strong> Arrive early, bring cash, inspect thoroughly before bidding
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Facebook Marketplace & Craigslist</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Best for: Local finds, negotiable prices, specific searching
                          </p>
                          <div className="text-xs text-muted-foreground">
                            <strong>Tips:</strong> Set up alerts, message quickly, meet safely in public
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Curb Shopping & Free Finds</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Best for: Free materials, project practice, hidden gems
                          </p>
                          <div className="text-xs text-muted-foreground">
                            <strong>Tips:</strong> Check affluent neighborhoods, spring cleaning season, ask permission
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">What Makes a Good Candidate</h2>
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 text-green-800 flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Look for These Qualities
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-green-800">Solid Wood Construction</div>
                              <div className="text-sm text-green-700">Real wood can be sanded, stained, and painted multiple times</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-green-800">Good Proportions</div>
                              <div className="text-sm text-green-700">Well-balanced pieces work in many decor styles</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-green-800">Functional Hardware</div>
                              <div className="text-sm text-green-700">Drawers that open, doors that close properly</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <div className="font-medium text-green-800">Interesting Details</div>
                              <div className="text-sm text-green-700">Curved lines, raised panels, or unique features</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6 border-red-200 bg-red-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 text-red-800">Red Flags to Avoid</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-red-700">Particle board that's swollen or damaged</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-red-700">Heavy smoke odor or pet smells</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-red-700">Structural damage or missing pieces</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-red-700">Evidence of pests or mold</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-red-700">Veneer that's peeling extensively</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-16 bg-emerald-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your First Piece?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with a simple project and watch as your confidence grows. Every piece you save 
              from the landfill is a win for both your wallet and the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <RefreshCw className="h-5 w-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Palette className="h-5 w-5 mr-2" />
                Browse Color Ideas
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}