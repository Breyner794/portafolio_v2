'use client';

import { useState, useEffect } from 'react';

export function useResponsiveSquares() {
  const [squareSize, setSquareSize] = useState(40);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      // Fórmula que calcula el tamaño basado en el ancho de pantalla
      // Mínimo 20px, máximo 50px
      const newSize = Math.max(20, Math.min(50, Math.floor(width / 30)));
      setSquareSize(newSize);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return squareSize;
}