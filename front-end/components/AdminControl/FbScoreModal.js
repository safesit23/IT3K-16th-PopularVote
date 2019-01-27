import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Table} from 'reactstrap';
import { InputNumber } from 'antd';
import FbScoreService from '../../service/FacebookScoreService'

class FacebookScoreModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      facebook: {
        1: [0, 0],
        2: [0, 0],
        3: [0, 0],
        4: [0, 0],
        5: [0, 0],
        6: [0, 0],
      },
    };

    this.toggle = this.toggle.bind(this);
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
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
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
							<td><InputNumber min={0}/></td>
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