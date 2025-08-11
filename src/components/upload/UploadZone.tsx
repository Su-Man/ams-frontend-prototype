import { useCallback, useRef, useState } from "react";
import { Upload, FileAudio, X, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface UploadFile {
  id: string;
  name: string;
  size: number;
  progress: number;
  status: "uploading" | "processing" | "completed" | "error";
}

export function UploadZone() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files)
        .filter((file) => file.type === "audio/mpeg") // only mp3 files
        .map((file) => ({
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          progress: 0,
          status: "uploading" as const,
        }));
      if (newFiles.length > 0) {
        setFiles((prev) => [...prev, ...newFiles]);
        newFiles.forEach((file) => simulateUpload(file.id));
      }
    }
  }, []);

  // Handle file input selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
        .filter((file) => file.type === "audio/mpeg") // only mp3 files
        .map((file) => ({
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          progress: 0,
          status: "uploading" as const,
        }));
      if (newFiles.length > 0) {
        setFiles((prev) => [...prev, ...newFiles]);
        newFiles.forEach((file) => simulateUpload(file.id));
      }
      // Reset input so the same file can be selected again if needed
      e.target.value = "";
    }
  };

  const simulateUpload = (fileId: string) => {
    const interval = setInterval(() => {
      setFiles((prev) =>
        prev.map((file) => {
          if (file.id === fileId) {
            const newProgress = Math.min(file.progress + Math.random() * 20, 100);
            if (newProgress === 100) {
              clearInterval(interval);
              return { ...file, progress: 100, status: "processing" };
            }
            return { ...file, progress: newProgress };
          }
          return file;
        })
      );
    }, 500);

    setTimeout(() => {
      setFiles((prev) =>
        prev.map((file) =>
          file.id === fileId ? { ...file, status: "completed" } : file
        )
      );
    }, 8000);
  };

  const removeFile = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getStatusColor = (status: UploadFile["status"]) => {
    switch (status) {
      case "uploading":
        return "text-primary";
      case "processing":
        return "text-warning";
      case "completed":
        return "text-success";
      case "error":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: UploadFile["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "error":
        return <X className="w-4 h-4 text-destructive" />;
      default:
        return <FileAudio className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card
        className={cn(
          "glass-card border-2 border-dashed transition-all duration-200",
          dragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-primary/50"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg gradient-primary mb-4">
            <Upload className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Upload Audio Files
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop your audio files here, or click to browse
          </p>

          {/* Hidden file input */}
          <input
            type="file"
            accept=".mp3"
            multiple
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <Button
            variant="outline"
            className="mb-4"
            onClick={() => fileInputRef.current?.click()}
          >
            Select Files
          </Button>

          <p className="text-xs text-muted-foreground">
            Supports MP3, WAV, M4A files up to 500MB each
          </p>
        </CardContent>
      </Card>

      {files.length > 0 && (
        <Card className="glass-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Upload Progress
            </h3>
            <div className="space-y-4">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/20"
                >
                  <div className="flex-shrink-0">{getStatusIcon(file.status)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-foreground truncate">
                        {file.name}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(file.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span>{formatFileSize(file.size)}</span>
                      <span>•</span>
                      <span className={getStatusColor(file.status)}>
                        {file.status === "uploading" && "Uploading..."}
                        {file.status === "processing" && "Processing with AI..."}
                        {file.status === "completed" && "Analysis Complete"}
                        {file.status === "error" && "Upload Failed"}
                      </span>
                    </div>
                    {file.status !== "completed" && file.status !== "error" && (
                      <Progress value={file.progress} className="h-2" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
