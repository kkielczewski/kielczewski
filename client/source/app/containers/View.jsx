import React, { Component } from 'react';
import Header from '../components/header/header';
import Routes from '../routes';

class View extends React.Component {
  onClick = () => {
    this.header.handlePusher();
  }
  /* eslint-disable */
  render() {
    return (
      <div onClick={this.onClick} style={{ height: '100%' }} >
        <Header onRef={ref => (this.header = ref)} />
        <main style={{ marginTop: '40px' }}>
          <Routes/>
        </main>
      </div>
    );
  }
  /* eslint-enable */
}

export default View;
