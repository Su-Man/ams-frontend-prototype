import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FolderPlus, CheckCircle } from "lucide-react";

export function UploadCallFolder() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileCount, setFileCount] = useState<number | null>(null);

  const handleFolderUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    // Filter only audio files (e.g., mp3, wav, etc.)
    const audioFiles = Array.from(files).filter(file =>
      file.type.startsWith("audio/")
    );

    setFileCount(audioFiles.length);

    // Optional: Upload to backend or process files
    console.log("Audio files uploaded:", audioFiles);
  };

  return (
    <div className="text-center">
      <input
        type="file"
        ref={inputRef}
        multiple
        accept=".mp3,.wav,.m4a"
        onChange={handleFolderUpload}
        className="hidden"
        // @ts-ignore: webkitdirectory is valid for file input
        webkitdirectory="true"
      />

      <Button
        onClick={() => inputRef.current?.click()}
        className="flex items-center gap-2"
      >
        <FolderPlus className="w-5 h-5" />
        Upload Folder
      </Button>

      {fileCount !== null && (
        <div className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          {fileCount} audio file{fileCount !== 1 ? "s" : ""} uploaded
        </div>
      )}
    </div>
  );
}
