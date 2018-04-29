import React from "react";
import FormControl from "../FormControl";

const style = {
    marginTop: "10px"
};

if (navigator.geolocation) {
    console.log(navigator.geolocation);
}
function showPosition(position) {
    return `${position.coords.latitude} & ${position.coords.longitude}`;
}

export default ({ name, address, handleChange }) => (
    <FormControl>
        <label>球場地址：</label>
        <input
            type="text"
            value={address}
            onChange={handleChange}
            name={name}
            placeholder="請輸入球場地址"
        />
        {/* todo 
        https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
         */}
        <iframe
            width="100%"
            height="130"
            frameBorder="0"
            style={style}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD3OkqTsjWvjcBLnokcsil3I23rZvLYl5g
    &q=Space+Needle,Seattle+WA"
            allowFullScreen
        />
    </FormControl>
);
