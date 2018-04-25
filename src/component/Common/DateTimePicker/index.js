import React, { Component } from "react";
import TimePicker from "../TimePicker/";
import DatePicker from "../DatePicker/";
import { Wrapper } from './styled';

export default class DateInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div className="date">
          <DatePicker />
        </div>
        <div className="time">
          <TimePicker />
        </div>
      </Wrapper>
    );
  }
}
