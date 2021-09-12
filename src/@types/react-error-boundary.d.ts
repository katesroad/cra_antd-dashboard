declare module 'react-error-boundary' {
  export interface FallbackProps {
    error: Error
    resetErrorBoundary: () => void
  }
  export { ErrorBoundary } from 'react-error-boundary'
}
