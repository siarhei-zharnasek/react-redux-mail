import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMail, unSelectMail} from '../../../actions/index';
import EmailData from "../../../components/Email";

class MessageContainer extends Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.selectMail(id);
  }

  componentWillUnmount() {
    this.props.unSelectMail();
  }

  render() {
    const {_id: selectedId} = this.props.SelectedMail;
    const body = selectedId !== undefined ? <EmailData selectedMailData={this.props.SelectedMail}/> : null;
    return body;
  }

}

const mapStateToProps = ({SelectedMail: {data}}) => ({SelectedMail: data});
const mapDispatchToProps = {selectMail, unSelectMail};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);