import {replace} from 'react-router-redux';

import {
  FETCHING_MAILS,
  START,
  SELECT_MAIL,
  UNSELECT_MAIL,
  SUCCESS,
  FAIL
} from './ActionTypes';
import {fetchInboxEmailById, fetchInboxEmails} from "../services/InboxEmails";


export const getMailsData = () => (dispatch, getState) => {
  const {MessagesData: {data}} = getState();
  if (data.size !== 0) return;

  dispatch({type: FETCHING_MAILS + START,});

  return fetchInboxEmails()
    .then(
      response => {
        dispatch({type: FETCHING_MAILS + SUCCESS, payload: response});
      },
      error => {
        dispatch({type: FETCHING_MAILS + FAIL, payload: error});
        dispatch(replace('/error'));
      })
};

export const selectMail = (id) => dispatch => {


  dispatch({type: SELECT_MAIL + START, payload: {id}});

  return fetchInboxEmailById(id)
    .then(
      response => {
        dispatch({type: SELECT_MAIL + SUCCESS, payload: response});
      },
      error => {
        dispatch({type: SELECT_MAIL + FAIL, payload: error});
        dispatch(replace('/error'));
      })
};

export const unSelectMail = () => ({
  type: UNSELECT_MAIL
});
