import Footer from "./component/Footer";
import Header from "./component/Header";
import RootRouters from "./routes";

import './App.scss'

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main">
        <RootRouters />
      </main>
      <Footer />
    </div>


  )
}

export default App;
