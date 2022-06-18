Source: https://github.com/omnisyle/vite-svelte-ts-tailwind

# What is in the Stack

* Svelte
* Typescript
* TailwindCSS
* SCSS
* Font awesome
* i18n
* Vite

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
import { writable } from 'svelte/store'
export default writable(0)
```

