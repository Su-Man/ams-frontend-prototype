import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const UserGuide = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">📘 User Guide</h1>

      <Card>
        <CardHeader>
          <CardTitle>🔊 Uploading Call Recordings</CardTitle>
          <CardDescription>
            You can upload MP3 files to analyze call quality and generate summaries.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Click on <Badge variant="default">Upload</Badge> in the sidebar to get started.
          </p>
          <p>
            Choose between:
            <ul className="list-disc ml-6 mt-1 space-y-1 text-sm">
              <li>
                <Badge variant="secondary">Direct Analysis</Badge> — Upload a single MP3 call file.
              </li>
              <li>
                <Badge variant="secondary">Scheduled Upload</Badge> — Upload a folder of call files.
              </li>
            </ul>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Features</CardTitle>
          <CardDescription>What happens after you upload files</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc ml-6 space-y-1 text-sm">
            <li><Badge variant="outline">Speaker Separation</Badge> — Automatically detects and separates caller and agent.</li>
            <li><Badge variant="outline">Performance Scoring</Badge> — Evaluates call quality and gives a score.</li>
            <li><Badge variant="outline">Summarization</Badge> — Generates a quick summary of the conversation.</li>
            <li><Badge variant="outline">Transcription</Badge> — Extracts key text from the calls.</li>
            <li><Badge variant="outline">Progress Emails</Badge> — For scheduled uploads, business emails receive results.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>📨 Scheduled Upload: Email Setup</CardTitle>
          <CardDescription>
            Get automated reports on business performance via email.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          When uploading a folder, you'll be asked to enter your business email. Once the analysis is complete, progress reports will be emailed to you.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>📂 Supported Format</CardTitle>
          <CardDescription>Only the following file type is allowed:</CardDescription>
        </CardHeader>
        <CardContent>
          <Badge variant="destructive">.mp3</Badge>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserGuide
