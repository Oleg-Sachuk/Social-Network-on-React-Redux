import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        {/* <Container> */}
          <HeaderContainer className={'headercol'} />
          <Row>
            <Col className={'navcol'}><Navbar /></Col>
            <Col xs={8} className={'middlecol'}>
              <div className='app_wrapper_content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogContainer />} />
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/login' render={() => <Login />} />
              </div>
            </Col>
            <Col className='sidebar'><SidebarContainer /></Col>
          </Row>
          <Footer />
        {/* </Container> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
