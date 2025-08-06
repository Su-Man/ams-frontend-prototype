import { StatsCard } from "./StatsCard";
import { FileAudio, Clock, TrendingUp, Brain } from "lucide-react";

export function QuickStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Calls"
        value="1,247"
        change={{ value: 12.5, type: "increase" }}
        icon={<FileAudio className="w-4 h-4" />}
      />
      <StatsCard
        title="Processing Time"
        value="2.3 min"
        change={{ value: -8.2, type: "decrease" }}
        icon={<Clock className="w-4 h-4" />}
      />
      <StatsCard
        title="Positive Sentiment"
        value="68%"
        change={{ value: 4.1, type: "increase" }}
        icon={<TrendingUp className="w-4 h-4" />}
      />
      <StatsCard
        title="AI Accuracy"
        value="94.7%"
        change={{ value: 2.3, type: "increase" }}
        icon={<Brain className="w-4 h-4" />}
      />
    </div>
  );
}