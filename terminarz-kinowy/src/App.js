import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Start from './Views/Start';
import Login from './Views/Login';
import SpisKin from './Views/Kina/SpisKin';
import DodajKino from './Views/Kina/DodajKino';
import SpisSeansow from './Views/Seansy/SpisSeansow';
import DodajSeans from './Views/Seansy/DodajSeans';
import Pomoc from './Views/Pomoc/Pomoc';
import KinoPomoc from './Views/Pomoc/KinoPomoc';
import SeansPomoc from './Views/Pomoc/SeansPomoc';
import EdytujKino from './Views/Kina/EdytujKino';
import EdytujSeans from './Views/Seansy/EdytujSeans';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div class="mt-3"></div>
          <Container fluid>
            <Switch>
              <Route path="/" exact component={Start}/>
              <Route path="/login" exact component={Login}/>

              <Route path="/Kino/Spis" exact component={SpisKin}/>
              <Route path="/Kino/Dodaj" exact component={DodajKino}/>
              <Route path="/Kino/Edytuj" component={EdytujKino}/>

              <Route path="/Seans/Spis" exact component={SpisSeansow}/>
              <Route path="/Seans/Dodaj" exact component={DodajSeans}/>
              <Route path="/Seans/Edytuj" component={EdytujSeans}/>

              <Route path="/Pomoc" exact component={Pomoc}/>
              <Route path="/Pomoc/Kino" exact component={KinoPomoc}/>
              <Route path="/Pomoc/Seans" exact component={SeansPomoc}/>

            </Switch>
          </Container>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
