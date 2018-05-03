import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
export default class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [this.props.name]: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            [this.props.name]: date
        },()=>{
            this.props.onChange(this.state)
        })
    }

    render() {
        return (
            <DatePicker
                popperClassName={this.props.className}
                selected={this.state[this.props.name]}
                onChange={this.handleChange}
            />
        );
    }
}
