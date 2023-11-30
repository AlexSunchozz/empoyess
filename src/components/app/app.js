import "./app.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container"></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
