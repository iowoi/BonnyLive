import React, { Component } from "react";
import { FormControl } from "../../../component/Common";
import { Wrapper } from './styled';


export default class CourtFeatures extends Component {

    render() {
       
        return (
            <Wrapper>
                <label>興趣/目的: (可複選)</label>
                <div>
                <button class="btn group">健身</button>
                <button class="btn group">減肥</button>
                <button class="btn group">訓練</button>
                </div>
                <div>
                <button class="btn group">跑步</button>
                <button class="btn group">交友</button>
                <button class="btn group">自行車</button>
                <hr />
                </div>
            </Wrapper>
        );
    }
}