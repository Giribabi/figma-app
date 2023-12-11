import './App.css';
import Header from './components/header/Header'
import Content from './components/Content/Content'
import Cards from './components/Cards/Cards'
import Add from './components/Add/Add'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

// mockup for https://www.figma.com/file/392G67iWd8t6WAWy6wDMPt/Basic-Responsiveness-Task?type=design&node-id=1-4235&mode=design
function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Cards/>
      <Add/>
      <Testimonials/>
      <Footer/>
      <div className='foot'><span className='c'>c</span>Purple Cues Private Limited</div>
    </div>
  );
}

export default App;
