import React, { Component } from "react";
import { Wrapper } from "./styled"

export default class ImageUploader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { input } = this.props;

        return (
            <Wrapper>
                <label>上傳照片：</label>
                <div className="input-button">
                    <input type="text" {...input} />
                    <button>
                        <img src="./assets/icons/search.png" alt="" />
                        上傳
                    </button>
                </div>
                <label className="hint">您可上傳2400(寬) x 400(高)像素以內、檔案大小2mb以下的JPG、GIF、PNG圖片</label>
            </Wrapper>
        );
    }
}
