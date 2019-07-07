import React from 'react';
// import PropTypes from 'prop-types'
// import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components';
import Products from '../components/Products';
import Home from '../components/Home';

const AppContainer = styled.div`
  height: 100%;
  /* height: 500px; */
  /* border: 1px solid black; */
  box-sizing: border-box;
`;

const Navbar = styled.div`
  height: 5%;
  background-color: #123456;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLink = styled(Link)`
  -webkit-appearance: none;
  text-decoration: none;
  color: #FFFFFF;
  font-size: 2rem;
`;

const LinkWrapper = styled.div`
  margin: 1rem;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar>
        <LinkWrapper><StyledLink to='/'>Home</StyledLink></LinkWrapper>
        <LinkWrapper><StyledLink to='/products'>Products</StyledLink></LinkWrapper>
      </Navbar>
        <Route path='/' component={Home} exact />
        <Route path='/products' component={Products} exact />
    </AppContainer>

  );
}

export default App;
