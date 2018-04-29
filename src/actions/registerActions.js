import {
  REGISTER,
   REGISTER_USER
  } from '../constants/actionTypes'
//匯入Props靜態類型的定義
import type { RegisterProp } from '../definitions/TypeDefinition.js';


// 處理把項目的新增，
// 接著FecthRegister之後，
// 丟到reducer去
export const onRegister = (payload: RegisterProp) => (
    { type: REGISTER,
      payload
      }

  )

  // 處理到伺服器上新增資料，
  // POST method
  // 真正的執行程式碼在middlewares/UserRegister.js裡，
  // 執行後會回呼callback function
  export const FecthRegister = (payload: RegisterProp) => (
      {
        type: REGISTER_USER,
        payload,
        callback: (response: RegisterProp, dispatch: Function) => dispatch(onRegister(response)),
      }
    )
