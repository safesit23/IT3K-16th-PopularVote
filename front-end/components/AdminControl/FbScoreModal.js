import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import { FormGroup, Input } from 'reactstrap';
import AdminService from '../../service/AdminService'
import CompetitorService from '../../service/CompetitorService'


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
    let fb = this.state.facebook
    fb = {
      ...fb,
      id: e.target.value
    }
    console.log('------fb is',e.target.value)
    this.setState({
			facebook: fb
    });
  }

  onChangeLike = (e) => {
    e.preventDefault()
    let fb = this.state.facebook
    fb = {
      ...fb,
      like: e.target.value
    }
    console.log('------fb is',fb)
    this.setState({
			facebook: fb
    });
  }

  onChangeShare = (e) => {
    e.preventDefault()
    let fb = this.state.facebook
    fb = {
      ...fb,
      share: e.target.value
    }
    console.log('------fb is',fb)
    this.setState({
			facebook: fb
    });
	}

  toggle= ()=> {
    this.setState({
      modal: !this.state.modal
    });
  }

  sendFBScore = async ()=>{
    console.log('sendFBScore:',this.state.facebook)
    await AdminService.sendFBScore(this.state.facebook)
    this.toggle()
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
                <Input type="select" name="select" onChange={this.onChangeId}>
                  <option>select</option>
                {competitorModal.map((data,i) => {
                  return (
                    <option key={i} value={data.id} >{i+1}. {data.nickname}, {data.university}</option>
                  )
                })}
                </Input>
              </FormGroup>
              </td>
							<td><Input min={0} onChange={this.onChangeLike}/></td>
							<td><Input min={0} onChange={this.onChangeShare}/></td>
						</tr>
					</Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.sendFBScore}>SAVE</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FacebookScoreModal;