/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BLOG_USER_DEFAULT: string;
  readonly BLOG_REPO_DEFAULT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
