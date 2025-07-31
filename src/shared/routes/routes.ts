export const ROUTES = {
  main: '/',
  deferred: '/deferred',
  profile: '/profile',
  basket: '/basket',
  product: (alias: number) => `/product/${alias}`
} as const;