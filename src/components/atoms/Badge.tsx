// components/atoms/Badge.tsx
import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  gap?: string; // Untuk mengatur jarak antara ikon dan teks
}

export const Badge = ({ 
  children, 
  className = "", 
  gap = "gap-2" 
}: BadgeProps) => {
  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {children}
    </div>
  );
};