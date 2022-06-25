// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    trailingSlash: 'always',
    adapter: adapter(),

    prerender: {
      default: true
    }
  }
};