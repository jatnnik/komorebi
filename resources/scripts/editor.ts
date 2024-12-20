/**
 * @see {@link https://bud.js.org/extensions/bud-preset-wordpress/editor-integration/filters}
 */
// @ts-ignore
roots.register.filters('@scripts/filters')
// @ts-ignore
roots.register.blocks('@scripts/blocks')

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
// @ts-ignore
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error)
