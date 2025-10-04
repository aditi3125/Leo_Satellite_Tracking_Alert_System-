import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Satellite, LogOut, Bell } from "lucide-react";
import EarthVisualization from "@/components/EarthVisualization";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate("/auth");
      }
    } catch (error) {
      console.error("Error checking user:", error);
      navigate("/auth");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen stars-bg flex items-center justify-center">
        <div className="text-center">
          <Satellite className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen stars-bg">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Satellite Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.email}</p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glass p-6 hover:glow-primary transition-all">
            <Satellite className="w-8 h-8 text-primary mb-2" />
            <h3 className="text-2xl font-bold">0</h3>
            <p className="text-sm text-muted-foreground">Tracked Satellites</p>
          </Card>

          <Card className="glass p-6 hover:glow-secondary transition-all">
            <Bell className="w-8 h-8 text-secondary mb-2" />
            <h3 className="text-2xl font-bold">0</h3>
            <p className="text-sm text-muted-foreground">Active Alerts</p>
          </Card>

          <Card className="glass p-6 hover:glow-accent transition-all">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mb-2">
              <span className="text-accent font-bold">!</span>
            </div>
            <h3 className="text-2xl font-bold">0</h3>
            <p className="text-sm text-muted-foreground">Conjunctions Detected</p>
          </Card>
        </div>

        {/* 3D Earth Visualization */}
        <Card className="glass p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Real-time Satellite Tracking</h2>
          <div className="h-[500px] rounded-lg overflow-hidden bg-background/50">
            <EarthVisualization />
          </div>
        </Card>

        {/* Coming Soon Features */}
        <Card className="glass p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">More Features Coming Soon</h2>
          <p className="text-muted-foreground mb-4">
            The full satellite tracking workflow is under development. Soon you'll be able to:
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-2 text-muted-foreground">
            <li>• Add and manage custom satellites with TLE data</li>
            <li>• View real-time orbital predictions</li>
            <li>• Receive conjunction alerts via WebSocket</li>
            <li>• Analyze close approaches with detailed metrics</li>
            <li>• Export tracking data and reports</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
