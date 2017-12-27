import {
  SELECT_MAIL
} from '../actions/ActionTypes';

const SelectedMail = (state = {}, {type, payload}) => {
  switch (type) {
    case SELECT_MAIL:
      return {
        ...payload
      };

    default:
      return state;
  }
};

export default SelectedMail;
