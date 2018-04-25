import React from "react";
import ReactDOM from 'react-dom';
import { Wrapper } from './styled';


class NameForm extends React.Component {
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
      return (
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td  className="title" colSpan="2"><h1 >我要登入</h1></td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="帳號"/>
              </td>
            </tr>
            <tr>
              <td colSpan="">
                <input type="password" value={this.state.value} onChange={this.handleChange} placeholder="密碼"/>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="BonnyLIVE登入" />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange} />記住我
              </td>
              <td>
                <a href="#">忘記密碼?</a>
              </td>
            </tr>
            <tr>
              <td className="title"><h5>其他登入方式:</h5></td>
            </tr>
            <tr>
            <button>LINE</button>
            <button>Facebook</button>
            <button>Google+</button>
            </tr>
            <hr />
            <tr>
            <td  className="text"><h2>還不是會員嗎?</h2></td>
            </tr>
            <tr>
            <button className="input-button">立即註冊</button>
            </tr>
          </table>
        </form>

      );
    }
  }


export default () => {
    return (
        <Wrapper>
        <div>
         <NameForm/>      
        </div>
        </Wrapper>

      );

};