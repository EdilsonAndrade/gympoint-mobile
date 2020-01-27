import React from 'react';
import {useSelector} from 'react-redux';
import createRouter from './routes';
import 'react-native-gesture-handler';

const App= () =>{

  const isLogged = useSelector(state=>state.auth.isLogged);

  const Routes = createRouter(isLogged);
  return <Routes />;
}

export default App;
