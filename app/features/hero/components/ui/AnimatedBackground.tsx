import { DiagonalStripes } from "./DiagonalStripes";
import { FloatingShapes } from "./FloatingShapes";

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Diagonal stripes - P5 signature look */}
      <DiagonalStripes />

      {/* Animated floating shapes */}
      <FloatingShapes />
    </div>
  );
};
