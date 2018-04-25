import React from "react";

export default ({ groupName, handleGroupNameChange }) => (
    <div className="form-control">
        <label>團名：</label>
        <input type="text" value={groupName} onChange={handleGroupNameChange} placeholder="請輸入您揪團的團名" />
    </div>
);