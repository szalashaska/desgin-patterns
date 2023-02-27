import { useState, lazy, Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundaries/ErrorBoundary";

const One = lazy(() => import("../components/ErrorBoundaries/One"));
const Two = lazy(() => import("../components/ErrorBoundaries/Two"));
const Three = lazy(() => import("../components/ErrorBoundaries/Three"));

const ErrorBoundaries = () => {
  const [showComponents, setShowComponents] = useState(false);
  return (
    <div>
      <>
        <h1>About</h1>
        {showComponents && (
          <Suspense fallback={<p>Loading Components...</p>}>
            <ErrorBoundary>
              <One />
            </ErrorBoundary>
            <ErrorBoundary>
              <Two />
            </ErrorBoundary>
            <ErrorBoundary>
              <Three />
            </ErrorBoundary>
          </Suspense>
        )}
        <button onClick={() => setShowComponents(true)}>Show</button>
      </>
    </div>
  );
};

export default ErrorBoundaries;
