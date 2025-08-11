import { UploadCallFolder } from "@/components/upload/UploadCallFolder";

export default function UploadCallsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Upload Call Recordings</h1>
      <UploadCallFolder />
    </div>
  );
}
