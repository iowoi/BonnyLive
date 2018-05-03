import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class SkillLevelSelect extends Component {
    options() {
        var options = [];

        if (this.props.levels) {
            for (var i = 0; i < this.props.levels.length; i++) {
                options.push({
                    text: this.props.levels[i].description,
                    value: this.props.levels[i].id
                });
            }
        }

        return options;
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
                <Select
                    name="badminton_level"
                    label={"打球程度："}
                    options={options}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </FormControl>
        );
    }
}
