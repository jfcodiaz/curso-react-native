import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';
import CONSTANTES from './CONSTANTES';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case 'AUMENTAR_REDUCER_PRUEBA':
      return [...state, 1];
    default:
      return state;
  }
};


const sagaMiddleware = createSagaMiddleware();

const reducerSesion = (state = null, action) => {
  switch (action.type) {
    case CONSTANTES.ESTABLECER_SESION:
      console.log('Action->', action, action.usuario);
      return action.usuario;
    case CONSTANTES.CERRAR_SESSION:
      return null;
    default:
      return state;
  }
};
const reducers = combineReducers({
  reducerSesion,
  reducerPrueba,
  form,
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(functionPrimaria);

export default store;
