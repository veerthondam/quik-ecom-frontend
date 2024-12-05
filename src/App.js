import "bootstrap/dist/css/bootstrap.min.css";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <Sidebar />
        <ProductListing />
      </div>
    </div>
  );
}

export default App;
