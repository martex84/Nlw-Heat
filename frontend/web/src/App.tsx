import React, { useState } from 'react';

import style from "./styles/App.module.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={style.ContentWrapper}>
      <h1>
        Teste H1
      </h1>
    </main>
  )
}

export default App
