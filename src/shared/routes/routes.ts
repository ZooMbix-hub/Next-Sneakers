export const ROUTES = {
  main: '/',
  deferred: '/deferred',
  profile: '/profile',
  basket: '/basket',
  product: (alias: string) => `/product/${alias}`
} as const;