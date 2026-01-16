"use client" ;
import React, { useState } from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px', // Smooth corners
      border: '1px solid #e5e7eb',
      boxSizing: 'border-box' as const,
      boxShadow: isHovered 
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' // Elevated shadow
        : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // Base shadow
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
  };

  return (
    <div 
      style={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};