import React from "react";
import { DatePicker, Select, InputButton, Modal, SkillLevelSelect, TimePicker } from "../../../component/Common";
import { Wrapper } from './styled';

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

const inputOption = {
  placeholder: "團名/課程",
  name: "name"
}

const ModalContent = () => <div>
  <label>打球時段</label>
  <TimePicker/>
  <TimePicker/>
  <SkillLevelSelect/>
</div>

export default () => {
  return (
    <Wrapper>
      <div className="date">
        日期: <DatePicker /> - <DatePicker />
        <Select options={options} />
      </div>
      <div className="search-info">
        <div className="loc">
          <img src="./assets/icons/location.png" alt="" />
          <span>台北 - 大安</span>
        </div>
        <InputButton input={inputOption} />
        <Modal title="進階搜尋" btnClass="btn" btnText="進階搜尋" modalContent={<ModalContent/>}/>
      </div>
    </Wrapper>
  );
};
