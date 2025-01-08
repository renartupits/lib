import {Button as ShadButton} from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({variant = 'primary', loading, onClick, children}: ButtonProps) => {
  const btnClasses = cn('rounder py-2 px-8 flex justify-center items-center', {
    'bg-[#C9DD49] hover:bg-[#2d641c] text-[#314A43]': variant === 'primary',
    'bg-[#1880A0] hover:bg-[#a6b0cf] border border-[#028083] text-white': variant === 'secondary',
  })

  return (
    <ShadButton className={btnClasses} onClick={onClick}>
      {loading ? 'loading...' : children}
    </ShadButton>
  )
}
