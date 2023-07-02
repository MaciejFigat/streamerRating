/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_NODE_ENV: 'development' | 'production' | 'test'
  readonly VITE_PRODUCTION_ENDPOINT: string
  readonly VITE_PRODUCTION_IOENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export { ImportMeta, ImportMetaEnv }
