const initialState = {
  all_host_data: [],
	activity_data: {}
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_ALL_HOST_ACTIVITY_DATA': {
      console.log("GET_ALL_HOST_ACTIVITY_DATA" , action)
			return { ...state, all_host_data: action.payload.data }
			break
		}
		case 'GET_MY_INFO_ACTIVITY_DATA': {
      console.log("GET_MY_INFO_ACTIVITY_DATA_" , action)
      let data = action.payload;
			return { ...state, activity_data: data }
			break
		}
	}

	return state
}
