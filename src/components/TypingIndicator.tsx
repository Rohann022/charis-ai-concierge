export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 py-4">
      <div className="h-3 w-3 animate-bounce rounded-full bg-[#5B1E2D]" />

      <div
        className="h-3 w-3 animate-bounce rounded-full bg-[#5B1E2D]"
        style={{ animationDelay: "0.15s" }}
      />

      <div
        className="h-3 w-3 animate-bounce rounded-full bg-[#5B1E2D]"
        style={{ animationDelay: "0.3s" }}
      />

      <span className="ml-3 text-sm text-gray-500">
        CHARIS is thinking...
      </span>
    </div>
  );
}