import { ArrowRight } from './icons/ArrowRight';
import { Basket } from './icons/Basket';
import { Check } from './icons/Check';
import { ChevronLeft } from './icons/ChevronLeft';
import { Heart } from './icons/Heart';
import { HeartFill } from './icons/HeartFill';
import { Plus } from './icons/Plus';
import { Profile } from './icons/Profile';
import { Search } from './icons/Search';

export const Icon = {
  Basket,
  Profile,
  Search,
  Plus,
  Heart,
  HeartFill,
  Check,
  ArrowRight,
  ChevronLeft
};

export type IconType = keyof typeof Icon;

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}