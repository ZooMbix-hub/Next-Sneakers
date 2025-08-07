export interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  color: string;
  sizes: string[];
  gender: 'men' | 'women' | 'unisex' | 'kids';
  category: 'running' | 'basketball' | 'lifestyle' | 'football' | 'skateboarding' | 'tennis' | 'training' | 'walking';
  material: 'combination' |  'nubuck' | 'synthetic' | 'suede' |  'rubber';
  discount: number;
  image_urls: string[];
}