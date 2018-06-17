import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>{t('Welcome to React')}</h2>
          <button onClick={() => changeLanguage('pl')}>pl</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
        <div className="App-intro">
          <Trans>Dupa</Trans>
          <Trans i18nKey="feed_no_change">
            Data <strong>no change</strong>. No update is performed. Please
            click
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Force Update
            </a>
            .
          </Trans>
        </div>
        <div style={{ marginTop: 40 }}>
          <a href="https://react.i18next.js">
            Learn more: https://react.i18next.js
          </a>
        </div>
      </div>
    );
  }
}

// extended main view with translate hoc
export default translate('translations')(App);
