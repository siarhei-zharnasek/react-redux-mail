import {combineReducers} from 'redux';
import MessagesData from './MessagesData';
import SelectedMail from './SelectedMail';

export default combineReducers({
	MessagesData,
    SelectedMail
});