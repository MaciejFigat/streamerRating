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
  //? ErrorBoundary is being set up to use a fallbackRender instead of a FallbackComponent. That's why it's undefined
  //* ErrorBoundary's fallbackRender function is responsible for rendering the fallback UI when an error occurs
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
