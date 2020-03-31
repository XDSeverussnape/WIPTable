import React from "react";
import Table from "./Table";
import { connect } from "react-redux";

import HOC from "./HOC";

function ClientsMode(props) {
  return (
    <div>
      <Table
        data={props.data}
        getFilteredData={props.getFilteredData}
        labels={[
          {
            name: "Client names",
            isFilterable: true,
            value: data => data.name
          },
          {
            name: "Client type",
            value: data => data.type
          }
        ]}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.client
  };
};

let hoc = HOC(ClientsMode);

export default connect(mapStateToProps, null)(hoc);
