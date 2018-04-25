import React, { Component } from "react";
import "./index.css";

class InputButton extends Component {
    render() {
        const { name, options, input, onChange, onClick } = this.props;
        return (
            <div className="input-button">
                <input type="text" {...input} onChange={onChange} />
                <button onClick={onClick}>
                    <img src="./assets/icons/search.png" alt="" />
                    搜尋
                </button>
            </div>
        );
    }
}

InputButton.defaultProps = {
    label: "",
    onChange: null,
    error: null,
    onClick: null
};

export default InputButton;
