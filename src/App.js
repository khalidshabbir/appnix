
import {HashRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import DogList from './pages/DogList';
import AdoptionsPages from './pages/AdoptionsPages'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ShopPages from './pages/ShopPages'
import ShopDetailsPage from './pages/ShopDetailsPage'
import BreederPage from './pages/BreederPage'
import BreederDetailsPage from './pages/BreederDetailsPage'
import HometwoPage from './pages/HometwoPage'
import ScrollToTopRoute from './ScrollToTopRoute'

function App() {
  
  return (
  <div className='app'>
   
   <Router>
       <Header/>
       <Switch>
          <ScrollToTopRoute exact={true} path='/'>
          <Home/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/doglist'>
            <DogList/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/adoption'> 
            <AdoptionsPages/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/contacts'>
            <ContactPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/blogs'>
          <BlogPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/blog-details'>
          <BlogDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/shop'>
           <ShopPages/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/shop-details'>
          <ShopDetailsPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/breeder'>
          <BreederPage/>
          </ScrollToTopRoute>
          <ScrollToTopRoute exact={true} path='/breeder-details'>
          <BreederDetailsPage/>
          </ScrollToTopRoute>

          <ScrollToTopRoute exact={true} path='/home-two'>
          <HometwoPage/>
          </ScrollToTopRoute>
       </Switch>
       <Footer/>
   </Router>
 
  </div>
  );
}

export default App;
   