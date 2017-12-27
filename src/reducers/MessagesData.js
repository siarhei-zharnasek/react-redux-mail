import {
  FETCHING_MAILS,
  START,
  SUCCESS,
  FAIL
} from '../actions/ActionTypes';

const initialState = {
  data: []
};

const MessagesData = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCHING_MAILS + START:
      return {
        ...state,
        fetching: true
      };

    case FETCHING_MAILS + SUCCESS:
      return {
        ...state,
        data: payload,
        fetching: false
      };

    case FETCHING_MAILS + FAIL:
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
