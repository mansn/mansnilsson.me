import 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    popoverTarget?: string
    popoverTrigger?: 'hover' | 'focus'
    popoverPlacement?: 'top' | 'right' | 'bottom' | 'left'
    popover?: string
  }
}
