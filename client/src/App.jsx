import { BrowserRouter } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
