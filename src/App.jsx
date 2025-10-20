import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import style from './assets/styles/app.module.scss'

function App() {

  return (
    <>
      <div className={`d-flex flex-column ${style.appContainer}`}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
