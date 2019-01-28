import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Table} from 'reactstrap';
import { InputNumber } from 'antd';
import FbScoreService from '../../service/FacebookScoreService'

class FacebookScoreModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      facebook:[{
        id: 1,
        like:0,
        share: 0,
      },{
        id: 2,
        like:0,
        share: 0,
      }]
    };
    this.toggle = this.toggle.bind(this);
  }

  onChange = (e,id,type) => {
		e.preventDefault()
		this.setState.facebook[id]({
			type : e.target.value,
		});
	}

  toggle() {
    this.sendFBScore()
    this.setState({
      modal: !this.state.modal
    });
  }

  sendFBScore(){
    FbScoreService.sendFBScore(this.state.facebook)
  }

  render() {
    return (
      <div>
        <Button color="danger" size="sm" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>FACEBOOK IT3K</ModalHeader>
          <ModalBody>
            <Table>
						<thead>
							<th>Name</th>
							<th>University</th>
							<th>Like</th>
							<th>Share</th>
						</thead>
						<tr>
							<td>Name 1</td>
							<td>บางมด</td>
							<td><InputNumber min={0} onChange={this.onChange} value={this.state.value}/></td>
							<td><InputNumber min={0} /></td>
						</tr>
					</Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>SAVE</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FacebookScoreModal;