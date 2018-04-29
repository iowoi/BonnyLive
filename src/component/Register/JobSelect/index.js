import React, { Component } from "react";
import Select from "../../../component/Common/Select";
import { FormControl } from "../../../component/Common";


export default class JobSelect extends Component {
    options() {
        //todo load from api
        var options = [];
        options.push({ value: `學生` })
        options.push({ value: `教師` })
        return options
    }

    render() {
        const options = this.options();

        return (
            <FormControl>
              <Select label={"職業："} options={options} />
        </FormControl>
         
        );
    }
}



