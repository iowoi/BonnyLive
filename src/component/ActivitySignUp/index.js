import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivity, getBannerList, updateSearch } from "../../actions";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import ActList from "./ActList";
class ActivitySignUp extends Component {
    componentDidMount(){
        this.props.getBannerList()
    }
    render() {
        const { data, onSubmit, onUpdateSearch } = this.props
        return [
            <Banner key="0" data={data.banner}/>, 
            <SearchBar key="1" onSubmit={onSubmit} onUpdateSearch={onUpdateSearch}/>, 
            <ActList key="2" data={data.activity}/>
        ];
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.data
});


const mapDispatchToProps = ({
    onSubmit: fetchActivity,
    getBannerList: getBannerList,
    onUpdateSearch: updateSearch
});


export default connect(mapStateToProps,mapDispatchToProps)(ActivitySignUp);
