const initialState = {
  chatroom_data: []
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_ALL_COMMENTS': {
      console.log("GET_ALL_COMMENTS" , action)
			return { ...state, chatroom_data: action.payload }
			break
		}
	}

	return state
}
