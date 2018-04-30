import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./styled";
import { Select } from "../Common";
import { CityData } from "./tw-city";
import SubmitButton from "../Common/SubmitButton";

class SelectLocation extends Component {
    constructor(props) {
        super(props);
        const counties = [{ value: "選擇其他縣市" }];
        const districts = [];
        CityData.counties.map(value => counties.push({ value: value }));
        CityData.districts[0][0].map(value =>
            districts.push({ value: `--- 台北市 ${value}---` })
        );
        this.state = {
            cityOptions: counties,
            areaOptions: districts
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(e) {
        const index = e.nativeEvent.target.selectedIndex;
        const currentCity = e.target.value;
        const districts = [];
        CityData.districts[index][0].map(value =>
            districts.push({ value: `--- ${currentCity} ${value}---` })
        );
        this.setState({
            areaOptions: districts
        });
    }
    render() {
        const { data } = this.props;
        const { cityOptions, areaOptions } = this.state;

        return (
            <Wrapper>
                <img src="/assets/images/TaipeiBanner.jpg" className="banner" />
                <div className="main-form">
                    <Select options={areaOptions} />
                    <Select
                        options={cityOptions}
                        onChange={this.handleSelect}
                    />
                    <SubmitButton text="確認" />
                </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.data
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocation);
