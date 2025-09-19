import { ArrowRight } from './icons/ArrowRight';
import { ArrowLeft } from './icons/ArrowLeft';
import { Basket } from './icons/Basket';
import { Check } from './icons/Check';
import { ChevronLeft } from './icons/ChevronLeft';
import { Heart } from './icons/Heart';
import { HeartFill } from './icons/HeartFill';
import { Plus } from './icons/Plus';
import { Profile } from './icons/Profile';
import { Search } from './icons/Search';
import { Close } from './icons/Close';
import { Key } from './icons/Key';
import { Mail } from './icons/Mail';
import { Eye } from './icons/Eye';
import { EyeSlash } from './icons/EyeSlash';

export const Icon = {
  Basket,
  Profile,
  Search,
  Plus,
  Heart,
  HeartFill,
  Check,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  Close,
  Key,
  Mail,
  Eye,
  EyeSlash
};

export type IconType = keyof typeof Icon;

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}