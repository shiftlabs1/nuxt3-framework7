<script lang="ts" setup>
const props = defineProps<{
  f7router: any
  f7route: any
  postId: number
}>()
const { f7router, f7route, postId } = $(props)
</script>

<template>
  <f7-page>
    <f7-navbar title="Post" back-link="Back" />
    <f7-block strong>
      <p>This is a dynamic route loaded from <code>/blog/[postId].js</code> page component.</p>
      <p>Route URL: <b>{f7route.url}</b></p>
      <p>Post ID: <b>{postId}</b></p>
    </f7-block>
  </f7-page>
</template>
