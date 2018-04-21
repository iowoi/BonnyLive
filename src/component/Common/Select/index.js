import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class SelectComponent extends Component {
  render() {
    const { name, label, options } = this.props;
    return (
      <div className="input">
        <label htmlFor={name}>{label}</label>
        <select name={name}>
          {options.map((opt, index) => (
            <option
              value={opt.value}
              key={index}
              disabled={opt.disabled}
              selected={opt.selected}
            >
              {opt.text || opt.value}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

SelectComponent.defaultProps = {
  label: "",
  onChange: null,
  error: null
};

export default SelectComponent;
