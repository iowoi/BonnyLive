import React, { Component } from "react";
import JobSelect from "./Jobs";
import LevelSelect from "./Level";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
  
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    

    render() {
        const { name, label } = this.props;

        return (
            <div>
                   <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td  className="title" colSpan="2"><h1 >會員註冊</h1></td>
            </tr>
            <tr>
              <td colSpan="2">
              <label>姓名:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="請輸入您的姓名"/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
              <label>E-MAIL:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="請輸入您的E-MAIL"/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
              <label>行動電話:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="請輸入您的行動電話(此為日後登入帳號ˇ)"/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
              <label>密碼:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="請輸入6~25英文數字混合密碼"/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
              <label>密碼確認:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="請再次輸入您的密碼"/>
              </td>
            </tr>
            <label>職業:</label>
            <JobSelect placeholder="請選擇您的職業"/>
            <label>羽球程度:</label>
            <LevelSelect  className="text"  placeholder="請選擇您的羽球程度"/>
            <label>興趣/目的:(可複選)</label>
            <tr>
            <button className="submit">健身</button>
            <button className="submit">減肥</button>
            <button className="submit">訓練</button>
            </tr>
            <tr>
            <button className="submit">跑步</button>
            <button className="submit">交友</button>
            <button className="submit">自行車</button>
            </tr>
            <hr />
            <tr>
            <td>
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange} />記住我
              </td>
            </tr>
            <tr>
            <button className="submit">確認並註冊</button>
            </tr>
          </table>                   
                </form>
            </div>
        );
    }
}

export default Register
