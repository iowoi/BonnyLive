import React, { Component } from "react";
import { Wrapper } from "./styled";

export default class SubmitButton extends Component {
  render() {
    const {  onSubmit } = this.props;
    return (
        <Wrapper>
          <div>
          <span onClick={onSubmit}>確認註冊</span>
          <img src="./assets/icons/ArrowW.png" alt="" />
          </div>
        </Wrapper>
    );
  }
}


