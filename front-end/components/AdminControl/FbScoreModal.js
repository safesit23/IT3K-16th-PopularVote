import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import { InputNumber, Select } from 'antd';
import { FormGroup, Label, Input } from 'reactstrap';
import { Headline, Paragraph,SubCaption, TitleBl } from '../Core/Text';
import AdminService from '../../service/AdminService'
import CompetitorService from '../../service/CompetitorService'

const Option = Select.Option;

let competitorModal = [];
class FacebookScoreModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      competitorModal: {},
      facebook:{
        id: 0,
        like: 0,
        share: 0,
      }
    };
    this.toggle = this.toggle.bind(this);
  }

  async componentDidMount() {
		const competitorFB = await CompetitorService.getCompetitorByAdmin()
		console.log('=>FBModal-competitor : ', competitorFB.data)
		await this.setDataCompetitor(competitorFB.data)
  }

  setDataCompetitor = async (competitor) => {
    let competitor_data = []
    for (let index = 0; index < competitor.length; index++) {
      competitor_data.push({
        id: competitor[index].idCompetitor,
        nickname: competitor[index].nickname,
        university: competitor[index].university,
      })
    }
    this.setState({
      competitorModal: competitor_data
    })
    competitorModal =  competitor_data
    console.log('=>FBModal-State : ', this.state.competitorModal)
  }

  onChangeId = (e) => {
    e.preventDefault()
    this.setState({
			id: e.target.value,
		});
  }
  
  onChangeLike = (e) => {
    e.preventDefault()
    this.setState({
			like: e.target.value,
		});
  }
  
  onChangeShare = (e) => {
    e.preventDefault()
    this.setState({
			share: e.target.value,
		});
	}

  toggle= ()=> {
    this.sendFBScore()
    this.setState({
      modal: !this.state.modal
    });
  }

  sendFBScore = async ()=>{
    await AdminService.sendFBScore(this.state.facebook)
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
							<th>Name, University</th>
							<th>Like</th>
							<th>Share</th>
						</thead>
						<tr>
							<td>
              <FormGroup>
                <Input type="select" name="select">
                {competitorModal.map((data,i) => {
                  return (
                    <option key={i}>{data.nickname}, {data.university}</option>
                  )
                })}
                </Input>
              </FormGroup>
              </td>
							<td><InputNumber min={0} onChange={this.onChangeLike}/></td>
							<td><InputNumber min={0} onChange={this.onChangeShare}/></td>
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