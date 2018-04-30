import React from "react";
import {
    SkillLevelSelect,
    TimePicker,
    CourtAddress
} from "../../../component/Common";
import { Wrapper, TimePickerWrapper } from "./styled";

export default () => {
    const handleInputChange = () =>{}
    return (
        <Wrapper>
            <label>打球時段</label>
            <TimePickerWrapper>
                <TimePicker />
                <TimePicker />
            </TimePickerWrapper>
            <SkillLevelSelect />
            <CourtAddress />
        </Wrapper>
    );
};
