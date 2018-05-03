import React from "react";
import { FormControl } from "../../../component/Common";

export default ({value, onChange}) => (
    <FormControl>
        <label>球場地址：</label>
        <input type="text" value={value} onChange={onChange} placeholder="請輸入球場地址" />
    </FormControl>
);