import "./App.css";
import LayoutComponents from "./pages/LayoutComponents";
import ContainerComponents from "./pages/ContainerComponents";
import CotrolledUncontolledComponents from "./pages/CotrolledUncontolledComponents";
import HigherOrderComponents from "./pages/HigherOrderComponents";
import CustomHooks from "./pages/CustomHooks";
import RecursiveComponents from "./pages/RecursiveComponents";
import ErrorBoundaries from "./pages/ErrorBoundaries";

function App() {
  return (
    <div className="app">
      {/* <LayoutComponents /> */}
      {/* <ContainerComponents /> */}
      {/* <CotrolledUncontolledComponents /> */}
      {/* <HigherOrderComponents /> */}
      {/* <CustomHooks /> */}
      {/* <RecursiveComponents /> */}
      <ErrorBoundaries />
    </div>
  );
}

export default App;
