import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { browserHistory, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from '../../store/configureStore';
import Root from '../../containers/Root';
import './styles.scss';
import routes from './routes';

const store = configureStore();
const basenamedBrowserHistory = useRouterHistory(createBrowserHistory)({
  basename:(__isDev__?'/filter':'')
})
const history = syncHistoryWithStore(basenamedBrowserHistory, store);

render(
	<AppContainer>
		<Root store={store} history={history} routes={routes} />
	</AppContainer>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('../../containers/Root', () => {
		const Root = require('../../containers/Root').default;
		render(
			<AppContainer>
				<Root store={store} history={history} routes={routes} />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}
