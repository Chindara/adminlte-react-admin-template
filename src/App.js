import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Dashboard3 from "./pages/dashboard/dashboard3";
import Dashboard1 from "./pages/dashboard/dashboard1";
import Dashboard2 from "./pages/dashboard/dashboard2";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/dashboard/dashboard1">
            <Dashboard1 />
          </Route>
          <Route path="/dashboard/dashboard2">
            <Dashboard2 />
          </Route>
          <Route path="/dashboard/dashboard3">
            <Dashboard3 />
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      <CssBaseline />
    </div>
  );
}
