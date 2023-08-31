import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';

function BasicExample() {
  return (
    <div className='cards'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/105008756?v=4" />
        <Card.Body>
          <Card.Title>Joao Ramirez</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/105008756?v=4" />
        <Card.Body>
          <Card.Title>Joao Ramirez</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/105008756?v=4" />
        <Card.Body>
          <Card.Title>Joao Ramirez</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;