import { Button } from "@/components/ui/button";
import { Upload, Play, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-audio-ai.jpg";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Audio Analysis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transform Audio with{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced audio analysis platform powered by cutting-edge AI. 
            Get insights from conversations with transcription, sentiment analysis, 
            and intelligent summaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary hover-glow">
              <Upload className="w-5 h-5 mr-2" />
              Start Analyzing
            </Button>
            <Button size="lg" variant="outline" className="glass-card">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.2%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">2.3min</div>
              <div className="text-sm text-muted-foreground">Avg Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}