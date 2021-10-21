import { useContext } from 'react';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './context/auth';


import style from "./styles/App.module.scss"

function App() {

  const { user } = useContext(AuthContext);

  return (
    <main className={style.ContentWrapper}>
      <MessageList />
      {
        !!user ? <SendMessageForm /> : <LoginBox />
      }
    </main>
  )
}

export default App
