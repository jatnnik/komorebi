import { useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, TextControl } from '@wordpress/components'

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps()

  console.log({ attributes })

  return (
    <>
      <InspectorControls>
        <PanelBody title="Einstellungen">
          <TextControl
            label="Titel"
            value={attributes.title}
            onChange={(value) => setAttributes({ title: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div className="komorebi-example-block py-24 bg-sky-600 text-white text-center">
          <h2 className="font-semibold text-4xl">{attributes.title}</h2>
        </div>
      </div>
    </>
  )
}
