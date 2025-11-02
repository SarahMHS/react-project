import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import style from './assets/styles/app.module.scss'
import LanguageSwitch from './components/LanguageSwitch'
import { LanguageProvider } from "./contexts/LanguageContext"

function App() {

  return (
    <>
    <LanguageProvider>
      <LanguageSwitch />
      <div className={`d-flex flex-column ${style.appContainer}`}>
        {/* <Header></Header> */}
        <Content></Content>
        <Footer></Footer>
      </div>
    </LanguageProvider>

    </>
  )
}

export default App
