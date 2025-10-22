'use client';
import React from 'react';
import Lottie from 'lottie-react';
import scrollAnimationData from '@/assets/lottie/scrollDown.json'; 

interface AnimatedScrollDownProps {
  size?: number; 
}

const AnimatedScrollDown: React.FC<AnimatedScrollDownProps> = ({ size = 50 }) => {
  
  return (

    
    <Lottie
      animationData={scrollAnimationData} 
      loop={true}
      autoplay={true}
      style={{ width: size, height: size, cursor: 'pointer' }}
    />
    
  );
};

export default AnimatedScrollDown;