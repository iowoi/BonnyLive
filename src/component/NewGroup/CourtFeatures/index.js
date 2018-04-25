import React, { Component } from "react";
import { FormControl } from "../../../component/Common";
import { Wrapper } from './styled';

export default class CourtFeatures extends Component {
    tags = () => {
        return [{ text: '飲水機', value: 'a' }, { text: '冷氣', value: 'b' }, { text: '淋浴間' }, { text: '正妹' }, { text: '提供球拍' }, { text: '有高手' },
        { text: '初學者' }, { text: '常態開圖' }, { text: '可臨打' }
        ]
    }

    handleOnClick = (e) => {
        console.log(e.target.value)
        console.log(e.target.innerText)
    }

    render() {
        var tags = this.tags()
        return (
            <Wrapper>
                <label>場地特色: tag(可複選)</label>
                <input type="text" placeholder="特色關鍵字 可新增" />
                <div>
                    <ul>
                        {tags.map((opt, index) => (
                            <li onClick={this.handleOnClick}
                                value={opt.value}
                                key={index}>
                                {opt.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </Wrapper>
        );
    }
}
