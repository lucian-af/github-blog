/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BLOG_USER_DEFAULT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
