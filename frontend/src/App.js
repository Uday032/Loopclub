import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import SubscriptionForm from './components/Forms/Subscriptions';

//Bootstrap Components
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
        <Container>
          <div>
            <SubscriptionForm />
          </div>
        </Container>
    </div>
  );
}

export default App;
