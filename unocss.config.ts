import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
    ['next-button', 'font-semibold my-2 mx-2 text-xl py-6 text-light-500 capitalize'],
    [
      'back-button',
      'capitalize bg-white border-solid font-semibold border-dark-900 border-1  mx-2 py-3 text-xl text-black',
    ],
    ['swiper-container', 'text-center items-center align-middle box-border'],
    ['slide-content', 'grid grid-cols-1 justify-items-center'],
    [
      'header-text',
      'bg-gradient-to-r bg-clip-text font-extrabold mx-10 mt-10 text-transparent mb-4 text-5xl',
    ],
    ['form-label', 'font-medium text-sm  text-gray-900 dark:(text-gray-100) hover:text-gray-500'],
    ['form-hint', 'mt-2 text-sm text-red-600!'],
    ['notification-error', '!text-red-800'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
