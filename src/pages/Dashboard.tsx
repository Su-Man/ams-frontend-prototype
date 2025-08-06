import { QuickStats } from "@/components/dashboard/QuickStats";
import { RecentCalls } from "@/components/dashboard/RecentCalls";
import { HeroSection } from "@/components/hero/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Upload, Search, TrendingUp, AlertCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats */}
      <QuickStats />

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Calls - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RecentCalls />
        </div>

        {/* Sidebar with additional info */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Upload className="w-4 h-4 mr-2" />
                Bulk Upload
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Search className="w-4 h-4 mr-2" />
                Semantic Search
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Processing Status */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Processing Queue</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active jobs</span>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  3 running
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span>Call #1249 - Transcribing</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-warning animate-pulse"></div>
                  <span>Call #1248 - Analyzing sentiment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span>Call #1246 - Generating summary</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                System Health
                <div className="w-2 h-2 rounded-full bg-success"></div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">API Status</span>
                <Badge variant="outline" className="bg-success/10 text-success">
                  Operational
                </Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Processing Speed</span>
                <span className="font-medium">2.3x faster</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Storage Used</span>
                <span className="font-medium">45.2 GB / 100 GB</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}