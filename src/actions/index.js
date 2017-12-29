import {
  FETCHING_MAILS,
  START,
  SELECT_MAIL,
  UNSELECT_MAIL
} from './ActionTypes';

export const getMailsData = () => ({
  type: FETCHING_MAILS + START,
  callAPI: true
});

export const selectMail = id => ({
  type: SELECT_MAIL,
  payload: {id},
  callAPI: true
});

export const unSelectMail = () => ({
  type: UNSELECT_MAIL
});