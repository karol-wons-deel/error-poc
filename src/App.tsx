import { Component } from "./Component"
import { CriticalErrorBoundary } from "./CriticalErrorBoundary"
import { ErrorBoundary } from "./ErrorBoundary"

function App() {

  return (
    <>
      <h1>With Critical Error Boundary</h1>
      <CriticalErrorBoundary fallback={<div>Something critical went wrong</div>}>
        <Component name="A">
          <Component name="B">
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
              <Component name="C">
                <Component name="D" />
              </Component>
            </ErrorBoundary>
          </Component>
        </Component>
      </CriticalErrorBoundary>

      <h1>Without Critical Error Boundary</h1>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Component name="A">
          <Component name="B">
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
              <Component name="C">
                <Component name="D" />
              </Component>
            </ErrorBoundary>
          </Component>
        </Component>
      </ErrorBoundary>
    </>
  )
}

export default App
