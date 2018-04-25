import React from "react";
import { Wrapper } from "./styled";
import { Button } from "../../../Common";

export default () => {
    const onClick = () => {
        console.log("....");
    };
    return (
        <Wrapper>
            <div className="act-img">
                <div className="type">中階</div>
            </div>
            <div className="act-info">
                <p className="title">
                    頂尖設計團
                    <label>急徵</label>
                    <label>可教學</label>
                </p>
                <p>新北 - 中和國防管理學院</p>
                <small>2018/5/2 14:00 - 16:00</small>
                <small>150/每人 | 尚缺 4 人 | 4/25報名截止</small>
                {/* <Button id="id" width="100" type="submit" onClick={onClick}>
                    Button
                </Button> */}
            </div>
        </Wrapper>
    );
};
