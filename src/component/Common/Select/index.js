import React, { Component } from "react";

class SelectComponent extends Component {
    render() {
        const { name, label, options, onChange, value } = this.props;
        return (
            <div className="select">
                {label && <label htmlFor={name}>{label}</label>}
                <select name={name} value={value} onChange={onChange}>
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
    onChange: () => {},
    error: null
};

export default SelectComponent;
