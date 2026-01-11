import { Helmet } from 'react-helmet-async'
import { CheckCircle, XCircle } from 'lucide-react'

export default function Diagnostics() {
  const checks: { name: string; status: boolean; value?: string }[] = [
    {
      name: 'React Mounted',
      status: typeof window !== 'undefined' && document.getElementById('root') !== null,
      value: 'OK',
    },
    {
      name: 'Router Active',
      status: typeof window !== 'undefined' && window.location.pathname === '/__diagnostics',
      value: typeof window !== 'undefined' ? window.location.pathname : 'N/A',
    },
  ]

  return (
    <>
      <Helmet>
        <title>System Diagnostics - Judah Health Care Services</title>
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-primary-blue mb-6">System Diagnostics</h1>
            <p className="text-gray-600 mb-8">
              This page helps diagnose issues with the application. All checks should pass.
            </p>

            <div className="space-y-4 mb-8">
              {checks.map((check, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {check.status ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                    <span className="font-semibold text-gray-900">{check.name}</span>
                  </div>
                  {check.value && (
                    <span className="text-sm text-gray-600">{check.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-primary-blue mb-4">Environment Info</h2>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">User Agent:</span>
                  <span className="text-sm text-gray-900 font-mono">
                    {typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 50) + '...' : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current URL:</span>
                  <span className="text-sm text-gray-900 font-mono">
                    {typeof window !== 'undefined' ? window.location.href : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Base URL:</span>
                  <span className="text-sm text-gray-900 font-mono">
                    {typeof window !== 'undefined' ? window.location.origin : 'N/A'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex gap-4">
                <a href="/" className="btn-primary">
                  Go to Home
                </a>
                <button
                  onClick={() => window.location.reload()}
                  className="btn-outline"
                >
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
