/**
 * @see {@link https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-registerblocktype}
 */
export const hook = 'blocks.registerBlockType'

/**
 * Filter handle
 */
export const name = 'sage/button'

/**
 * Filter callback
 */
export function callback(settings: object, name: string) {
  if (name !== 'core/button') return settings

  return {
    ...settings,
    styles: [{label: 'Outline', name: 'outline'}],
  }
}
