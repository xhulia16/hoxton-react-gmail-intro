import "./App.css";

import Header from "./components/header";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/MainBody";
import WriteEmail from "./components/WriteEmail";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
      <WriteEmail/>
    </div>
  );
}

export default App;
