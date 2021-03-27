import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Jumbotron className="jumbotron">
        <Container>
        <h1>Wonky Wheel</h1>
        <p>
          This is a community based Spin the Wheel. This works for any Twitch username, simply go to https://wonkywheel.com/{'<username>'}, 
          there you will be able to vote on the entries in the wheel for that stream.
        </p>
        <p>
          <Button variant="light" href="/user/erobb221">Example</Button>
        </p>
        </Container>
      </Jumbotron>
    </>
  );
}

export default App;
