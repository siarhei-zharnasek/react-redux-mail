import {List, Record} from 'immutable'

import {
  FETCHING_MAILS,
  START,
  SUCCESS,
  FAIL
} from '../actions/ActionTypes';

const EmailRecord = Record({
  date: '',
  sender: '',
  subject: '',
  _id: ''
});

const ReducerState = new Record({
  data: new List([]),
  loading: false,
  error: null
});

const initialState = new ReducerState();

const MessagesData = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCHING_MAILS + START:
      return state.withMutations(s => s.set('loading', true));

    case FETCHING_MAILS + SUCCESS:
      return state.withMutations(s => {
        return s
          .set('loading', false)
          .set('data', state.data.concat(payload.map(email => new EmailRecord(email))))
      });

    case FETCHING_MAILS + FAIL:
      return state.withMutations(s => s.set('loading', false).set('error', payload));

    default:
      return state;
  }
};

export default MessagesData;
