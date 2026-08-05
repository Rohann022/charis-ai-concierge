export default function PreparingRecommendations() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F5F2]">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">

        <h2 className="text-3xl font-bold">
          Preparing Your Luxury Gifts
        </h2>

        <p className="mt-3 text-gray-500">
          CHARIS is carefully selecting meaningful gifts.
        </p>

        <div className="mt-8 space-y-4">

          <div>✓ Understanding the recipient...</div>

          <div>✓ Analysing emotional intent...</div>

          <div>✓ Matching luxury products...</div>

          <div>✓ Preparing recommendations...</div>

        </div>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-3/4 animate-pulse rounded-full bg-[#5B1E2D]" />
        </div>

      </div>
    </div>
  );
}