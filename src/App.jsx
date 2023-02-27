import "./App.css";
import LayoutComponents from "./pages/LayoutComponents";
import ContainerComponents from "./pages/ContainerComponents";
import CotrolledUncontolledComponents from "./pages/CotrolledUncontolledComponents";
import HigherOrderComponents from "./pages/HigherOrderComponents";
import CustomHooks from "./pages/CustomHooks";

function App() {
  return (
    <div className="app">
      {/* <LayoutComponents /> */}
      {/* <ContainerComponents /> */}
      {/* <CotrolledUncontolledComponents /> */}
      <HigherOrderComponents />
      {/* <CustomHooks /> */}
    </div>
  );
}

export default App;
