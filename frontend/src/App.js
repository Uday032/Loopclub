import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"

//Components
import SubscriptionForm from './components/Forms/Subscriptions'
import SubscribedUsersTable from './components/SubscribedUsersTable'

//Bootstrap Components
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
        <Container>
          <div>
            <BrowserRouter>
              <Switch>
                <Route path="/subscribed/" component={SubscribedUsersTable} />
                <Route path="/" component={SubscriptionForm} />
              </Switch>
            </BrowserRouter>
          </div>
        </Container>
    </div>
  );
}

export default App;
