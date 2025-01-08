import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import MyWorks from "./components/myWorks/MyWorks";
import ArrowTop from "./components/ArrowTop";
import useGlobalData from "./hooks/useGlobalData";

function App() {

  const {data}= useGlobalData()

  return (
    <>
      <Header></Header>
      <main>
        <Banner totalClients={data[0]?.totalClients} totalProjects={data[0]?.totalProjects}></Banner>
        <About totalProjects={data[0]?.totalProjects}></About>
        <Education reviews={data[0]?.reviews}></Education>
        <MyWorks></MyWorks>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <ArrowTop></ArrowTop>
    </>
  );
}

export default App;
