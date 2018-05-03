import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class AgeSelect extends Component {
    options() {
        var options = [];
        for (let i = 1; i < 100; i++) {
            options.push({ value: i })
        }
        return options
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
                <Select label={"球友年齡："} options={options} onChange={this.props.onChange} value={this.props.value}/>
            </FormControl>
        );
    }
}
