import Todo from './store/Todo/index'
import { Provider } from 'react-redux'
import reducer from './store/reducers/index'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
const store = createStore(reducer);
const app = (
  <Provider store={store}>
    <Todo />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));