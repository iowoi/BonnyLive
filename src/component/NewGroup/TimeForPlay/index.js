import React from "react";
import { DateTimePicker, FormControl } from "../../../component/Common";


export default ({ date, time, onDateChange, onTimeChange }) => (
    <FormControl>
        <label>打球時間：</label>
        <DateTimePicker date={date} time={time} onDateChange={onDateChange} onTimeChange={onTimeChange} />
    </FormControl>
);