import React, { PureComponent } from "react";
import "./Table.css";
import memoizeOne from "memoize-one";

export default class Table extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      filterName: "",
      filterType: ""
    };
  }
  componentDidUpdate() {
    const { getFilteredData } = this.props;

    if (getFilteredData) {
      getFilteredData(this.filteredData);
    }
  }

  inputFilterName = text => {
    this.setState({
      filterName: text
    });
  };
  inputFilterType = text => {
    this.setState({
      filterType: text
    });
  };

  filterData = (data, filterName, filterType) => {
    return data.filter(item => {
      let state = true;
      if (
        filterName &&
        !item.name.toLowerCase().includes(filterName.toLowerCase())
      ) {
        state = false;
      }
      if (
        filterType &&
        !item.type.toLowerCase().includes(filterType.toLowerCase())
      ) {
        state = false;
      }
      return state;
    });
  };

  memoizedFilterData = memoizeOne(this.filterData);

  get filteredData() {
    const { filterName, filterType } = this.state;
    const { data } = this.props;
    return this.memoizedFilterData(data, filterName, filterType);
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {this.props.labels &&
                this.props.labels.map(data => {
                  return <th key={data.name}>{data.name}</th>;
                })}
            </tr>
            <tr>
              {this.props.labels &&
                this.props.labels.map(data => {
                  if (data.isFilterable) {
                    return (
                      <th
                        key={data.name}
                        style={{ padding: 2, boxSizing: "border-box" }}
                      >
                        <input
                          value={this.state.filterName}
                          onChange={e => {
                            this.inputFilterName(e.target.value);
                          }}
                          style={{
                            padding: 5,
                            width: "95%",
                            borderRadius: "5px"
                          }}
                          type="text"
                        />
                      </th>
                    );
                  } else {
                    return <th key={data.name}></th>;
                  }
                })}
            </tr>
          </thead>
          <tbody>
            {this.filteredData.map(elem => {
              if (this.props.labels) {
                return (
                  <tr key={elem.id}>
                    {this.props.labels.map(item => {
                      return <td key={item.name}>{item.value(elem)}</td>;
                    })}
                  </tr>
                );
              } else {
                return (
                  <tr key={elem.id}>
                    {Object.values(elem)
                      .splice(1, 2)
                      .map(item => {
                        return <td key={elem.name}>{item}</td>;
                      })}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
