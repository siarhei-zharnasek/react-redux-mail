import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMail} from '../../../actions/index';
import EmailData from "../../../components/Email";

class MessageContainer extends Component {

  componentDidMount() {
    const {id} = this.props;
    this.props.selectMail(id);
  }

  render() {
    const {id, SelectedMail: {id: selectedId}} = this.props;
    const body = selectedId === Number(id) ? <EmailData {...this.props.SelectedMail}/> : null;
    return body;
  }

}

const mapStateToProps = ({SelectedMail}) => ({SelectedMail});
const mapDispatchToProps = {selectMail};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);