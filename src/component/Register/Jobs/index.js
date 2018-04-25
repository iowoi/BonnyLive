import React, { Component } from "react";
import Select from "../../Common/Select/";


export default class JobSelect extends Component {
    Options() {
        
        var options = [];
        options.push({ value: `工程師`, key: `1` })
        options.push({ value: `學生`, key: `2` })
        return options
    }

    render() {
        const options = this.Options();

        return (
            <Select  options={options} />
        );
    }
}
