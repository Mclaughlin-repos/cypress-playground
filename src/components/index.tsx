import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
    <App userName="Ya'll" lang="Cypress, AXE-CORE, PA11Y, Typescript and React" />,
    document.getElementById('app')
);
if (module.hot) {
    module.hot.accept();
}
