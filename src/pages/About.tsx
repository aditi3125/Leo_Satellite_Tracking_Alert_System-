import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Users, Target, Code, Rocket } from "lucide-react";

const About = () => {
  const team = [
    {
      role: "Project Lead",
      description: "Orbital mechanics expert with 10+ years in satellite tracking",
      icon: Rocket,
    },
    {
      role: "Algorithm Developer",
      description: "Specializes in conjunction detection and collision avoidance",
      icon: Target,
    },
    {
      role: "Software Engineer",
      description: "Full-stack developer building real-time tracking systems",
      icon: Code,
    },
    {
      role: "Data Analyst",
      description: "Analyzes TLE data and validates orbital predictions",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen stars-bg">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About LEO Tracker
          </h1>
          <p className="text-xl text-muted-foreground">
            Advanced satellite tracking and conjunction detection platform
          </p>
        </div>

        {/* Mission */}
        <Card className="glass p-8 md:p-12 max-w-4xl mx-auto mb-12 animate-scale-in">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="text-primary" />
            Our Mission
          </h2>
          <p className="text-muted-foreground mb-4">
            We're dedicated to making space safer through advanced orbital mechanics and real-time 
            satellite tracking. Our platform combines cutting-edge algorithms with intuitive visualizations 
            to help operators, researchers, and enthusiasts monitor LEO satellites.
          </p>
          <p className="text-muted-foreground">
            By providing accurate position predictions and timely conjunction alerts, we contribute to 
            sustainable space operations and collision avoidance in an increasingly crowded orbital environment.
          </p>
        </Card>

        {/* Technology Stack */}
        <Card className="glass p-8 md:p-12 max-w-4xl mx-auto mb-12 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code className="text-secondary" />
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-primary">Frontend</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• React + TypeScript</li>
                <li>• Three.js for 3D visualizations</li>
                <li>• Real-time WebSocket updates</li>
                <li>• Responsive Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-secondary">Backend</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Lovable Cloud (Supabase)</li>
                <li>• PostgreSQL database</li>
                <li>• Row-level security</li>
                <li>• Real-time subscriptions</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Team */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="glass p-6 text-center hover:glow-primary transition-all animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <member.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{member.role}</h3>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Objectives */}
        <Card className="glass p-8 md:p-12 max-w-4xl mx-auto mt-12 animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Rocket className="text-accent" />
            Project Objectives
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Provide accurate real-time satellite position tracking using TLE data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Detect and alert on potential satellite conjunctions and close approaches</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Offer intuitive 3D and 2D visualizations for orbital analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Support multiple user roles for operational workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">•</span>
              <span>Maintain a comprehensive database of LEO satellites and TLE sets</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About;
