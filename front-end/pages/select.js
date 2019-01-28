import React from "react";
import SelectSlick from "../components/Select";
import Nav from "../components/Core/Nav";

class Select extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <SelectSlick />
      </div>
    );
  }
}

export default Select;
