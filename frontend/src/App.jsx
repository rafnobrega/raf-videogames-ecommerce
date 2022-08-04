import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  // return <Home />;
  return (
    <Router>
      <Routes>
        <Route path="/pay">
          {/* <Pay/> */}
        </Route>
        <Route path="/success">
          {/* <Success/> */}
        </Route>
      </Routes>
    </Router>
  )
};

export default App;