export const pagesPath = {
  graphqlTest: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/graphqlTest' as const,
      hash: url?.hash,
    }),
  },
  posts: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: '/posts/[id]' as const,
        query: { id },
        hash: url?.hash,
      }),
    }),
    $url: (url?: { hash?: string }) => ({
      pathname: '/posts' as const,
      hash: url?.hash,
    }),
  },
  rendering: {
    sg: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/rendering/sg' as const,
        hash: url?.hash,
      }),
    },
    ssr: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/rendering/ssr' as const,
        hash: url?.hash,
      }),
    },
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  mockServiceWorker_js: '/mockServiceWorker.js',
  vercel_svg: '/vercel.svg',
} as const

export type StaticPath = typeof staticPath
