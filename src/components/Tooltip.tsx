import {Tooltip as ShadTooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from '@/components/ui/tooltip'
import React, {ReactNode} from 'react';

interface TooltipProps {
  variant: 'primary' | 'secondary';
  children: ReactNode;
}

export const Tooltip = ({variant, children}: TooltipProps) => {
  console.log('Variant', variant)

  return (
    <TooltipProvider>
      <ShadTooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </ShadTooltip>
    </TooltipProvider>
  )
}
