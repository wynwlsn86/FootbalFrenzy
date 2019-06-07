import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import {updateTeam, updatePlayersTeam, deleteTeam} from '../../services/apiServices';
import League from '../League/League';
import './Team.css';

// ################################################
// get the pages to render changes by making a state that changes on update

// Reset Player Id on delete

// render the team a player is on in waiver wire

// create user

// create League
// ###########################################################

class Team extends Component {
  constructor() {
    super();
    this.state = {
      removePlayer: null,
      updated: false,
    };
  }

  componentDidMount() {
    this.setState({updated: false});
  }

  handleDeleteTeam = async (e) => {
    let id = e.target.id
    console.log(id)
    let deletedTeam = await deleteTeam(id)
    console.log('deleted')
  }
  renderDeleteButton = (name, pos) => {
    if (name) {
      return (
          <button id={pos} name={name} onClick={this.deletePlayer} className="team-page-delete-button">
            Delete
          </button>
      );
    }
  };
  deletePlayer = async event => {
    event.preventDefault();
    const pos = event.target.id;
    console.log(pos, 'pos');
    const deleteP = {
      [pos]: null,
    };
    let update = await updateTeam(this.props.selectedTeam.id, deleteP);
    console.log(update);
    let params = {
      team_id: null,
    };
    this.setState({updated: !this.state.updated});
    await this.props.updateStateOfUserTeam();

    console.log(this.state.updated);
    // const name = e.target.name
    // const resetPlayer = this.props.allPlayers.find((player) => {
    //   console.log(player)
    //   return player.displayName == name
    //     }
    //   )
    // console.log(name)
    // let updatePlayer = updatePlayersTeam(resetPlayer.id ,params)
  };

  render() {
    const {selectedTeam} = this.props;

    return (
      <div>
        <Button>
          <Link
            to={{
              pathname: `/waiverwire`,
              state: {selectedTeam},
            }}
          >
            <h1>Waiver Wire</h1>
          </Link>
        </Button>

        <Button id={this.props.selectedTeam.id} onClick={this.handleDeleteTeam}>
          <h1 id={this.props.selectedTeam.id}>Delete Team</h1>
        </Button>

        <div className="team-page-title">
          <h1>{selectedTeam.name}</h1>
        </div>
        <div className="team-page-row">
          <div className="team-page-column">
            <li className="team-page-stats">
              <div className="team-stat-color-qb">QB: {selectedTeam.qb}{' '}
              {this.renderDeleteButton(selectedTeam.qb, 'qb')}</div>
            </li>
            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              RB1: {selectedTeam.rb1}{' '}
              {this.renderDeleteButton(selectedTeam.rb1, 'rb1')}</div>
            </li>

            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              RB2: {selectedTeam.rb2}{' '}
              {this.renderDeleteButton(selectedTeam.rb2, 'rb2')}</div>
            </li>

            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              WR1: {selectedTeam.wr1}{' '}
              {this.renderDeleteButton(selectedTeam.wr1, 'wr1')}</div>
            </li>

            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              WR2: {selectedTeam.wr2}{' '}
              {this.renderDeleteButton(selectedTeam.wr2, 'wr2')}</div>
            </li>

            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              TE: {selectedTeam.te}{' '}
              {this.renderDeleteButton(selectedTeam.te, 'te')}</div>
            </li>
          </div>
          <div className="team-page-column">
            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              FLEX: {selectedTeam.flex}{' '}
              {this.renderDeleteButton(selectedTeam.flex, 'flex')}</div>
            </li>

            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              DEF: {selectedTeam.def}{' '}
              {this.renderDeleteButton(selectedTeam.def, 'def')}</div>
            </li>

            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              K: {selectedTeam.k} {this.renderDeleteButton(selectedTeam.k, 'k')}</div>
            </li>

            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              Bench 1: {selectedTeam.bn1}{' '}
              {this.renderDeleteButton(selectedTeam.bn1, 'bn1')}</div>
            </li>

            <li className="team-page-stats">
            <div className="team-stat-color-qb">
              Bench 2: {selectedTeam.bn2}{' '}
              {this.renderDeleteButton(selectedTeam.bn2, 'bn2')}</div>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
