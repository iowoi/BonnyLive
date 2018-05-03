import React, { Component } from "react";
import moment from 'moment'
import { Wrapper } from './styled';
import { FollowButton,FollowIcon, MessagesIcon, JoinedIcon, Features, FrequencySelect, SkillLevelSelect, Select, CourtPriceSelect, CourtSizeSelect, AgeSelect, GroupPeopleNumberSeelct, ImageUploader, SubmitButton } from "../../Common";

export default ({ information }) => {
    if (!information || !information.tag)
        return (<div></div>)
    else
        return (
            <Wrapper>
                <p>開團：{information.group_name}</p>
                <p>徵求人數：{information.people}</p>
                <p>打球時間：{moment.unix(information.start).format("YYYY//MM/DD")}</p>
                <p>場地名稱：{information.city}{information.area}-{information.place_name}}</p>
                <p>球場地址：{information.address}}</p>
                <p>打球程度：{level(information.address)}</p>
                <p>打球費用：NT$ {information.fee}元</p>
                <p>場地數量：{information.place_count}</p>
                <p>場地特色：</p>
                <Features features={information.tag.map(x => x.name)} />  
                <br />
                <div className="icons">
                    <FollowIcon counts={6} />
                    <MessagesIcon counts={information.comment} />
                    <JoinedIcon counts={information.people - information.remain} />
                </div>
                <br />
                <div className="view_follow">
                    <span>6人追蹤</span>
                    <span>　</span>
                    <span>{information.view}6人看過</span>
                </div>
            </Wrapper>
        )
};

const level = level => {
    switch (level) {
        case 2:
            return "新手";
        case 3:
            return "中手";
        case 4:
            return "高手";
        default:
            return "入門";
    }
};