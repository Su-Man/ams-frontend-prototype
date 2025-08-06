import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Users, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

interface CallCardProps {
  id: string;
  title: string;
  duration: string;
  speakers: number;
  sentiment: "positive" | "neutral" | "negative";
  emotions: string[];
  transcriptPreview: string;
  uploadDate: string;
  className?: string;
}

const sentimentConfig = {
  positive: { color: "bg-success text-success-foreground", label: "Positive" },
  neutral: { color: "bg-muted text-muted-foreground", label: "Neutral" },
  negative: { color: "bg-destructive text-destructive-foreground", label: "Negative" },
};

export function CallCard({
  id,
  title,
  duration,
  speakers,
  sentiment,
  emotions,
  transcriptPreview,
  uploadDate,
  className,
}: CallCardProps) {
  return (
    <Card className={cn("glass-card hover-lift hover-glow", className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{uploadDate}</p>
          </div>
          <Badge
            className={cn(
              "ml-2",
              sentimentConfig[sentiment].color
            )}
          >
            {sentimentConfig[sentiment].label}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {speakers} speakers
          </div>
        </div>

        {emotions.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {emotions.slice(0, 3).map((emotion) => (
              <Badge
                key={emotion}
                variant="outline"
                className="text-xs border-accent/30 text-accent"
              >
                {emotion}
              </Badge>
            ))}
            {emotions.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{emotions.length - 3} more
              </Badge>
            )}
          </div>
        )}

        <p className="text-sm text-muted-foreground line-clamp-2">
          {transcriptPreview}
        </p>

        <div className="flex gap-2">
          <Button size="sm" variant="default" className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            Play
          </Button>
          <Button size="sm" variant="outline" className="flex items-center gap-2">
            <BarChart className="w-4 h-4" />
            Analyze
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}