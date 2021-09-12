import { ErrorFallback } from 'components/shared/ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  },
})

const AppProviders: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <React.Suspense fallback={null}>{children}</React.Suspense>
          </ErrorBoundary>
        </Switch>
      </Router>
    </QueryClientProvider>
  )
}

export default AppProviders
