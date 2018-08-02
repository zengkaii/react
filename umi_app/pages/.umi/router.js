import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layout/index.js').default,
    "routes": [
      {
        "path": "/discover",
        "exact": true,
        "component": require('../discover/page.jsx').default
      },
      {
        "path": "/home",
        "exact": true,
        "component": require('../home/page.jsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/list",
        "exact": true,
        "component": require('../list.js').default
      },
      {
        "path": "/order",
        "exact": true,
        "component": require('../order/page.jsx').default
      },
      {
        "path": "/profile",
        "exact": true,
        "component": require('../profile/page.jsx').default
      },
      {
        "path": "/shop",
        "exact": true,
        "component": require('../shop/page.jsx').default
      },
      {
        "component": () => React.createElement(require('C:/Users/曾凯/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', routes: '[{"path":"/","component":"./layout\\\\index.js","routes":[{"path":"/discover","exact":true,"component":"./pages/discover/page.jsx"},{"path":"/home","exact":true,"component":"./pages/home/page.jsx"},{"path":"/","exact":true,"component":"./pages/index.js"},{"path":"/list","exact":true,"component":"./pages/list.js"},{"path":"/order","exact":true,"component":"./pages/order/page.jsx"},{"path":"/profile","exact":true,"component":"./pages/profile/page.jsx"},{"path":"/shop","exact":true,"component":"./pages/shop/page.jsx"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
