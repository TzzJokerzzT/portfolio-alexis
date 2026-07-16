export function LoadingSkeleton({
  smGrid,
  lgGrid,
  length,
}: {
  smGrid: string;
  lgGrid: string;
  length: number;
}) {
  return (
    <div
      className={`sm:grid-cols-${smGrid} lg:grid-cols-${lgGrid} mt-16 grid gap-6`}
    >
      {Array.from({ length: length }).map((_, i) => (
        <div
          key={i}
          className="skew-x-[-2deg] animate-pulse bg-white p-5 dark:bg-p5-black"
        >
          <div className="skew-x-[2deg]">
            <div className="mb-5 h-8 w-24 bg-gray-200 dark:bg-gray-800" />
            {Array.from({ length: 6 }).map((_, j) => (
              <div
                key={j}
                className="mb-2 h-6 w-full bg-gray-100 dark:bg-gray-800"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
