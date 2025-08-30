import cn from 'classnames';
import s from './Typography.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'bodyLarge' | 'body' | 'caption';
type TypographyColor = 'gray0' | 'gray1' | 'gray2' | 'gray3' | 'green' | 'black' | 'white' | 'danger1';
type TypographyWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
}

export function Typography(props: TypographyProps) {
  const {
    children,
    variant = 'body',
    color = 'black',
    weight = 'regular'
  } = props;

  return (
    <span className={cn(s[variant], s[weight], s[color])}>
      {children}
    </span>
  );
}
