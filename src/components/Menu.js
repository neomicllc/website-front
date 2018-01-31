import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {Menu, Button, Grid, Segment} from 'semantic-ui-react';

import Home from '../containers/Home';
import Services from '../containers/Services';
import Profile from '../containers/Profile';
import Portfolio from '../containers/Portfolio';
import Footer from '../containers/Footer';

export class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  navigationLinks() {
    const {activeItem} = this.state;

    return (
      <div>
        <Grid>
          <Grid.Column mobile={10} computer={16}>
            <Menu secondary stackable fluid fixed='top'>
              <Menu.Item
                as={Link}
                to='/'
                className="logo"
              >
                Neomic
              </Menu.Item>

              <Menu.Menu position="right">
                <Menu.Item
                  // as={Link}
                  // to='/'
                  href="#section1"
                  name="home"
                  active={activeItem === 'home'}
                  onClikc={this.handleItemClick}
                >
                  Home
                </Menu.Item>

                <Menu.Item
                  // as={Link}
                  // to='/services'
                  href="#section2"
                  name="services"
                  link={true}
                  active={activeItem === 'services'}
                  onClikc={this.handleItemClick}
                >
                  Services
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to='/profile'
                  name="profile"
                  link={true}
                  active={activeItem === 'profile'}
                  onClikc={this.handleItemClick}
                >
                  Profile
                </Menu.Item>

                <Menu.Item
                  as={Link}
                  to='/portfolio'
                  name="portfolio"
                  link={true}
                  active={activeItem === 'portfolio'}
                  onClikc={this.handleItemClick}
                >
                  Portfolio
                </Menu.Item>
              </Menu.Menu>

            </Menu>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  renderNavigation() {
    return (
      <div>
        {this.navigationLinks()}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderNavigation()}
      </div>
    );
  }
}

export default class MenuMain extends Component {
  render() {
    return (
      <div>
        <Segment>info@neomic.co</Segment>
        <NavContainer/>

        <Home/>
        {/*<Route exact path="/" component={Home}/>*/}
        {/*<Route path="/services" component={Services}/>*/}
        {/*<Route path="/profile" component={Profile}/>*/}
        {/*<Route path="/portfolio" component={Portfolio}/>*/}

        <Footer/>
      </div>
    )
  }
}