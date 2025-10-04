import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Satellite, Bell, Globe, Shield, Zap, Target } from "lucide-react";
import heroEarth from "@/assets/hero-earth.jpg";

const Index = () => {
  return (
    <div className="min-h-screen stars-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroEarth})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Predict satellite positions, detect close approaches
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Receive timely conjunction alerts with our advanced orbital mechanics platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/tracking">
                <Button variant="hero" size="lg" className="min-w-[200px]">
                  <Satellite className="mr-2" />
                  Track Satellites
                </Button>
              </Link>
              <Link to="/alerts">
                <Button variant="space" size="lg" className="min-w-[200px]">
                  <Bell className="mr-2" />
                  Activate Alerts
                </Button>
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card className="glass p-6 hover:glow-primary transition-all animate-scale-in">
                <Globe className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor LEO satellites with precise orbital predictions
                </p>
              </Card>

              <Card className="glass p-6 hover:glow-secondary transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <Target className="w-12 h-12 text-secondary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Conjunction Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced algorithms detect potential satellite close approaches
                </p>
              </Card>

              <Card className="glass p-6 hover:glow-accent transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <Zap className="w-12 h-12 text-accent mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Instant Alerts</h3>
                <p className="text-sm text-muted-foreground">
                  Get real-time notifications for critical events
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About LEO Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Why Track LEO Satellites?</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Low Earth Orbit (LEO) satellites operate between 160-2,000 km above Earth's surface. 
                  With thousands of active satellites and debris objects, collision avoidance is critical.
                </p>
                <p>
                  Our platform uses advanced orbital mechanics and Two-Line Element (TLE) data to predict 
                  satellite positions with high accuracy. Real-time conjunction analysis helps prevent 
                  costly collisions and ensures space sustainability.
                </p>
                <p className="font-semibold text-foreground">
                  Join operators, researchers, and space enthusiasts in making space safer.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Create an account and start tracking satellites in minutes
            </p>
            <Link to="/auth">
              <Button variant="hero" size="lg">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
