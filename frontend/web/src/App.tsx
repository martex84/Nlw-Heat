import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';


import style from "./styles/App.module.scss"

function App() {

  return (
    <main className={style.ContentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}

export default App
