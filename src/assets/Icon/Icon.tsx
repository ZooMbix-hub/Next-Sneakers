import { Basket } from './icons/Basket';
import { Defferred } from './icons/Deferred';
import { Profile } from './icons/Profile';

export const Icon = {
  Basket,
  Defferred,
  Profile
};

export type IconType = keyof typeof Icon;

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}