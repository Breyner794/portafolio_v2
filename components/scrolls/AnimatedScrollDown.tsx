'use client';
import React from 'react';
import Lottie from 'lottie-react';
import scrollAnimationData from '@/assets/lottie/scrollDown.json'; 

interface AnimatedScrollDownProps {
  size?: number;
  targetSection?: string;
}

const AnimatedScrollDown: React.FC<AnimatedScrollDownProps> = ({ size = 50, targetSection = '#acerca-de-mi' }) => {
  
  return (

    <a href={targetSection} className="cursor-pointer">
      <Lottie
        animationData={scrollAnimationData} 
        loop={true}
        autoplay={true}
        style={{ width: size, height: size }}
      />
    </a>
    
  );
};

export default AnimatedScrollDown;