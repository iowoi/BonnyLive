import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalContent from "../ModalContent";
import {
    DatePicker,
    Select,
    InputButton,
    Modal,
    SkillLevelSelect,
    TimePicker,
    CourtAddress
} from "../../../component/Common";
import { Wrapper } from "./styled";
const options = [
    {
        text: "人數",
        value: null,
        disabled: true,
        selected: true
    }
];

for (let i = 1; i <= 30; i++) {
    options.push({ text: i, value: i });
}

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
    }

    handleInputChange(e) {
        const target = e.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const inputName = target.name;
        this.setState({
            [inputName]: value
        });
    }

    handleDatePickerChange(state) {
        this.setState(state);
    }

    handleSubmit() {
        this.props.onUpdateSearch(this.state);
        this.props.onSubmit();
    }

    render() {
        const { search, start, end } = this.state;
        return (
            <Wrapper>
                <div className="date">
                    日期:
                    <DatePicker
                        name="start"
                        onChange={this.handleDatePickerChange}
                    />
                    -
                    <DatePicker
                        className="right-date"
                        name="end"
                        onChange={this.handleDatePickerChange}
                    />
                    <Select
                        options={options}
                        name="remain"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="search-info">
                    <Link className="loc" to="/selectLocation">
                        <img src="./assets/icons/location.png" alt="" />
                        <span>台北 - 大安</span>
                    </Link>
                    <InputButton
                        input={{
                            placeholder: "團名/課程",
                            name: "search",
                            value: search || ""
                        }}
                        onClick={this.handleSubmit}
                        onChange={this.handleInputChange}
                    />
                    <Modal
                        title="進階搜尋"
                        btnClass="btn"
                        btnText="進階搜尋"
                        onClick={this.handleSubmit}
                        modalContent={<ModalContent />}
                    />
                </div>
            </Wrapper>
        );
    }
}
