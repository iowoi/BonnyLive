import React, { Component } from "react";
import { connect } from "react-redux";
import {
    fetchActivity,
    getBannerList,
    updateSearch,
    getLevels
} from "../../actions";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ActList from "./ActList";
class ActivitySignUp extends Component {
    componentDidMount() {
        this.props.getBannerList();
        this.props.getLevels();
    }
    render() {
        const { data, onSubmit, onUpdateSearch, levels } = this.props;
        return [
            <Banner key="0" data={data.banner} />,
            <SearchBar
                key="1"
                onSubmit={onSubmit}
                onUpdateSearch={onUpdateSearch}
                data={data}
                levels={levels}
            />,
            <ActList key="2" data={data.activity} />
        ];
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.activity,
    levels: state.newGorupReducer.levels
});

const mapDispatchToProps = {
    onSubmit: fetchActivity,
    getBannerList: getBannerList,
    getLevels: getLevels,
    onUpdateSearch: updateSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivitySignUp);
