import type { ComponentType } from 'react'
import InlineCode from './InlineCode'
import CodeBlock from './CodeBlock'

interface MdxComponentsProps {
  AnchorOrLink: ComponentType<any>
}

export default function MdxComponents({
  AnchorOrLink,
}: MdxComponentsProps): any {
  return {
    a: AnchorOrLink,
    code: (props: any) => {
      const isInline = !props.className?.includes('language-')
      if (isInline) {
        return <InlineCode {...props} />
      }
      return <CodeBlock><code>{props.children}</code></CodeBlock>
    },
  }
}
