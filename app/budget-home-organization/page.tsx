import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { 
  DollarSign,
  Home,
  Package,
  ShoppingCart,
  Lightbulb,
  CheckCircle,
  Clock,
  TrendingUp,
  Heart,
  Scissors,
  Recycle,
  Star,
  Target,
  Zap,
  Award
} from "lucide-react"
import Link from "next/link"

export default function BudgetFriendlyOrganizationPage() {
  const roomGuides = [
    {
      id: 1,
      room: "Kitchen",
      icon: "🍳",
      totalCost: "$25-50",
      timeRequired: "4-6 hours",
      priority: "High",
      solutions: [
        {
          name: "Tension Rod Under Sink",
          cost: "$3-5",
          description: "Hang cleaning supplies and spray bottles",
          materials: ["Tension rod", "S-hooks or clips"]
        },
        {
          name: "Drawer Divider Boxes",
          cost: "$8-12", 
          description: "Repurpose small boxes to organize utensils",
          materials: ["Cereal boxes", "Contact paper", "Scissors"]
        },
        {
          name: "Magnetic Spice Storage",
          cost: "$10-15",
          description: "Magnetic containers on fridge side",
          materials: ["Small magnetic containers", "Labels"]
        },
        {
          name: "Pantry Door Organizer",
          cost: "$15-20",
          description: "Over-door shoe organizer for snacks",
          materials: ["Clear shoe organizer", "Command hooks"]
        }
      ],
      quickWins: ["Clear countertops", "Group like items", "Use vertical space"]
    },
    {
      id: 2,
      room: "Bedroom",
      icon: "🛏️",
      totalCost: "$20-40",
      timeRequired: "3-4 hours",
      priority: "Medium",
      solutions: [
        {
          name: "Under-Bed Storage Boxes",
          cost: "$10-15",
          description: "Sliding containers for seasonal clothes",
          materials: ["Plastic storage boxes", "Labels"]
        },
        {
          name: "Closet Rod Doubler",
          cost: "$5-8",
          description: "Add second hanging rod for shirts",
          materials: ["Closet rod doubler", "Hangers"]
        },
        {
          name: "Nightstand Organizer",
          cost: "$3-5",
          description: "Small dishes or boxes for jewelry/charging",
          materials: ["Small bowls", "Velvet fabric"]
        },
        {
          name: "Over-Door Hooks",
          cost: "$5-10",
          description: "Hooks for robes, bags, tomorrow's outfit",
          materials: ["Over-door hooks", "Command strips"]
        }
      ],
      quickWins: ["Make bed daily", "One-minute pickup", "Designate drop zones"]
    },
    {
      id: 3,
      room: "Bathroom",
      icon: "🚿",
      totalCost: "$15-35",
      timeRequired: "2-3 hours", 
      priority: "High",
      solutions: [
        {
          name: "Shower Caddy DIY",
          cost: "$8-12",
          description: "Basket with suction cups for products",
          materials: ["Wire basket", "Suction cups", "Zip ties"]
        },
        {
          name: "Medicine Cabinet Organizer",
          cost: "$5-8",
          description: "Small containers for pills and supplies",
          materials: ["Small plastic containers", "Labels"]
        },
        {
          name: "Towel Ladder",
          cost: "$12-15",
          description: "Decorative ladder for towel storage",
          materials: ["Wooden ladder or bamboo", "Sandpaper"]
        },
        {
          name: "Under-Sink Caddy",
          cost: "$6-10",
          description: "Sliding caddy around plumbing",
          materials: ["Plastic caddy", "Felt pads"]
        }
      ],
      quickWins: ["Daily declutter", "Hang towels immediately", "Use drawer dividers"]
    },
    {
      id: 4,
      room: "Living Room",
      icon: "🛋️",
      totalCost: "$30-60",
      timeRequired: "3-5 hours",
      priority: "Medium",
      solutions: [
        {
          name: "Ottoman Storage",
          cost: "$20-30",
          description: "Storage ottoman for blankets and games",
          materials: ["Storage ottoman", "Basket liner"]
        },
        {
          name: "Remote Control Station",
          cost: "$3-6",
          description: "Caddy to wrangle all remotes",
          materials: ["Small basket", "Dividers"]
        },
        {
          name: "Cable Management Box",
          cost: "$8-12",
          description: "Hide power strips and cords",
          materials: ["Decorative box", "Cable holes"]
        },
        {
          name: "Magazine Ladder",
          cost: "$10-15",
          description: "Leaning ladder for magazines and throws",
          materials: ["Wooden ladder", "Paint or stain"]
        }
      ],
      quickWins: ["Daily 10-minute pickup", "Assign homes for items", "Use trays for grouping"]
    },
    {
      id: 5,
      room: "Home Office",
      icon: "💻",
      totalCost: "$25-45",
      timeRequired: "4-5 hours",
      priority: "High",
      solutions: [
        {
          name: "Desktop Organizer",
          cost: "$8-12",
          description: "Multi-level desk organization",
          materials: ["Small boxes", "Contact paper", "Dividers"]
        },
        {
          name: "Wall File System",
          cost: "$10-15",
          description: "Hanging file folders for papers",
          materials: ["File folders", "Command strips", "Labels"]
        },
        {
          name: "Cord Management",
          cost: "$5-8",
          description: "Binder clips and tubes for cord organization",
          materials: ["Binder clips", "Toilet paper tubes", "Labels"]
        },
        {
          name: "Supply Station",
          cost: "$6-10",
          description: "Rotating organizer for office supplies",
          materials: ["Lazy Susan", "Small containers"]
        }
      ],
      quickWins: ["Clear desk daily", "Go paperless when possible", "Use vertical wall space"]
    },
    {
      id: 6,
      room: "Kids' Room",
      icon: "🧸",
      totalCost: "$20-40",
      timeRequired: "3-4 hours",
      priority: "Medium",
      solutions: [
        {
          name: "Toy Rotation System",
          cost: "$8-12",
          description: "Bins for rotating toys in and out",
          materials: ["Clear storage bins", "Labels with pictures"]
        },
        {
          name: "Book Display Ledges",
          cost: "$10-15",
          description: "Picture ledges for displaying books",
          materials: ["Picture ledges", "Wall anchors"]
        },
        {
          name: "Art Supply Station",
          cost: "$6-10",
          description: "Rolling cart for art supplies",
          materials: ["Small rolling cart", "Containers", "Labels"]
        },
        {
          name: "Clothing Sort System",
          cost: "$8-12",
          description: "Labeled bins for easy sorting",
          materials: ["Fabric bins", "Picture labels"]
        }
      ],
      quickWins: ["One toy out, one away", "Visual labels", "Low-height storage"]
    }
  ]

  const budgetTips = [
    {
      category: "Free Solutions",
      icon: DollarSign,
      color: "text-green-600",
      tips: [
        "Repurpose glass jars for bathroom and kitchen storage",
        "Use shoe boxes covered in contact paper as drawer organizers", 
        "Repurpose egg cartons for small item organization",
        "Use empty tissue boxes as cord organizers",
        "Turn old suitcases into under-bed storage"
      ]
    },
    {
      category: "Dollar Store Finds",
      icon: ShoppingCart,
      color: "text-blue-600",
      tips: [
        "Plastic baskets and containers for every room",
        "Command hooks and strips for damage-free hanging",
        "Drawer liner to prevent items from sliding",
        "Label makers or stickers for identification",
        "Small bins perfect for drawer dividers"
      ]
    },
    {
      category: "DIY Upgrades",
      icon: Scissors,
      color: "text-purple-600",
      tips: [
        "Cover cardboard boxes with fabric for custom storage",
        "Create pegboard organizers with hooks and containers",
        "Build simple shelves from boards and brackets",
        "Make drawer dividers from cardboard",
        "Transform mason jars into hanging organizers"
      ]
    },
    {
      category: "Thrift Store Treasures",
      icon: Recycle,
      color: "text-amber-600",
      tips: [
        "Vintage suitcases for stylish storage",
        "Old wooden crates for rustic organization",
        "Decorative bowls and trays for corralling items",
        "Baskets in every size for versatile storage",
        "Picture frames to create vision boards"
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-b from-blue-50 to-background">
          <div className="container py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  <DollarSign className="h-3 w-3 mr-1" />
                  Budget-Friendly
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Home Organization
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Budget-Friendly 
                <span className="text-blue-600"> Home Organization</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Transform your home into an organized oasis without breaking the bank. Discover clever, 
                affordable solutions that maximize space, reduce clutter, and bring peace to your daily 
                life - all for less than the cost of dinner out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Home className="h-5 w-5 mr-2" />
                  Start Organizing
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  See Ideas
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl font-bold mb-1">Under $50</div>
                  <div className="text-sm text-muted-foreground">Per Room Average</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl font-bold mb-1">2-6 Hours</div>
                  <div className="text-sm text-muted-foreground">Weekend Project</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl font-bold mb-1">30% More</div>
                  <div className="text-sm text-muted-foreground">Usable Space</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-2xl font-bold mb-1">Less Stress</div>
                  <div className="text-sm text-muted-foreground">Daily Life</div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Organization Matters</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Studies show that organized homes reduce stress hormones by up to 25%, save families 
                40+ minutes per day in searching for items, and increase property values by 10-15%. 
                Best of all, it doesn't have to cost a fortune to achieve.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12 bg-muted/20">
          <div className="container">
            <Tabs defaultValue="room-guides" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="room-guides">Room by Room</TabsTrigger>
                <TabsTrigger value="budget-tips">Budget Tips</TabsTrigger>
                <TabsTrigger value="quick-wins">Quick Wins</TabsTrigger>
                <TabsTrigger value="shopping-guide">Shopping Guide</TabsTrigger>
              </TabsList>

              <TabsContent value="room-guides" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Room-by-Room Organization Guide</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Tackle your home one room at a time with these budget-friendly solutions tailored to each space's unique needs.
                  </p>
                </div>

                <div className="space-y-8">
                  {roomGuides.map((room) => (
                    <Card key={room.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-4 gap-0">
                          {/* Room Header */}
                          <div className="lg:col-span-1 bg-primary/5 p-6">
                            <div className="text-center">
                              <div className="text-4xl mb-2">{room.icon}</div>
                              <h3 className="text-xl font-bold mb-2">{room.room}</h3>
                              <div className="space-y-2">
                                <Badge variant={room.priority === "High" ? "default" : "secondary"}>
                                  {room.priority} Priority
                                </Badge>
                                <div className="text-sm space-y-1">
                                  <div><strong>Budget:</strong> {room.totalCost}</div>
                                  <div><strong>Time:</strong> {room.timeRequired}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Solutions */}
                          <div className="lg:col-span-3 p-6">
                            <h4 className="font-semibold mb-4">Affordable Organization Solutions</h4>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                              {room.solutions.map((solution, i) => (
                                <Card key={i} className="border-l-4 border-l-blue-500">
                                  <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                      <h5 className="font-semibold">{solution.name}</h5>
                                      <Badge variant="outline" className="text-xs">{solution.cost}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-3">{solution.description}</p>
                                    <div>
                                      <div className="text-xs font-medium mb-1">Materials:</div>
                                      <div className="text-xs text-muted-foreground">
                                        {solution.materials.join(", ")}
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>

                            <div className="border-t pt-4">
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Zap className="h-4 w-4 text-amber-500" />
                                Quick Wins for This Room
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {room.quickWins.map((win, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {win}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="budget-tips" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Smart Budget Organization Tips</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Maximize your organization impact while minimizing costs with these creative, budget-conscious approaches.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {budgetTips.map((tipCategory) => (
                    <Card key={tipCategory.category} className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <tipCategory.icon className={`h-5 w-5 ${tipCategory.color}`} />
                          </div>
                          <h3 className="text-lg font-semibold">{tipCategory.category}</h3>
                        </div>
                        
                        <ul className="space-y-3">
                          {tipCategory.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold">Money-Saving Organization Principles</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-700">Start With What You Have</h4>
                        <p className="text-sm text-muted-foreground">
                          Before buying anything, look around your home for containers, boxes, and organizers 
                          you can repurpose. You likely have 70% of what you need already.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-700">Buy Multi-Purpose Items</h4>
                        <p className="text-sm text-muted-foreground">
                          Choose organizers that can serve multiple functions or be moved between rooms as 
                          your needs change. Flexibility saves money long-term.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-700">DIY When It Makes Sense</h4>
                        <p className="text-sm text-muted-foreground">
                          Simple solutions often work better than expensive systems. A repurposed box can be 
                          just as effective as a $30 specialty organizer.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quick-wins" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">15-Minute Organization Wins</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4 text-green-500" />
                            Quick Kitchen Fixes
                          </h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Clear and wipe down all countertops completely</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Group like items together in cabinets and pantry</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Load/unload dishwasher and put items away</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Organize one junk drawer with small containers</span>
                            </li>
                          </ul>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4 text-blue-500" />
                            Bedroom Quick Fixes
                          </h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Make bed and clear nightstands of clutter</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Sort clothes into keep, donate, and laundry piles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Organize jewelry in small dishes or dividers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Create designated spots for daily essentials</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">The 5-Minute Daily Reset</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Prevent organization from overwhelming you by maintaining systems with just 5 minutes daily.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Put items back in their designated homes</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Wipe down one surface (counter, desk, etc.)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Sort mail and papers immediately</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Do a quick visual scan and tidy</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Weekend Organization Projects</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Saturday Morning (2 hours)</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Tackle one closet with three-pile sorting method</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Organize bathroom medicine cabinet and drawers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Set up entryway drop zone for keys, bags, mail</span>
                            </li>
                          </ul>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Sunday Afternoon (3 hours)</h3>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Create command center for family schedules/papers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Organize garage/basement storage areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>Set up kids' room organization systems</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6 border-green-200 bg-green-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4 text-green-800">Motivation Tips</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-green-700">
                              <strong>Start small:</strong> Choose the easiest room first to build momentum
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-green-700">
                              <strong>Set timers:</strong> Work in focused 25-minute bursts with breaks
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-green-700">
                              <strong>Celebrate progress:</strong> Take before/after photos to see your success
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-green-700">
                              <strong>Get help:</strong> Involve family members and make it fun with music
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="shopping-guide" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Where to Shop Smart</h2>
                    <Card>
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-green-500" />
                            Dollar Stores & Discount Retailers
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Perfect for basic containers, bins, and organizing supplies at fraction of retail cost.
                          </p>
                          <div className="text-xs space-y-1">
                            <div><strong>Best buys:</strong> Plastic bins, baskets, drawer liners, hooks</div>
                            <div><strong>Avoid:</strong> Items that need to support heavy weight</div>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Thrift Stores & Consignment</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Find unique storage pieces with character at unbeatable prices.
                          </p>
                          <div className="text-xs space-y-1">
                            <div><strong>Best finds:</strong> Vintage suitcases, baskets, decorative containers</div>
                            <div><strong>Tips:</strong> Visit regularly, check furniture for storage potential</div>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-semibold mb-2">Big Box Stores (Sales Only)</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Wait for end-of-season clearances and back-to-school sales.
                          </p>
                          <div className="text-xs space-y-1">
                            <div><strong>Best timing:</strong> January, August, post-holiday clearances</div>
                            <div><strong>Strategy:</strong> Stock up on basics when deeply discounted</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Smart Shopping List</h2>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Essential Organization Supplies</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Under $5 Items</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>• Command strips</div>
                              <div>• Drawer liner</div>
                              <div>• Small bins</div>
                              <div>• Tension rods</div>
                              <div>• Labels</div>
                              <div>• S-hooks</div>
                            </div>
                          </div>
                          <Separator />
                          <div>
                            <h4 className="font-medium mb-2">$5-15 Investments</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>• Storage baskets</div>
                              <div>• Drawer organizers</div>
                              <div>• Over-door hangers</div>
                              <div>• Clear containers</div>
                              <div>• Shelf brackets</div>
                              <div>• Closet organizers</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-4">Money-Saving Shopping Tips</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Measure spaces before shopping to avoid returns</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Shop your own home first - repurpose what you have</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Buy neutral colors that work in any room</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Choose stackable and nestable containers</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Compare price per unit, not just total price</span>
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
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with just one room and watch how organization transforms not just your space, 
              but your daily life. Small changes lead to big improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Package className="h-5 w-5 mr-2" />
                Choose Your First Room
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Create Shopping List
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}