import {MouseEventHandler, ReactNode} from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {LucideIcon} from 'lucide-react';

import {cn} from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90',
        outline: 'border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        ghost: '[a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 [a&]:hover:underline',
      },
      state: {
        default: '',
        warning: 'border-warning text-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
      state: 'default',
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children?: ReactNode;

  icon?: LucideIcon;
  size?: 'sm' | 'md';

  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLDivElement>;
  href?: string;
  target?: string;
}

function Badge({className, variant, state, size = 'md', icon: Icon, children, href, ...props}: BadgeProps) {
  const Comp = href ? 'a' : 'div';
  const isClickable = props.onClick || href;

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      href={href}
      className={cn(badgeVariants({variant, state}), className, {
        'px-1.5 text-xs': size === 'sm',
        'px-2 text-sm': size === 'md',
        'hover:cursor-pointer': isClickable,
      })}
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </Comp>
  );
}

export {badgeVariants};
export default Badge;
