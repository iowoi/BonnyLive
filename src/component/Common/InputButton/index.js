import React, { Component } from "react";
import "./index.css";

class InputButton extends Component {
  render() {
    const { name, options } = this.props;
    return (
      <div className="input-button">
        <input type="text" name={name} />
        <button>搜尋</button>
      </div>
    );
  }
}

InputButton.defaultProps = {
  label: "",
  onChange: null,
  error: null
};

export default InputButton;
