import { ComponentType, ReactNode } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

interface ErrorMessage {
  name: string
  message: string
}

interface PlaceholderProps {
  errorMessage: ErrorMessage
  resetFunction: () => void
}

interface ListItemErrorBoundaryProps {
  children: ReactNode
  placeholder: ComponentType<PlaceholderProps>
}

export function ListItemErrorBoundary ({
  children,
  placeholder: Placeholder
}: ListItemErrorBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={undefined}
      fallbackRender={({ error, resetErrorBoundary }: FallbackProps) => (
        <Placeholder
          errorMessage={{ name: error.name, message: error.message }}
          resetFunction={resetErrorBoundary}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  )
}
