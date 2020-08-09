import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import Dashboard3 from "./pages/dashboard/dashboard3";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/dashboard/dashboard3">
            <Dashboard3 />
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
