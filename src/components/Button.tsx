import {Button as ShadButton} from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface ButtonProps {
  variant: 'primary' | 'secondary';
  loading: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({variant, loading, onClick, children}: ButtonProps) => {
  const btnClasses = cn('rounder py-2 px-8 flex justify-center items-center', {
    'bg-[#C9DD49] text-[#314A43]': variant === 'primary',
    'bg-[#1880A0] border border-[#028083] text-white': variant === 'secondary',
  })

  return (
    <ShadButton className={btnClasses} onClick={onClick}>
      {loading ? 'loading' : children}
    </ShadButton>
  )
}
