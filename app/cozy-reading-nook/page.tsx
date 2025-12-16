import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  BookOpen,
  Lightbulb,
  Armchair,
  Heart,
  Home,
  Palette,
  DollarSign,
  Clock,
  Star,
  Sun,
  Moon,
  Coffee,
  Leaf,
  Sparkles,
  Target,
  CheckCircle,
  Eye
} from "lucide-react"
import Link from "next/link"

export default function CozyReadingNookPage() {
  const nookStyles = [
    {
      id: 1,
      name: "Window Seat Wonder",
      style: "Classic & Bright",
      cost: "$150-400",
      space: "Window area",
      vibe: "Airy and natural",
      description: "Transform a window into the perfect reading retreat with built-in seating and storage.",
      elements: [
        "Window seat cushions",
        "Built-in or floating shelves",
        "Throw pillows and blankets",
        "Natural light optimization"
      ],
      pros: ["Excellent natural light", "Space-efficient", "Built-in storage"],
      cons: ["Requires specific window", "May need construction"]
    },
    {
      id: 2,
      name: "Corner Sanctuary",
      style: "Intimate & Cozy",
      cost: "$100-250",
      space: "Any corner",
      vibe: "Enclosed and peaceful",
      description: "Create a private retreat in any corner with the right chair and accessories.",
      elements: [
        "Comfortable reading chair",
        "Floor or table lamp",
        "Side table for books/drinks",
        "Area rug for warmth"
      ],
      pros: ["Works in any room", "Budget-friendly", "Easy to rearrange"],
      cons: ["May feel cramped", "Limited storage"]
    },
    {
      id: 3,
      name: "Bedroom Book Haven",
      style: "Relaxing & Personal",
      cost: "$75-200",
      space: "Bedroom corner",
      vibe: "Intimate and restful",
      description: "Convert unused bedroom space into a personal reading escape.",
      elements: [
        "Accent chair or chaise",
        "Bedside reading light",
        "Small bookshelf or cart",
        "Soft textures and fabrics"
      ],
      pros: ["Private and quiet", "Multi-functional space", "Promotes relaxation"],
      cons: ["May encourage late-night reading", "Limited daytime light"]
    },
    {
      id: 4,
      name: "Living Room Library",
      style: "Social & Accessible",
      cost: "$200-500",
      space: "Living room area",
      vibe: "Welcoming and shared",
      description: "Integrate reading space into your main living area for family enjoyment.",
      elements: [
        "Statement reading chair",
        "Floor-to-ceiling bookshelves",
        "Reading light with dimmer",
        "Storage ottoman or side table"
      ],
      pros: ["Central location", "Impressive display", "Family-friendly"],
      cons: ["More distractions", "Higher cost", "Less privacy"]
    },
    {
      id: 5,
      name: "Outdoor Reading Retreat",
      style: "Natural & Fresh",
      cost: "$125-300",
      space: "Porch or garden",
      vibe: "Peaceful and refreshing",
      description: "Bring reading outdoors with weather-resistant furniture and natural ambiance.",
      elements: [
        "Weather-resistant chair or swing",
        "Outdoor cushions and throws",
        "Shade structure or umbrella",
        "Weather-proof storage"
      ],
      pros: ["Fresh air and nature", "Seasonal enjoyment", "Unique experience"],
      cons: ["Weather dependent", "Security concerns", "Seasonal use"]
    },
    {
      id: 6,
      name: "Minimalist Zen Zone",
      style: "Clean & Focused",
      cost: "$50-150",
      space: "Any quiet area",
      vibe: "Calm and uncluttered",
      description: "Strip away distractions for pure reading focus with minimal, intentional pieces.",
      elements: [
        "Simple, comfortable chair",
        "Single focused light source",
        "Small surface for essentials",
        "Neutral, calming colors"
      ],
      pros: ["Very budget-friendly", "Easy to maintain", "Maximum focus"],
      cons: ["May feel stark", "Limited storage", "Less cozy factor"]
    }
  ]

  const essentialElements = [
    {
      category: "Seating Comfort",
      icon: Armchair,
      color: "text-blue-600",
      importance: "Critical",
      options: [
        { name: "Reading Chair", description: "Ergonomic chair with good back support", price: "$80-300" },
        { name: "Chaise Lounge", description: "Full-body relaxation option", price: "$150-500" },
        { name: "Bean Bag Chair", description: "Casual, adaptable seating", price: "$50-150" },
        { name: "Window Seat", description: "Built-in or added cushioned bench", price: "$100-400" }
      ]
    },
    {
      category: "Perfect Lighting",
      icon: Lightbulb,
      color: "text-amber-600",
      importance: "Critical",
      options: [
        { name: "Floor Lamp", description: "Adjustable reading light", price: "$40-150" },
        { name: "Table Lamp", description: "Warm, focused light source", price: "$25-100" },
        { name: "Wall Sconce", description: "Space-saving wall-mounted option", price: "$30-120" },
        { name: "String Lights", description: "Ambient mood lighting", price: "$10-30" }
      ]
    },
    {
      category: "Storage Solutions",
      icon: BookOpen,
      color: "text-green-600",
      importance: "High",
      options: [
        { name: "Bookshelf", description: "Floating or freestanding shelves", price: "$30-200" },
        { name: "Storage Ottoman", description: "Dual-purpose seating and storage", price: "$50-150" },
        { name: "Side Table", description: "Surface for books, drinks, glasses", price: "$25-100" },
        { name: "Book Cart", description: "Mobile storage solution", price: "$40-120" }
      ]
    },
    {
      category: "Comfort Accessories",
      icon: Heart,
      color: "text-rose-600",
      importance: "Medium",
      options: [
        { name: "Throw Pillows", description: "Support and visual comfort", price: "$15-50" },
        { name: "Soft Blanket", description: "Warmth and coziness", price: "$20-80" },
        { name: "Area Rug", description: "Defines space and adds warmth", price: "$30-150" },
        { name: "Footstool", description: "Leg support for longer reading", price: "$25-100" }
      ]
    }
  ]

  const budgetOptions = [
    {
      level: "Shoestring Budget",
      range: "$25-75",
      description: "Create a cozy nook with creative repurposing and thrift finds",
      solutions: [
        "Thrift store armchair with new cushion",
        "DIY floor cushions with old pillows", 
        "Repurposed wooden crate as side table",
        "String of fairy lights for ambiance",
        "Homemade throw from soft fabric"
      ],
      tips: "Focus on one great thrift find and build around it"
    },
    {
      level: "Budget-Conscious", 
      range: "$75-200",
      description: "Mix affordable new items with DIY elements",
      solutions: [
        "IKEA or Target reading chair",
        "Simple floor lamp from big box store",
        "Floating shelves for book storage",
        "Discount store throw pillows and blanket",
        "Area rug from discount retailer"
      ],
      tips: "Wait for sales and use store credit cards for extra discounts"
    },
    {
      level: "Moderate Investment",
      range: "$200-500", 
      description: "Quality pieces that will last with some splurge items",
      solutions: [
        "Mid-range comfortable reading chair",
        "Quality adjustable floor lamp",
        "Built-in or custom shelving",
        "High-quality textiles and pillows",
        "Coordinated furniture set"
      ],
      tips: "Invest in the chair and lighting first, accessorize over time"
    },
    {
      level: "Luxury Nook",
      range: "$500+",
      description: "Premium materials and custom elements for the ultimate reading experience",
      solutions: [
        "Designer reading chair or custom upholstery",
        "High-end lighting with dimmers",
        "Built-in cabinetry and shelving",
        "Premium textiles and art",
        "Smart home integration"
      ],
      tips: "Consider this a long-term investment in daily comfort and joy"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-amber-50 to-background">
          <div className="container py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Home Design
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Reading Space
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Creating a 
                <span className="text-amber-600"> Cozy Reading Nook</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Transform any space into the perfect reading sanctuary. Discover how to design a 
                comfortable, inviting nook that encourages daily reading habits and provides a 
                peaceful escape from the busy world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Eye className="h-5 w-5 mr-2" />
                  Explore Nook Ideas
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Palette className="h-5 w-5 mr-2" />
                  Design Your Space
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                  <div className="text-2xl font-bold mb-1">2x More</div>
                  <div className="text-sm text-muted-foreground">Reading Time</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                  <div className="text-2xl font-bold mb-1">Less Stress</div>
                  <div className="text-sm text-muted-foreground">Daily Relaxation</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Home className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                  <div className="text-2xl font-bold mb-1">Cozy Vibes</div>
                  <div className="text-sm text-muted-foreground">Home Atmosphere</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 mx-auto mb-3 text-amber-600" />
                  <div className="text-2xl font-bold mb-1">Personal</div>
                  <div className="text-sm text-muted-foreground">Sanctuary Space</div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Every Home Needs a Reading Nook</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A dedicated reading space isn't just about books—it's about creating a mindful retreat 
                that encourages relaxation, learning, and mental wellness. Studies show that people 
                with designated reading spaces read 40% more and report higher satisfaction with their home.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12 bg-muted/20">
          <div className="container">
            <Tabs defaultValue="nook-styles" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="nook-styles">Nook Styles</TabsTrigger>
                <TabsTrigger value="essentials">Essential Elements</TabsTrigger>
                <TabsTrigger value="budget-guide">Budget Guide</TabsTrigger>
                <TabsTrigger value="setup-tips">Setup Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="nook-styles" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Reading Nook Style Guide</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Choose the perfect reading nook style that matches your space, budget, and reading preferences.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {nookStyles.map((nook) => (
                    <Card key={nook.id} className="overflow-hidden h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{nook.name}</h3>
                            <Badge variant="outline" className="text-xs mb-2">{nook.style}</Badge>
                          </div>
                          <div className="text-right text-sm">
                            <div className="font-semibold text-amber-600">{nook.cost}</div>
                            <div className="text-muted-foreground">{nook.space}</div>
                          </div>
                        </div>

                        <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-center text-amber-700">
                            <BookOpen className="h-8 w-8 mx-auto mb-2" />
                            <div className="text-sm font-medium">{nook.vibe}</div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{nook.description}</p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Key Elements</h4>
                            <div className="grid grid-cols-2 gap-1">
                              {nook.elements.map((element, i) => (
                                <div key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                                  <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                                  {element}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-1 text-green-700 text-sm">Pros</h4>
                              <ul className="space-y-1">
                                {nook.pros.map((pro, i) => (
                                  <li key={i} className="text-xs text-green-600 flex items-start gap-1">
                                    <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1 text-amber-700 text-sm">Consider</h4>
                              <ul className="space-y-1">
                                {nook.cons.map((con, i) => (
                                  <li key={i} className="text-xs text-amber-600 flex items-start gap-1">
                                    <div className="w-3 h-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                                    </div>
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

              <TabsContent value="essentials" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Essential Reading Nook Elements</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Every great reading nook starts with these fundamental components. Mix and match to create your perfect space.
                  </p>
                </div>

                <div className="space-y-8">
                  {essentialElements.map((element) => (
                    <Card key={element.category} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <element.icon className={`h-5 w-5 ${element.color}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{element.category}</h3>
                            <Badge variant={element.importance === "Critical" ? "default" : "secondary"} className="text-xs">
                              {element.importance}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {element.options.map((option, i) => (
                            <Card key={i} className="border-l-4 border-l-amber-500">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-semibold text-sm">{option.name}</h4>
                                  <Badge variant="outline" className="text-xs">{option.price}</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">{option.description}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="h-6 w-6 text-amber-600" />
                      <h3 className="text-xl font-semibold">Choosing the Right Combination</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-amber-700">Start with Seating</h4>
                        <p className="text-sm text-muted-foreground">
                          Your chair is the foundation. Choose something you can sit in comfortably 
                          for 30+ minutes without back pain or fidgeting.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-amber-700">Add Proper Lighting</h4>
                        <p className="text-sm text-muted-foreground">
                          Good lighting prevents eye strain and extends reading sessions. Position 
                          light to avoid shadows on your book or device.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-amber-700">Layer in Comfort</h4>
                        <p className="text-sm text-muted-foreground">
                          Pillows, blankets, and surfaces for drinks make the difference between 
                          a chair and a true reading sanctuary.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="budget-guide" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Reading Nook Budget Guide</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Create your perfect reading space at any budget level. Here's how to maximize comfort and style 
                    within your price range.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {budgetOptions.map((budget, index) => (
                    <Card key={budget.level} className={`${index % 2 === 0 ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-blue-500'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <DollarSign className={`h-6 w-6 ${index % 2 === 0 ? 'text-green-600' : 'text-blue-600'}`} />
                          <div>
                            <h3 className="text-lg font-semibold">{budget.level}</h3>
                            <div className="text-sm text-muted-foreground">{budget.range}</div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{budget.description}</p>

                        <div className="space-y-2 mb-4">
                          <h4 className="font-semibold text-sm">Recommended Solutions</h4>
                          <ul className="space-y-1">
                            {budget.solutions.map((solution, i) => (
                              <li key={i} className="text-xs flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-muted/50 rounded p-3">
                          <div className="font-semibold text-xs mb-1">💡 Pro Tip</div>
                          <div className="text-xs text-muted-foreground italic">"{budget.tips}"</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Smart Shopping Strategies</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Where to Find Deals</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium">Thrift Stores & Estate Sales</div>
                            <div className="text-muted-foreground">Vintage chairs, unique lamps, decorative accessories</div>
                          </div>
                          <div>
                            <div className="font-medium">Facebook Marketplace & Craigslist</div>
                            <div className="text-muted-foreground">Quality furniture at fraction of retail price</div>
                          </div>
                          <div>
                            <div className="font-medium">End-of-Season Sales</div>
                            <div className="text-muted-foreground">Outdoor furniture, lighting, home decor clearances</div>
                          </div>
                          <div>
                            <div className="font-medium">IKEA & Target</div>
                            <div className="text-muted-foreground">Affordable basics you can customize and upgrade</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">DIY Cost-Savers</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium">Reupholster Old Chairs</div>
                            <div className="text-muted-foreground">$20-40 in fabric vs $200+ for new furniture</div>
                          </div>
                          <div>
                            <div className="font-medium">Make Your Own Cushions</div>
                            <div className="text-muted-foreground">Custom sizes and fabrics at 50% savings</div>
                          </div>
                          <div>
                            <div className="font-medium">Create Floating Shelves</div>
                            <div className="text-muted-foreground">Simple brackets and boards vs expensive built-ins</div>
                          </div>
                          <div>
                            <div className="font-medium">Upcycle Furniture Finds</div>
                            <div className="text-muted-foreground">Paint and new hardware transform tired pieces</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="setup-tips" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Location & Layout Tips</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Sun className="h-4 w-4 text-amber-500" />
                            Natural Light Considerations
                          </h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>East-facing windows provide gentle morning light</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Avoid direct afternoon sun that creates glare</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Use sheer curtains to diffuse harsh light</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Position reading chair at 90° to window to avoid shadows</span>
                            </li>
                          </ul>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Home className="h-4 w-4 text-blue-500" />
                            Space Planning
                          </h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Minimum 4x4 feet for comfortable chair and side table</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Corner spaces work well for intimate feeling</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Ensure 36" pathway around seating for easy access</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Use rugs to define and separate nook from other areas</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Creating Ambiance</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <h4 className="font-medium mb-2">Lighting Layers</h4>
                            <ul className="space-y-1 text-xs">
                              <li>• Task lighting for reading</li>
                              <li>• Ambient lighting for mood</li>
                              <li>• Accent lighting for interest</li>
                              <li>• Dimmers for flexibility</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Sound Control</h4>
                            <ul className="space-y-1 text-xs">
                              <li>• Soft furnishings absorb noise</li>
                              <li>• Position away from high-traffic areas</li>
                              <li>• White noise machine if needed</li>
                              <li>• Door or curtain for privacy</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Comfort & Functionality</h2>
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 text-green-800 flex items-center gap-2">
                          <Coffee className="h-4 w-4" />
                          Making It Functional
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-green-800">Side Table Essentials</div>
                              <div className="text-sm text-green-700">Space for drinks, glasses, bookmarks, phone</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-green-800">Book Storage</div>
                              <div className="text-sm text-green-700">Current reads within arm's reach, to-read pile nearby</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-green-800">Temperature Control</div>
                              <div className="text-sm text-green-700">Blankets for cool days, fan or good airflow for warmth</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-green-800">Easy Cleanup</div>
                              <div className="text-sm text-green-700">Minimal decor that's easy to dust and maintain</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 flex items-center gap-2">
                          <Leaf className="h-4 w-4 text-green-500" />
                          Personal Touches
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="font-medium mb-1">Plants & Nature</div>
                            <div className="text-muted-foreground">Low-light plants like pothos, snake plants, or peace lilies</div>
                          </div>
                          <div>
                            <div className="font-medium mb-1">Aromatherapy</div>
                            <div className="text-muted-foreground">Essential oil diffuser or candles for relaxing scents</div>
                          </div>
                          <div>
                            <div className="font-medium mb-1">Personal Collections</div>
                            <div className="text-muted-foreground">Display favorite books, travel souvenirs, or art</div>
                          </div>
                          <div>
                            <div className="font-medium mb-1">Seasonal Updates</div>
                            <div className="text-muted-foreground">Switch pillows, throws, and small decor with seasons</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6 border-amber-200 bg-amber-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 text-amber-800">Common Mistakes to Avoid</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-amber-700">Choosing style over comfort for seating</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-amber-700">Insufficient lighting leading to eye strain</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-amber-700">No storage causing constant clutter</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-amber-700">Placing nook in high-traffic, noisy area</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-amber-700">Over-decorating and creating visual distractions</span>
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
        <section className="py-12 md:py-16 bg-amber-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Reading Sanctuary?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start building your perfect reading nook today. Whether you have a corner or a whole room, 
              the right design will transform your reading habits and bring daily joy to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Sparkles className="h-5 w-5 mr-2" />
                Plan My Nook
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <BookOpen className="h-5 w-5 mr-2" />
                Browse Book Storage
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}