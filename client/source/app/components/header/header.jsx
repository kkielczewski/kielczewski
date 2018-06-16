import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Button
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { getAuthenticatedUser } from '../../redux/modules/user';
import { logoutUser } from '../../redux/modules/authentication';
import { mobileBreakpoint } from '../../constants/ui-constants';

const NavBarChildren = ({ children }) => (
  <Container style={{ width: '100%' }}>{children}</Container>
);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= mobileBreakpoint,
      visible: false
    };
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }
  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  buildNavigation = () => {
    const { user } = this.props;
    const links = [
      {
        name: 'Home',
        link: '',
        authenticated: false
      },
      {
        name: 'Dashboard',
        link: 'dashboard',
        authenticated: true
      },
      {
        name: (user && user.firstName) || 'Profile',
        link: 'profile',
        authenticated: true
      },
      {
        name: 'Sign out',
        onClick: this.props.logoutUser,
        authenticated: true
      },
      {
        name: 'Sign in',
        link: 'login',
        authenticated: false
      },
      {
        name: 'Register',
        link: 'register',
        authenticated: false
      }
    ];

    return (
      links.filter(link => link.authenticated === this.props.authenticated).map(link => (
        <NavLink key={link.name} className='item' exact to={link.link}>{link.name}</NavLink>
      ))
    );
  };

  render() {
    const {
      t,
      i18n
    } = this.props;
    const { visible } = this.state;

    const changeLanguage = (lng) => {
      console.log(i18n);
      i18n.changeLanguage(lng);
    };

    return (
      <div>
        <Responsive maxWidth={Responsive.onlyTablet.minWidth} >
            <Sidebar as={Menu} animation="overlay" width='thin' icon="labeled" inverted vertical visible={visible} >
              {this.buildNavigation()}
            </Sidebar>
            <Menu fixed="top" inverted>
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Menu position="right">
                <Button onClick={() => changeLanguage('pl')}>pl</Button>
                <Button onClick={() => changeLanguage('en')}>en</Button>
              </Menu.Menu>
            </Menu>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu fixed="top" inverted>
          {this.buildNavigation()}
          <Menu.Menu position="right">
            <Button onClick={() => changeLanguage('pl')}>pl</Button>
            <Button onClick={() => changeLanguage('en')}>en</Button>
          </Menu.Menu>
        </Menu>
        </Responsive>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string
  }),
  authenticated: PropTypes.bool,
  logoutUser: PropTypes.func
};

const mapStateToProps = ({ user, authentication }) => ({
  user: getAuthenticatedUser({ user, authentication }),
  authenticated: authentication.authenticated
});

export default connect(mapStateToProps, { logoutUser })(Header);
