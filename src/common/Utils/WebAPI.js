import axios from 'axios';
import { browserHistory } from 'react-router';


import { 
  authError,
  authComplete,
  completeLogout,

} from '../actions';

export default {

  // 使用者註冊
  register: (dispatch,name,email,password,country_code,phone,badminton_level,occupation,hobby) => {
    axios.post('user/register', {
      email: email,
      password: password
    })
    .then((response) => {
      if(response.data.success === false) {
        dispatch(authError()); 
        alert('發生錯誤，請再試一次！');
        window.location.reload();        
      } else {
        if (!response == null) {   
          dispatch(authComplete());
          
        }
      }
    })
    .catch(function (error) {
      dispatch(authError());
    });
  },


  // 使用者登入(信箱)
  login: (dispatch, email, password) => {
    axios.post('user/login', {
      email: email,
      password: password
    })
    .then((response) => {
      if(response.data.success === false) {
        dispatch(authError()); 
        alert('發生錯誤，請再試一次！');
        window.location.reload();        
      } else {
        if (!response == null) {   
          dispatch(authComplete());
          
        }
      }
    })
    .catch(function (error) {
      dispatch(authError());
    });
  },

  // 使用者更新資訊   
  userUpdate: (dispatch,token,country_code,phone,home,badminton_level) => {

    axios.put('user', {
      home: home,
      phone: phone,
      country_code: country_code,
      badminton_level: badminton_level,
    })
    .catch(function (error) {
      dispatch(authError());
    });
  },
};