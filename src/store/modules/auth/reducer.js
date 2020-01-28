import {produce} from 'immer';
const INITIAL_STATE  ={
  isLogged:false,
  userId: null
}

export default function (state=INITIAL_STATE, actions){

  return produce(state,draft =>{
    switch (actions.type) {
      case '@auth/LOGGIN_SUCCESS':{
        const {studentId} = actions.payload;
        draft.isLogged = true;
        draft.userId = studentId;
        break;
      }
      case '@auth/SIGNED_OUT':{
        draft.isLogged = false;
        draft.userId = null;
        break;
      }
      default:

    }
  })
}
