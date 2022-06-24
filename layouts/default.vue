<script setup lang="ts">
import { getDevice } from 'framework7/lite-bundle'
import type { Device } from 'framework7/types'
import { routes } from '@/lib'
const device: Device = getDevice()
const variables = useRuntimeConfig()?.public

// const hostUrl = `${variables.hostUrl}/`
const hostUrl = 'http://localhost:3000/'

// eslint-disable-next-line no-console
console.log(hostUrl)

const f7params = {
  routes,
  name: 'StokVest',
  theme: 'auto',
  id: 'io.stokvest.mobile',
  // routes,
  input: {
    scrollIntoViewOnFocus: device.capacitor,
    scrollIntoViewCentered: device.capacitor,
  },
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  url: hostUrl,
}

onMounted(() => {
  if (process.client) {
    const html = document.documentElement
    if (html) {
      html.style.setProperty('--f7-safe-area-top', '44px')
      html.style.setProperty('--f7-safe-area-bottom', '34px')
    }
  }
})
</script>

<template>
  <f7-app v-bind="f7params">
    <f7-panel
      left
      reveal
    >
      <!-- <client-only>
        <f7-view url="/left-panel" />
      </client-only> -->
      <f7-view url="/left-panel" />
    </f7-panel>
    <!-- <client-only>
      <f7-view
        main
        class="safe-areas"
        :browser-history="true"
        url="/"
        browser-history-separator=""
      />
    </client-only> -->
    <f7-view
      main
      class="safe-areas"
      :browser-history="true"
      url="/"
      browser-history-separator=""
    />
    <!-- <slot /> -->
  </f7-app>
</template>
