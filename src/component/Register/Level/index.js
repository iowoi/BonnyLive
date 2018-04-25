import React, { Component } from "react";
import Select from "../../Common/Select/";


export default class LevelSelect extends Component {
    Options() {
        var options = [];
        options.push({ value: `菜鳥`, key: `1` })
        options.push({ value: `高手`, key: `2` })
        return options
    }

    render() {
        const options = this.Options();

        return (
            <Select  options={options} />
        );
    }
}
