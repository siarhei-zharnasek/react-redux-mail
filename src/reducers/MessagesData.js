import {
	FETCHING_MAILS_START,
	FETCHING_MAILS_SUCCESS,
	FETCHING_MAILS_FAIL
} from '../actions/ActionTypes';

const initialState = {
	data: []
};

const MessagesData = (state = initialState, {type, payload}) => {
	switch(type) {
		case FETCHING_MAILS_START:
			return {
				...state,
				fetching: true
			};

		case FETCHING_MAILS_SUCCESS:
			return {
				...state,
				data: payload,
				fetching: false
			};

		case FETCHING_MAILS_FAIL:
			return {
				...state,
				fetching: false,
				fail: true
			};

		default:
			return state;
	}
};

export default MessagesData;
