import React, { Component } from "react";
import moment from "moment";

export default class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    listTimeOptions() {
        var times =[];
        for(let i=0; i<24; i++){
            times.push({val: `${i}:00`, key: `${i}_0`})
            times.push({val: `${i}:30`, key: `${i}_30`})
        }
        return times
    }

    render() {
        const timeOptions = this.listTimeOptions();

        const optionWidgets = timeOptions.map(({ key, val }) => (
            <option key={key} value={key}>
                {val}
            </option>
        ));

        return (
            <select>
                {optionWidgets}
            </select>
        );
    }
}
