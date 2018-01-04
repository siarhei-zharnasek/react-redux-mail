import {Record} from "immutable";

import {
  SELECT_MAIL, UNSELECT_MAIL, SUCCESS, FAIL
} from '../actions/ActionTypes';

const EmailRecord = new Record({
  date: '',
  sender: '',
  subject: '',
  _id: ''
});

const ReducerState = new Record({
  data: new Record({}),
  loading: false,
  error: null
});

const initialState = new ReducerState();

const SelectedMail = (state = initialState, {type, payload}) => {
  switch (type) {
    case SELECT_MAIL + SUCCESS:
      return state.withMutations(s => s.set('data', new EmailRecord(payload)));

    case UNSELECT_MAIL:
      return state.withMutations(s => s.set('data', new EmailRecord({})));

    default:
      return state;
  }
};

export default SelectedMail;
