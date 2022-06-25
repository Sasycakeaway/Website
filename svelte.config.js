// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
export default {
  kit: {
    vite: {
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd()),'/Users/andreacanale/Desktop/my-app/static/components/']
      }
    },
    trailingSlash: 'always',
    adapter: adapter(),

    prerender: {
      default: true
    }
  }
};