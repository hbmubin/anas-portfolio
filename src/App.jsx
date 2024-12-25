import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import MyWorks from "./components/myWorks/MyWorks";
import ArrowTop from "./components/ArrowTop";

function App() {
  return (
    <>
      <Header></Header>
      <main className="">
        <Banner></Banner>
        <About></About>
        <Education></Education>
        <MyWorks></MyWorks>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <ArrowTop></ArrowTop>
    </>
  );
}

export default App;
