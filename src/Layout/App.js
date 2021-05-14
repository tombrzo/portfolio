import '../Styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
// import Navigation from './Navigation.js';
import Page from './Page.js';


function App() {
  return (
    <Router>
      <div className="app__container">

        <main className='main'>
         
          <section className='section'>
            <Page/>
          </section>

        </main>

      </div>
    </Router>
  );
}

export default App;
