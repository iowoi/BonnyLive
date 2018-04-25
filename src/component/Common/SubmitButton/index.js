import React, { Component } from "react";
import { Wrapper } from "./styled";

class SubmitButton extends Component {
  render() {
    const { name, options, input, onChange, onClick } = this.props;
    return (
        <Wrapper onClick={onClick}>
          確認開團
          <img src="./assets/icons/search.png" alt="" />
        </Wrapper>
    );
  }
}

SubmitButton.defaultProps = {
  label: "",
  onChange: null,
  error: null,
  onClick: null
};

export default SubmitButton;
