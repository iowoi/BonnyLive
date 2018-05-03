
const initialState = {
	newGroup:{},
	levels: []
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'CREATE_GROUP': {
			return { ...state, data: action.payload }
			break
		}

		case 'GET_LEVELS': {
			return { ...state, levels: action.payload }
			break
		}
	}

	return state
}
