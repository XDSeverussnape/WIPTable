import React from "react";
import Table from "./Table";
import { connect } from "react-redux";
import HOC from "./HOC";

function ProdactionMode(props) {
  return (
    <div>
      <Table
        data={props.data}
        getFilteredData={props.getFilteredData}
        labels={[
          {
            name: "Product name",
            isFilterable: true,
            value: data => data.name
          },
          {
            name: "Type",
            isFilterable: true,
            value: data => data.type
          }
        ]}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.product
  };
};

let hoc = HOC(ProdactionMode);

export default connect(mapStateToProps, null)(hoc);
