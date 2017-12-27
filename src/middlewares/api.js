import {
  FETCHING_MAILS,
  SUCCESS,
  START,
  SELECT_MAIL
} from '../actions/ActionTypes';

const messages = [{
  id: 0,
  sender: 'Ivan Petrov',
  subject: 'mocked subject here',
  date: '2:14 pm'
}, {
  id: 1,
  sender: 'Mihal Mikhalich',
  subject: 'Hello, do you remember me?',
  date: '11:54 am'
}];

export default store => next => action => {
  const {callAPI, type, payload} = action;

  if (!callAPI) {
    return next(action);
  }

  if (type === FETCHING_MAILS+START) {
    setTimeout(() => next({
      type: FETCHING_MAILS+SUCCESS,
      payload: messages
    }), 400);
  }

  if (type === SELECT_MAIL) {
    const mail = messages.find(({id}) => id === Number(payload.id));

    setTimeout(() => next({
      type: SELECT_MAIL,
      payload: mail
    }), 400);
  }
}