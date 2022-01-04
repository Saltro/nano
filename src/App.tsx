import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useRoutingInstrumentation from 'react-router-v6-instrumentation';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { sentryDsn } from './secret';
import AuthContainer from './context/AuthContainer';
import Loading from './components/Loading';
import './App.less';
import './assets/iconfont/iconfont.css';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './views/Home'));
const Work = React.lazy(() => import(/* webpackChunkName: "work" */ './views/Work'));
const Details = React.lazy(() => import(/* webpackChunkName: "details" */ './views/Details'));
const Login = React.lazy(() => import(/* webpackChunkName: "login" */ './views/Login'));
const Mine = React.lazy(() => import(/* webpackChunkName: "mine" */ './views/Mine'));
const Places = React.lazy(() => import(/* webpackChunkName: "places" */ './views/Places'));
const Search = React.lazy(() => import(/* webpackChunkName: "search" */ './views/Search'));

const PageLoading = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Loading />
    </div>
  );
};

const App: React.FC = () => {
  const routingInstrumentation = useRoutingInstrumentation();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Sentry.init({
        dsn: sentryDsn,
        integrations: [
          new Integrations.BrowserTracing({
            routingInstrumentation,
          }),
        ],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 0.6,
      });
    }
  }, [routingInstrumentation]);

  return (
    <div>
      <AuthContainer>
        <Routes>
          <Route
            path="/:page"
            element={
              <Suspense fallback={<PageLoading />}>
                <Home />
              </Suspense>
            }
          />
          <Route path="/" element={<Navigate to="/1" />} />
          <Route
            path="/login"
            element={
              <Suspense fallback={<PageLoading />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/mine/*"
            element={
              <Suspense fallback={<PageLoading />}>
                <Mine />
              </Suspense>
            }
          />
          <Route
            path="/work/:page/:ordering/:ascending"
            element={
              <Suspense fallback={<PageLoading />}>
                <Work />
              </Suspense>
            }
          />
          <Route path="/work" element={<Navigate to="/work/1/id/true" />} />
          <Route
            path="/detail/:id"
            element={
              <Suspense fallback={<PageLoading />}>
                <Details />
              </Suspense>
            }
          />
          <Route
            path="/search/:key/:page"
            element={
              <Suspense fallback={<PageLoading />}>
                <Search />
              </Suspense>
            }
          />
          <Route
            path="/search/:key"
            element={
              <Suspense fallback={<PageLoading />}>
                <Search />
              </Suspense>
            }
          />
          <Route
            path="/places"
            element={
              <Suspense fallback={<PageLoading />}>
                <Places />
              </Suspense>
            }
          />
          <Route
            path="/places/:id"
            element={
              <Suspense fallback={<PageLoading />}>
                <Places />
              </Suspense>
            }
          />
        </Routes>
      </AuthContainer>
    </div>
  );
};

export default App;
