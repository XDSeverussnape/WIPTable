import React, { useState } from "react";
import "./App.css";
import ProdactionMode from "./ProdactoineMode";
import ClientsMode from "./ClientsMode";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Context from "./context";
import Table from "./Table";

function App() {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <Context.Provider value={setFilteredData}>
      <Router>
        <div>
          <div className="App">
            <Link to="/prodaction_mode">Prodaction Mode</Link>
            <Link to="/clients_mode">Clients Mode</Link>
          </div>
          <div className="container">
            <Switch>
              <Route path="/prodaction_mode" component={ProdactionMode} />
              <Route path="/clients_mode" component={ClientsMode} />
            </Switch>
          </div>
        </div>
        <Table
          data={filteredData}
          labels={[
            {
              name: "Product name",
              value: data => data.name
            },
            {
              name: "Type",
              value: data => data.type
            },
            {
              name: "Checkbox",
              value: data => <input type="checkbox" />
            }
          ]}
        />
      </Router>
    </Context.Provider>
  );
}

export default App;
