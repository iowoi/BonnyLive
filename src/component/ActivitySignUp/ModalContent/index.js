import React, { Component } from "react";
import {
    SkillLevelSelect,
    TimePicker,
    CourtAddress
} from "../../../component/Common";
import { Wrapper, TimePickerWrapper } from "./styled";

export default class extends Component {
    render() {
        const { onChange } = this.props;
        console.log(this.props);
        return (
            <Wrapper>
                <label>打球時段</label>
                <TimePickerWrapper>
                    <TimePicker name="interval_start" onChange={onChange} />
                    <TimePicker name="interval_end" onChange={onChange} />
                </TimePickerWrapper>
                <SkillLevelSelect
                    levels={this.props.levels}
                    onChange={onChange}
                />
                <CourtAddress onChange={onChange}/>
            </Wrapper>
        );
    }
}
