import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class SkillLevelSelect extends Component {
    options() {
        //todo load from api
        var options = [];
        options.push({ value: `入門` })
        return options
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
                <Select label={"打球程度："} options={options} />
            </FormControl>
        );
    }
}
