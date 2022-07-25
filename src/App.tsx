import "./App.css";
import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import backArrow from "./assets/icons/back-arrow.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";

import Header from "./components/header";
import LeftMenu from "./components/LeftMenu";
import Toolbar from "./components/Toolbar";
import Title from "./components/Title";
import EmailHeader from "./components/EmailHeader";
import EmailBody from "./components/EmailBody";
import EmailActions from "./components/EmailActions";











function App(): JSX.Element {
  return (
    <div className="app">
      <Header/>
     <LeftMenu/>
      <main className="email-view">
      <Toolbar/>
<article className="email-content">
         <Title/>
        <EmailHeader/>
          <EmailBody/>
         <EmailActions/>
        </article>
      </main>
    </div>
  );
}

export default App;
