import React from "react";
import { DatePicker, Select } from "../../../component/Common";

const options = [
  {
    text: "人數",
    value: null,
    disabled: true,
    selected: true
  }
];

for (let i = 1; i <= 30; i++) {
  options.push({
    text: i,
    value: i
  });
}
export default () => {
  return (
    <div>
      日期: <DatePicker /> - <DatePicker />
      <Select options={options} />
      <img src="./assets/icons/location.png" alt="" />
      台北 - 大安
      <input placeholder="團名/課程" />
      <a href="">進階搜尋</a>
    </div>
  );
};
