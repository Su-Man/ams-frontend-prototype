import { UploadZone } from "@/components/upload/UploadZone";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, HelpCircle, Zap } from "lucide-react";

export default function Upload() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Upload Audio Files</h1>
          <p className="text-muted-foreground">
            Upload your call recordings for AI-powered analysis and insights
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Processing Settings
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Upload Area */}
        <div className="lg:col-span-2">
          <UploadZone />
        </div>

        {/* Sidebar with info and settings */}
        <div className="space-y-6">
          {/* Processing Pipeline */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                AI Processing Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-medium">Audio Processing</p>
                    <p className="text-xs text-muted-foreground">Noise reduction & segmentation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-medium">Speaker Diarization</p>
                    <p className="text-xs text-muted-foreground">Identify different speakers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-medium">Transcription</p>
                    <p className="text-xs text-muted-foreground">Speech-to-text conversion</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sentiment Analysis</p>
                    <p className="text-xs text-muted-foreground">Emotion & sentiment detection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <p className="text-sm font-medium">LLM Summary</p>
                    <p className="text-xs text-muted-foreground">AI-generated insights</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* File Requirements */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">File Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">Formats</p>
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-xs">MP3</Badge>
                    <Badge variant="outline" className="text-xs">WAV</Badge>
                    <Badge variant="outline" className="text-xs">M4A</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-foreground">Size Limit</p>
                  <p className="text-muted-foreground">500MB max</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Quality Tips</p>
                <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                  <li>• Clear audio improves accuracy</li>
                  <li>• Minimize background noise</li>
                  <li>• 16kHz+ sample rate recommended</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Help */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-accent" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                View Documentation
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                Contact Support
              </Button>
              <div className="text-xs text-muted-foreground">
                Average processing time: <span className="font-medium">2-3 minutes</span> per call
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}