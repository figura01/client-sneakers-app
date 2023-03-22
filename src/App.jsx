// exemple charge un svg depuis le rep asset => import reactLogo from './assets/react.svg'
// exemple charge un svg depuis le rep public => import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
const App = () => {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div id="content-wrapper" className="mui--text-center">
          test
        </div>
      </main>

    </div>
  )
}

export default App
