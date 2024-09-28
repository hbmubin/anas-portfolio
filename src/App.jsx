import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/banner/contact/Contact";
import Education from "./components/education/Education";
import Header from "./components/header/Header";
import Footer from "./components/myWorks/Footer";
import MyWorks from "./components/myWorks/MyWorks";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <About></About>
        <Education></Education>
        <MyWorks></MyWorks>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
