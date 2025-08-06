import { CallCard } from "./CallCard";

// Mock data for demonstration
const mockCalls = [
  {
    id: "1",
    title: "Customer Support Call #1247",
    duration: "12:34",
    speakers: 2,
    sentiment: "positive" as const,
    emotions: ["confident", "satisfied", "calm"],
    transcriptPreview: "Thank you for calling. I understand you're having trouble with your account setup. Let me help you with that right away...",
    uploadDate: "2 hours ago",
  },
  {
    id: "2",
    title: "Sales Discovery Call - TechCorp",
    duration: "45:12",
    speakers: 3,
    sentiment: "neutral" as const,
    emotions: ["curious", "analytical", "cautious"],
    transcriptPreview: "We're looking for a solution that can scale with our growing team. Can you tell me more about your enterprise features...",
    uploadDate: "1 day ago",
  },
  {
    id: "3",
    title: "Client Feedback Session",
    duration: "28:45",
    speakers: 4,
    sentiment: "negative" as const,
    emotions: ["frustrated", "disappointed", "concerned"],
    transcriptPreview: "We've been experiencing several issues with the platform. The response times have been unacceptable and...",
    uploadDate: "2 days ago",
  },
  {
    id: "4",
    title: "Product Demo - StartupXYZ",
    duration: "22:18",
    speakers: 2,
    sentiment: "positive" as const,
    emotions: ["excited", "interested", "optimistic"],
    transcriptPreview: "This looks amazing! The AI features you've shown are exactly what we need for our customer service team...",
    uploadDate: "3 days ago",
  },
];

export function RecentCalls() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">Recent Calls</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {mockCalls.map((call) => (
          <CallCard key={call.id} {...call} />
        ))}
      </div>
    </div>
  );
}