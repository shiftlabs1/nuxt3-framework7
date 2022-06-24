<template>
  <f7-page>
    <f7-navbar title="Framework7 Next.js">
      <f7-link panel-open="left">
        <f7-icon
          ios="f7:menu"
          md="material:menu"
        />
      </f7-link>
    </f7-navbar>

    <f7-block strong>
      <p>Welcome to your Framework7 Next.js app!</p>
    </f7-block>
    <f7-block-title>Server-side device detection</f7-block-title>
    <f7-block strong>
      <p>Framework7 Next.js is capable to detect device on server-side (based on device user-agent).</p>
      <p>Current theme is <b>{theme.ios ? 'ios': 'md'}</b></p>
    </f7-block>
    <f7-block-title>Routing</f7-block-title>
    <f7-list>
      <f7-list-item
        link="/about"
        title="About"
      />
      <f7-list-item
        link="/blog/45"
        title="Dynamic route"
      />
    </f7-list>
  </f7-page>
</template>
