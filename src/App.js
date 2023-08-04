import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js';
import Header from './HeaderContainer.js';
import FirstComponent from './FirstComponent.js';
import Company from './Company';
import Testimonial from './Testimonial';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Company />
      <FirstComponent />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
