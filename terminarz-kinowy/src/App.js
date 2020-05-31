import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Start from './Views/Start';
import Login from './Views/Login';
import Register from './Views/Register';
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

  state = {
    loggedIn: false,
    userName: ''
  }

  handleSessionCookies() {
    // Jeżeli starczy czasu to zmienić takie podejście na JWT
    var cookies = document.cookie.split(';');
    var hasLoggedInCookie = false;
    cookies.forEach(cookie => {
      if (cookie.includes('loggedIn')) {
        hasLoggedInCookie = true;
        this.state.loggedIn = cookie.split('=')[1];
        console.log(cookie.split('=')[1]);
      }
    });

    if (!hasLoggedInCookie) {
      document.cookie += 'loggedIn=false';
    }
  }

  render() {
    // let cookies = document.cookie;
    this.handleSessionCookies();
    if (this.state.loggedIn == 'true') {
      return (
        <Router>
          <div className="App">
            <Header/>
            <div className="mt-3"></div>
            <Container fluid>
              <Switch>
                <Route path="/" exact component={Start}/>
  
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
    } else {
      return (
        <Router>
          <div className="App">
            <Container fluid>
              <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/" component={Login}/>
              </Switch>
            </Container>
          </div>
        </Router>
      );
    }
  }
}

export default App;
