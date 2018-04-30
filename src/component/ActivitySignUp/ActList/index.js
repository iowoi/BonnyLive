import React, { Component } from "react";
import Card from "./Card";

class ActList extends Component {
    render() {
        const activities = this.props.data;
        return [
            activities && activities.map((data, i) => {
                return <Card key={i} data={data} />;
            })
        ];
    }
}

export default ActList;
