import React, { Component } from "react";

class SelectComponent extends Component {
  render() {
    const { name, label, options } = this.props;
    return (
      <div className="select">
        {label && <label htmlFor={name}>{label}</label>}
        <select name={name} defaultValue="">
          {options.map((opt, index) => (
            <option
              value={opt.value}
              key={index}
              disabled={opt.disabled}
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
