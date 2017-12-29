import {
  SELECT_MAIL, UNSELECT_MAIL
} from '../actions/ActionTypes';

const SelectedMail = (state = {}, {type, payload}) => {
  switch (type) {
    case SELECT_MAIL:
      return {
        ...payload
      };
    case UNSELECT_MAIL:
      return {};

    default:
      return state;
  }
};

export default SelectedMail;
