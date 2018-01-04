import {fetchData, encodeParams} from './api';

export function fetchInboxEmails(params = {}) {
  let paramsURL = Object.keys(params).length > 0 ? `&${encodeParams(params)}` : '';
  return fetchData('emails?' + paramsURL);
}

export function fetchInboxEmailById(id) {
  return fetchData(`emails/${id}`);
}