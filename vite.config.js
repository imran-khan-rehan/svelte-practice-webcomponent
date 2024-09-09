// import { defineConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
// })
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'; // Correct import

export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true, // Enable Web Component support
    }
  })],
  build: {
    lib: {
      entry: './src/main.js', // Adjust according to your entry point
      name: 'MyComponent',
      fileName: (format) => `my-component.${format}.js`,
    },
    // rollupOptions: {
    //   // Externalize dependencies that shouldn’t be bundled into your library
    //   external: ['svelte'],
    //   output: {
    //     globals: {
    //       svelte: 'svelte',
    //     },
    //   },
    // },
  },
});
