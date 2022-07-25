import "./App.css";
import "./stylesheets/header.css";
import "./stylesheets/leftMenu.css";
import "./stylesheets/toolbar.css";
import "./stylesheets/title.css";
import "./stylesheets/emailHeader.css";
import "./stylesheets/emailMain.css";
import "./stylesheets/emailActions.css";


import Header from "./components/header";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/MainBody";

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
