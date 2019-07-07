import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styled from 'styled-components';


class Home extends Component {
    render() {
        return (
            null
        );
    }
}

// function to convert the global state obtained from redux to local props
const mapStateToProps = (state) => ({})

// wrapping the component within the connect HOC and calling the default function directly
export default connect(mapStateToProps, null)(Home);