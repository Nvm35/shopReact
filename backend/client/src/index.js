import React,{createContext} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/deviceStore';

const container = document.getElementById('root');
const root = createRoot(container)

export const Context = createContext(null);

const RenderComponent = () => {
  return <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
  }}>
    <App />
  </Context.Provider>
}


root.render(<RenderComponent />)

// ReactDOM.render(
//   <Context.Provider value={{
//       user: new UserStore(),
//   }}>
//       <App />
//   </Context.Provider>,
// document.getElementById('root')
// );
