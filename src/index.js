import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

// import '../public/stylesheets/styles.css';
import App from './components/App';


render(<App/>, document.querySelector('#main'));