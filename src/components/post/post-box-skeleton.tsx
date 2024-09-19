export default function PostBoxSkeleton() {
  return (
    <div className="w-full border-b p-4 mb-4 animate-pulse">
      {/* Header Section */}
      <div className="flex items-center space-x-4">
        {/* Placeholder for avatar */}
        <div className="w-12 h-12 rounded-full bg-border"></div>
        {/* Placeholder for name and timestamp */}
        <div className="flex-1 space-y-2">
          <div className="w-24 h-4 bg-border rounded"></div>
          <div className="w-16 h-3 bg-border rounded"></div>
        </div>
      </div>

      {/* Body Section */}
      <div className="mt-3 space-y-2">
        <div className="w-full h-4 bg-border rounded"></div>
        <div className="w-full h-4 bg-border rounded"></div>
        <div className="w-2/3 h-4 bg-border rounded"></div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-48 bg-border rounded mt-4"></div>

      {/* Action Buttons Placeholder */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-4">
          <div className="w-12 h-4 bg-border rounded"></div>
          <div className="w-16 h-4 bg-border rounded"></div>
        </div>
        <div className="flex space-x-2">
          <div className="w-12 h-4 bg-border rounded"></div>
          <div className="w-12 h-4 bg-destructive rounded"></div>
        </div>
      </div>
    </div>
  );
}
