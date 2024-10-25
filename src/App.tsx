import { Flex} from "@radix-ui/themes";
import ProductList from "./components/Products/ProductsList";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Products/ProductDetails";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <Flex direction="column" gap="2">
      <Navbar/>
      <Header />
<Routes>
<Route path="/" element={<ProductList />} />
<Route path="/product/:id" element={<ProductDetails />} />

</Routes>
     
    </Flex>
  );
}
export default App;
