# nuxt 3 issue with pnpm

https://github.com/nuxt/nuxt/issues/30461

How to reproduce the error

```
[12:37:45 PM]  ERROR  Pre-transform error: Failed to resolve import "#app-manifest" from "../../node_modules/.pnpm/nuxt@3.20.1_@parcel+watcher@2.5.1_@types+node@22.19.1_@vue+compiler-sfc@3.5.25_db0@0.3._c9be4d3bb8779fc906d309df7d9a82f5/node_modules/nuxt/dist/app/composables/manifest.js?v=4d7d7be4". Does the file exist?
  Plugin: vite:import-analysis
  File: /projects/tmp/nuxt-test/node_modules/.pnpm/nuxt@3.20.1_@parcel+watcher@2.5.1_@types+node@22.19.1_@vue+compiler-sfc@3.5.25_db0@0.3._c9be4d3bb8779fc906d309df7d9a82f5/node_modules/nuxt/dist/app/composables/manifest.js?v=4d7d7be4:13:22
  11 |    }
  12 |    if (false) {
  13 |      manifest = import("#app-manifest");
     |                        ^
  14 |    } else {
  15 |      manifest = $fetch(buildAssetsURL(builds/meta/${useRuntimeConfig().app.buildId}.json), {
```

Steps:
* clone project
* run `pnpm install`
* run `pnpm dev`
* stop previous command
* run `pnpm install`
* run `pnpm dev`
