import React, { Component } from 'react';
import Header from '../components/header/header';
import Routes from '../routes';

class View extends React.Component {
  onClick = () => {
    this.header.handlePusher();
  }
  render() {
    return (
      <div onClick={this.onClick} style={{ height: '100%' }} >
        <Header onRef={ref => (this.header = ref)} i18n={this.props.i18n} />
        <main>
          <Routes/>
        </main>
      </div>
    );
  }
}

export default View;
