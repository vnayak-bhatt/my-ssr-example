import Home from './Home';
import Logo from './Logos';
import NotFound from './NotFound';

import loadData from './helpers/load';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/logo',
        component: Logo,
        loadData: () => loadData('Logo')
    },
    {
        component: NotFound
    }
];

export default Routes;