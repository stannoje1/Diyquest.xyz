import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  Drill,
  Hammer,
  Wrench,
  Ruler,
  Scissors,
  Star,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  ShoppingCart,
  TrendingUp,
  Award
} from "lucide-react"
import Link from "next/link"

export default function EssentialDIYToolsPage() {
  const tools = [
    {
      id: 1,
      name: "Cordless Drill/Driver",
      icon: Drill,
      category: "Power Tools",
      priceRange: "$40-150",
      priority: "Essential",
      description: "The most versatile tool in any DIY arsenal. Perfect for drilling holes and driving screws.",
      whyEssential: "Used in 90% of all DIY projects. Saves time and effort compared to manual tools.",
      whatToLookFor: ["18V or 20V battery", "Adjustable torque settings", "LED work light", "Comfortable grip"],
      projects: ["Furniture assembly", "Wall mounting", "Deck building", "Cabinet installation"],
      budgetOption: "Basic 12V model ($40-60)",
      premiumOption: "Brushless motor with 2 batteries ($120-150)"
    },
    {
      id: 2,
      name: "Measuring Tape",
      icon: Ruler,
      category: "Measuring",
      priceRange: "$8-25",
      priority: "Essential",
      description: "Accurate measurements are the foundation of successful DIY projects.",
      whyEssential: "Required for planning, cutting, and ensuring proper fit in all projects.",
      whatToLookFor: ["25ft length minimum", "Standout capability", "Clear markings", "Durable case"],
      projects: ["Room planning", "Furniture building", "Flooring installation", "Garden layout"],
      budgetOption: "Basic 25ft tape ($8-12)",
      premiumOption: "Magnetic tip with standout ($20-25)"
    },
    {
      id: 3,
      name: "Circular Saw",
      icon: Scissors,
      category: "Cutting",
      priceRange: "$60-200",
      priority: "High",
      description: "Essential for making straight cuts in lumber, plywood, and other materials.",
      whyEssential: "Enables precise, quick cuts that would be impossible with hand tools.",
      whatToLookFor: ["7.25\" blade diameter", "Electric brake", "Dust collection", "Bevel adjustment"],
      projects: ["Deck construction", "Shelving", "Framing", "Trim work"],
      budgetOption: "Corded model ($60-80)",
      premiumOption: "Cordless with track system ($150-200)"
    },
    {
      id: 4,
      name: "Hammer Set",
      icon: Hammer,
      category: "Hand Tools",
      priceRange: "$15-50",
      priority: "Essential",
      description: "Multiple hammer types for different applications - claw, ball peen, and rubber mallet.",
      whyEssential: "Fundamental tool for assembly, demolition, and finishing work.",
      whatToLookFor: ["16oz claw hammer", "Comfortable grip", "Anti-vibration handle", "Magnetic nail holder"],
      projects: ["Framing", "Furniture assembly", "Flooring", "General repairs"],
      budgetOption: "Basic claw hammer ($15-25)",
      premiumOption: "3-piece hammer set ($40-50)"
    },
    {
      id: 5,
      name: "Socket & Wrench Set",
      icon: Wrench,
      category: "Hand Tools",
      priceRange: "$25-80",
      priority: "High",
      description: "Complete set of sockets and wrenches for nuts, bolts, and mechanical assemblies.",
      whyEssential: "Essential for furniture assembly, automotive work, and mechanical projects.",
      whatToLookFor: ["Both metric and imperial", "Ratcheting handles", "Deep and shallow sockets", "Extension bars"],
      projects: ["Furniture assembly", "Automotive repairs", "Equipment maintenance", "Outdoor structures"],
      budgetOption: "Basic 40-piece set ($25-40)",
      premiumOption: "Professional 120-piece set ($60-80)"
    },
    {
      id: 6,
      name: "Level Set",
      icon: Ruler,
      category: "Measuring",
      priceRange: "$20-60",
      priority: "Essential",
      description: "Torpedo, 2-foot, and 4-foot levels for ensuring perfectly straight and plumb installations.",
      whyEssential: "Critical for professional-looking results in mounting, building, and installation projects.",
      whatToLookFor: ["Magnetic base", "Multiple bubble vials", "Durable aluminum construction", "Clear readings"],
      projects: ["Picture hanging", "Shelving installation", "Deck building", "Tile work"],
      budgetOption: "2-piece level set ($20-30)",
      premiumOption: "Digital level set ($45-60)"
    },
    {
      id: 7,
      name: "Multi-tool/Oscillating Tool",
      icon: Star,
      category: "Power Tools",
      priceRange: "$50-180",
      priority: "Medium",
      description: "Versatile cutting, sanding, and scraping tool that fits into tight spaces.",
      whyEssential: "Perfect for detail work, repairs, and situations where larger tools won't fit.",
      whatToLookFor: ["Variable speed control", "Tool-free blade changes", "Multiple attachments", "Dust extraction"],
      projects: ["Flooring repairs", "Caulk removal", "Precision cuts", "Furniture restoration"],
      budgetOption: "Basic corded model ($50-70)",
      premiumOption: "Cordless with accessory kit ($130-180)"
    },
    {
      id: 8,
      name: "Stud Finder",
      icon: CheckCircle,
      category: "Detection",
      priceRange: "$15-60",
      priority: "High",
      description: "Locates wall studs, metal pipes, and electrical wires behind drywall.",
      whyEssential: "Prevents damage and ensures secure mounting for heavy items.",
      whatToLookFor: ["Edge and center finding", "Metal and live wire detection", "Deep scan capability", "Clear display"],
      projects: ["Wall mounting TVs", "Heavy shelving", "Cabinet installation", "Electrical work"],
      budgetOption: "Basic edge-finding model ($15-25)",
      premiumOption: "Multi-sensor with display ($40-60)"
    },
    {
      id: 9,
      name: "Safety Equipment Set",
      icon: AlertTriangle,
      category: "Safety",
      priceRange: "$30-80",
      priority: "Essential",
      description: "Safety glasses, ear protection, work gloves, and dust masks.",
      whyEssential: "Protects against injury and long-term health issues from DIY work.",
      whatToLookFor: ["ANSI-rated safety glasses", "Hearing protection", "Cut-resistant gloves", "N95 dust masks"],
      projects: ["All projects requiring protection", "Demolition work", "Sanding and cutting", "Chemical handling"],
      budgetOption: "Basic safety kit ($30-45)",
      premiumOption: "Professional-grade set ($60-80)"
    },
    {
      id: 10,
      name: "Tool Storage System",
      icon: ShoppingCart,
      category: "Organization",
      priceRange: "$40-200",
      priority: "Medium",
      description: "Toolbox, tool bag, or pegboard system to keep tools organized and accessible.",
      whyEssential: "Protects tool investment and improves efficiency by keeping tools organized.",
      whatToLookFor: ["Portable and stationary options", "Compartment organization", "Durable construction", "Expandable design"],
      projects: ["Tool organization", "Workshop setup", "Mobile projects", "Long-term storage"],
      budgetOption: "Canvas tool bag ($40-60)",
      premiumOption: "Rolling toolbox with drawers ($120-200)"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-muted/50 to-background">
          <div className="container py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  Essential Guide
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Tool Selection
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                10 Essential Tools Every DIY Enthusiast Should Own
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Build your perfect tool collection with our carefully curated list of must-have tools. 
                From beginner essentials to advanced power tools, we'll help you make smart investment 
                decisions that will serve you for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  View Shopping List
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Compare Prices
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold mb-1">10 Tools</div>
                  <div className="text-sm text-muted-foreground">Carefully Selected</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold mb-1">$300-900</div>
                  <div className="text-sm text-muted-foreground">Total Investment</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold mb-1">90%</div>
                  <div className="text-sm text-muted-foreground">Project Coverage</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold mb-1">5-20 Years</div>
                  <div className="text-sm text-muted-foreground">Tool Lifespan</div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why These 10 Tools?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                After analyzing hundreds of DIY projects and consulting with professional craftspeople, 
                these 10 tools consistently appear in 90% of all home improvement and DIY projects. 
                They represent the perfect balance of versatility, quality, and value.
              </p>
            </div>
          </div>
        </section>

        {/* Tools List */}
        <section className="py-8 md:py-12 bg-muted/20">
          <div className="container">
            <Tabs defaultValue="list" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="list">Complete List</TabsTrigger>
                <TabsTrigger value="budget">Budget Guide</TabsTrigger>
                <TabsTrigger value="shopping">Shopping Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="list" className="space-y-6">
                <div className="space-y-6">
                  {tools.map((tool, index) => (
                    <Card key={tool.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-4 gap-0">
                          {/* Tool Header */}
                          <div className="lg:col-span-1 bg-primary/5 p-6 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <tool.icon className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground">#{index + 1}</div>
                                <h3 className="text-xl font-bold">{tool.name}</h3>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge variant={tool.priority === "Essential" ? "default" : "secondary"}>
                                  {tool.priority}
                                </Badge>
                                <Badge variant="outline">{tool.category}</Badge>
                              </div>
                              <div className="text-2xl font-bold text-primary">{tool.priceRange}</div>
                            </div>
                          </div>

                          {/* Tool Details */}
                          <div className="lg:col-span-3 p-6">
                            <p className="text-lg mb-4">{tool.description}</p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-2 text-green-700">Why It's Essential</h4>
                                <p className="text-sm text-muted-foreground mb-4">{tool.whyEssential}</p>
                                
                                <h4 className="font-semibold mb-2">What to Look For</h4>
                                <ul className="space-y-1">
                                  {tool.whatToLookFor.map((feature, i) => (
                                    <li key={i} className="text-sm flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2">Common Projects</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {tool.projects.map((project, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                      {project}
                                    </Badge>
                                  ))}
                                </div>
                                
                                <div className="space-y-3">
                                  <div>
                                    <div className="text-sm font-medium text-blue-700">Budget Option</div>
                                    <div className="text-sm text-muted-foreground">{tool.budgetOption}</div>
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-purple-700">Premium Option</div>
                                    <div className="text-sm text-muted-foreground">{tool.premiumOption}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="budget" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Budget Breakdown</h2>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Starter Kit (Essential Only)</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span>Cordless Drill</span>
                            <span className="text-muted-foreground">$50</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Measuring Tape</span>
                            <span className="text-muted-foreground">$10</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Hammer Set</span>
                            <span className="text-muted-foreground">$20</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Level Set</span>
                            <span className="text-muted-foreground">$25</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Safety Equipment</span>
                            <span className="text-muted-foreground">$35</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between items-center font-semibold">
                            <span>Total Starter Kit</span>
                            <span>$140</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Complete Kit (All 10 Tools)</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Budget Version</span>
                            <span className="font-medium">$280-400</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Mid-Range Version</span>
                            <span className="font-medium">$450-650</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Premium Version</span>
                            <span className="font-medium">$750-900</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Priority Order</h2>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Buy First (Must-Haves)</h3>
                        <ol className="space-y-2">
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            <span>Safety Equipment</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                            <span>Measuring Tape</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                            <span>Cordless Drill</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                            <span>Level Set</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">5</div>
                            <span>Hammer Set</span>
                          </li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Buy Second (High Value)</h3>
                        <ol className="space-y-2" start={6}>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs font-bold">6</div>
                            <span>Socket & Wrench Set</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs font-bold">7</div>
                            <span>Stud Finder</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs font-bold">8</div>
                            <span>Circular Saw</span>
                          </li>
                        </ol>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Buy Last (Nice to Have)</h3>
                        <ol className="space-y-2" start={9}>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">9</div>
                            <span>Multi-tool</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">10</div>
                            <span>Tool Storage</span>
                          </li>
                        </ol>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="shopping" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Smart Shopping Tips</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">When to Buy</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Black Friday/Cyber Monday:</strong> Best deals on power tools (30-50% off)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Father's Day:</strong> Tool combo deals and gift sets</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Spring Sales:</strong> Home improvement season kickoff</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span><strong>End of Summer:</strong> Clearance on seasonal tools</span>
                            </li>
                          </ul>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Where to Shop</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Home Depot/Lowe's:</strong> Wide selection, price matching</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Harbor Freight:</strong> Budget tools, frequent coupons</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Amazon:</strong> Convenience, reviews, competitive pricing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span><strong>Costco/Sam's:</strong> Quality brands, bulk pricing</span>
                            </li>
                          </ul>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Money-Saving Strategies</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <DollarSign className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Buy combo kits for better value per tool</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <DollarSign className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Consider refurbished tools from manufacturers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <DollarSign className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Join store loyalty programs for exclusive deals</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <DollarSign className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Price match policies can save 10-20%</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Brand Recommendations</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Power Tools</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span><strong>Premium:</strong> DeWalt, Milwaukee, Makita</span>
                              <Badge variant="outline">$$$</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span><strong>Mid-Range:</strong> Ryobi, Craftsman, Bosch</span>
                              <Badge variant="outline">$$</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span><strong>Budget:</strong> Black+Decker, Porter-Cable</span>
                              <Badge variant="outline">$</Badge>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Hand Tools</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span><strong>Premium:</strong> Klein, Snap-on, Starrett</span>
                              <Badge variant="outline">$$$</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span><strong>Mid-Range:</strong> Stanley, Craftsman, Husky</span>
                              <Badge variant="outline">$$</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span><strong>Budget:</strong> Tekton, Pittsburgh, Kobalt</span>
                              <Badge variant="outline">$</Badge>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">What to Avoid</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>No-name brands with no warranty</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>Tools that seem too cheap for their category</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>Buying based on looks rather than functionality</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Warranty Considerations</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium mb-1">Power Tools</div>
                            <div className="text-muted-foreground">Look for 3-5 year warranties, some offer lifetime on hand tools</div>
                          </div>
                          <Separator />
                          <div>
                            <div className="font-medium mb-1">Hand Tools</div>
                            <div className="text-muted-foreground">Many quality brands offer lifetime warranties on hand tools</div>
                          </div>
                          <Separator />
                          <div>
                            <div className="font-medium mb-1">Safety Equipment</div>
                            <div className="text-muted-foreground">Replace regularly regardless of warranty - safety first</div>
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
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Tool Collection?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with our essential tools and gradually build your collection. Remember, quality tools 
              are an investment that will serve you for decades of DIY projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Create Shopping List
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Browse Projects
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}