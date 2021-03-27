import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { IoThumbsUpSharp } from 'react-icons/all';
import config from '../config';

class UserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.match.params.username,
      currentLeaderboard: {},
    };
  }

  async componentDidMount() {
    const url = `${config.api}/wonkywheel?username=${this.state.username}`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({
      standard: json.standard,
      currentLeaderboard: json.currentLeaderboard,
      lastLeaderboard: json.lastLeaderboard,
      top: json.top,
    });
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <p>{this.state.username}</p>
        {this.leaderboard()}
      </Container>
    );
  }

  leaderboard() {
    return (
      <Container>
        <h1>Vote for next week!</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Entry</th>
              <th>Popularity</th>
              <th>Vote</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.currentLeaderboard).map((entry, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{entry}</td>
                  <td>{this.state.currentLeaderboard[entry]}</td>
                  <td><IoThumbsUpSharp /></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
    );
  }

}

export default UserPage;
