import { Route, Switch } from 'react-router-dom';
import Menu from './Components/Navigation';
import Heroes from './Components/Heroes';
import Messages from './Components/Messages';
import Dashboard from './Components/Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import HeroDetails from './Components/HeroDetatil';
function App() {
  return (
    <>
    <Menu/>
    <Provider store={store}>
     <Switch>
   <Route exact path="/heroes" component={Heroes}/>
   <Route exact path="/dashboard" component={Dashboard}/>
   <Route exact path="/" component={Dashboard}/>
   <Route exact path='/detail/:id' component={HeroDetails}/>
 </Switch>
 <Messages/>
 </Provider>
    </>
   
     );
   }

export default App;
