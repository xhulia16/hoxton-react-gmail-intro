import "./App.css";

import Header from "./components/header";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/MainBody"

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
