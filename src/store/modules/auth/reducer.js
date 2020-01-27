import {produce} from 'immer';
const INITIAL_STATE  ={
  isLogged:false
}

export default function (state=INITIAL_STATE, actions){
  return produce(state,draft =>{
    switch (actions.type) {
      case '@auth/LOGGIN_SUCCESS':{
        draft.isLogged = true;
        break;
      }
      case '@auth/SIGNED_OUT':{
        draft.isLogged = false;
        break;
      }
      default:

    }
  })
}
