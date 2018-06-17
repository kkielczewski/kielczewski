import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <div className="App">
        <h1>
          {t('Main title')}
        </h1>
        <div style={{ fontSize: '18px' }}>
          <p>
            {t('Main 1st paragraph')}
          </p>
          <p>
            {t('Main 2nd paragraph')}
          </p>
        </div>
      </div>
    );
  }
}

// extended main view with translate hoc
export default translate('translations')(App);
