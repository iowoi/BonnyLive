import React, { Component } from "react";
import Select from "../Select/";
import { FormControl } from "../../../component/Common";

export default class FrequencySelect extends Component {
    options() {
        var opitons = [];

        opitons.push({ value: '不固定' })
        opitons.push({ value: '每周' })
        opitons.push({ value: '每月' })

        return opitons
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
                <Select label={"開團頻率："} options={options} />
            </FormControl>
        );
    }
}

