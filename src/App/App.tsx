/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { Component } from 'react';
import Router from './Router';

import './App.scss';
import { Sidebar } from './components';

export default class App extends Component {

  public render() {
    return (
      <div className='App'>
        <Sidebar />
        <main>
          <h1 className='title'>Ambrosus react components, API docs</h1>
          <p className='subtitle'>How to use ambrosus react components, their options and examples.</p>

          <Router />

          <footer>
            Ambrosus, all rights reserved, 2019.
          </footer>
        </main>
      </div>
    );
  }
}
