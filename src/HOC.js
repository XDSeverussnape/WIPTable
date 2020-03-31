import React, { useContext } from "react";
import Context from "./context";

export default function HOC(Component) {
  function HOComponent(props) {
    const getFilteredData = useContext(Context);
    return <Component data={props.data} getFilteredData={getFilteredData} />;
  }
  return HOComponent;
}
