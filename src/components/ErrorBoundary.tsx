import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      const error = this.state.error
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-primary-blue mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {error && (
              <details className="mt-4 text-left" open>
                <summary className="cursor-pointer text-sm font-semibold text-gray-700 mb-2">
                  Error details
                </summary>
                <div className="mt-2 space-y-2">
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <p className="text-sm font-semibold text-red-800 mb-1">Error Message:</p>
                    <p className="text-sm text-red-700 font-mono">{error.message}</p>
                  </div>
                  {error.stack && (
                    <div className="bg-gray-100 rounded p-3">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Stack Trace:</p>
                      <pre className="text-xs text-gray-600 overflow-auto max-h-64">
                        {error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined })}
                className="btn-outline"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
