import { ArrowRight, Monitor, Brain, Eye, Settings, Globe, User, Link } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  const topics = [
    {
      icon: Monitor,
      title: "Honest Reviews",
      description: "Monitors, smartphones, and tablets",
      color: "badge-primary"
    },
    {
      icon: Brain,
      title: "Digital Wellness",
      description: "Screen time and mental health insights",
      color: "badge-secondary"
    },
    {
      icon: Eye,
      title: "Eye Care Tips",
      description: "For heavy screen users",
      color: "badge-accent"
    },
    {
      icon: Settings,
      title: "Optimization Guides",
      description: "Screen settings for productivity",
      color: "badge-info"
    },
    {
      icon: Globe,
      title: "Industry Trends",
      description: "Display technology insights",
      color: "badge-success"
    }
  ];

  const socialLinks = [
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "YouTube", url: "#" }
  ];
  useEffect(()=>{
    document.title = 'About | Neura'
  },[])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-6xl">
            {/* Main Title */}
            <div className="mb-16">
              <div className="avatar mb-8">
                <div className="w-24 rounded-full bg-gradient-to-r from-primary to-secondary p-4">
                  <Monitor className="w-full h-full text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                Neura
              </h1>
              <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed mb-8">
                Your ultimate destination for all the blogs that goes with your every day life.
              </p>
            </div>

            {/* Central Hub Card */}
            <div className="flex justify-center mb-16">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="avatar">
                    <div className="w-16 rounded-full bg-gradient-to-r from-primary to-secondary">
                      <Monitor className="w-8 h-8 text-white m-4" />
                    </div>
                  </div>
                  <h2 className="card-title">Navigate the Screen-Centric World</h2>
                  <p className="text-base-content/70">One pixel at a time</p>
                </div>
              </div>
            </div>

            {/* Flow Chart - Topic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {topics.map((topic, index) => (
                <div key={index} className="relative">
                  {/* Connecting Lines */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-base-300"></div>
                  
                  <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="card-body">
                      <div className="flex items-center justify-center mb-4">
                        <div className={`badge ${topic.color} p-4`}>
                          <topic.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="card-title text-lg justify-center">{topic.title}</h3>
                      <p className="text-center text-base-content/70 text-sm">{topic.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why ScreenSphere Section */}
            <div className="card bg-base-100/60 backdrop-blur-sm shadow-lg mb-16">
              <div className="card-body">
                <h2 className="card-title text-3xl justify-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Why "ScreenSphere"?
                </h2>
                <p className="text-lg text-base-content/80 text-center max-w-4xl mx-auto leading-relaxed">
                  Because we live in a world surrounded by screens — at home, at work, in our pockets. 
                  Our goal is to help you navigate this screen-centric world wisely, one pixel at a time.
                </p>
              </div>
            </div>

            {/* About Author Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="flex items-center mb-6">
                    <div className="badge badge-success p-4 mr-4">
                      <User className="w-6 h-6" />
                    </div>
                    <h3 className="card-title text-2xl">Who's Behind the Blog?</h3>
                  </div>
                  <p className="text-base-content/80 leading-relaxed mb-4">
                    I'm <span className="font-bold">Mosarof Hossain</span>, a Tech Enthusiast / Developer / UX Designer / Health Advocate 
                    who's passionate about how screens shape our lifestyle.
                  </p>
                  <p className="text-base-content/80 leading-relaxed">
                    I created <span className="text-secondary font-bold">Neura</span> to share my experiences, reviews, and research with a growing 
                    community that values clarity — on and off the screen.
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="hidden md:flex justify-center">
                <div className="radial-progress bg-primary/20 text-primary border-primary border-4" style={{"--value": "70", "--size": "16rem", "--thickness": "2px"}}>
                  <div className="avatar">
                    <div className="w-32 rounded-full bg-gradient-to-r from-primary to-secondary">
                      <Monitor className="w-16 h-16 text-white m-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
              <div className="card-body items-center text-center">
                <div className="avatar mb-6">
                  <div className="w-16 rounded-full bg-white/20">
                    <Link className="w-8 h-8 text-white m-4" />
                  </div>
                </div>
                <h3 className="card-title text-2xl mb-4">Let's Stay Connected</h3>
                <p className="text-primary-content/80 mb-6 max-w-2xl">
                  Have questions, suggestions, or a topic you'd like me to cover?
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} className="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-primary">
                      {link.name}
                    </a>
                  ))}
                </div>
                <button className="btn btn-secondary btn-lg">
                  Contact Me <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;