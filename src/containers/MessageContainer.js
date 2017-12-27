import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectMail} from '../actions';

class MessageContainer extends Component {
	componentDidMount() {debugger
		const {id} = this.props.match.params;
		this.props.selectMail(id);
	}

	render() {
		const {sender, subject, date} = this.props.SelectedMail;

		return (
			<div>
				<span>{sender}</span>
				<span className="message-subject">{subject}</span>
				<span>{date}</span>
			</div>
		);
	}
}

const mapStateToProps = ({SelectedMail}) => ({SelectedMail});
const mapDispatchToProps = {selectMail};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);