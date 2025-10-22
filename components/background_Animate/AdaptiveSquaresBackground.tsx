'use client';

import Squares from "@/components/background_Animate/Squares_Background";
import { useResponsiveSquares } from "@/hooks/useResponsiveSquares";

export default function AdaptiveSquaresBackground() {
  const squareSize = useResponsiveSquares();

  return (
    <Squares
      speed={0.2}
      squareSize={squareSize}
      direction='diagonal'
      borderColor='#000000ff'
      hoverFillColor='#222'
    />
  );
}