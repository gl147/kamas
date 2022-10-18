import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
