import React from "react";
import { FormControl } from "../../../component/Common";

export default ({address, handleChange}) => (
    <FormControl>
        <label>球場地址：</label>
        <input type="text" value={address} onChange={handleChange} placeholder="請輸入球場地址" />
    </FormControl>
);