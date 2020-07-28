import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import routes from "./routes";

function App() {
  const Loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <div className="container-fluid mt5">
          <Switch>
            <Route exact path="/" component={Home} />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
