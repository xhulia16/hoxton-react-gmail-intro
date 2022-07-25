import "./App.css";

import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";

function Header(){
  return(
    <header className="header">
        <div className="left-menu">
          <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>

          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </div>

        <div className="search">
          <input className="search-bar" placeholder="Search mail" />
        </div>
      </header>
  )
}

function LeftMenu(){
  return(
    <nav className="left-menu">
    <ul className="inbox-list">
      <li className="item active">
        <span className="label">Inbox</span>
        <span className="count">3</span>
      </li>
      <li className="item">
        <span className="label">Starred</span>
        <span className="count">2</span>
      </li>

      <li className="item toggle">
        <label htmlFor="hide-read">Hide read</label>
        <input id="hide-read" type="checkbox" checked={false} />
      </li>
    </ul>
  </nav>
  )
}

function Toolbar(){
  return(
    <nav className="email-toolbar">
    <ul>
      <li>
        <img className="icon" src={backArrow} alt="reply button" />
      </li>
      <li>
        <img className="icon" src={downloadButton} alt="archive button" />
      </li>
      <li>
        <img className="icon" src={rubbishButton} alt="delete button" />
      </li>
    </ul>
    <div className="space"></div>
    <div>
      <p>1 of 25</p>
      <button>&lt;</button>
      <button>&gt;</button>
    </div>
  </nav>
  )
}

function Title(){
  return(
    <div className="title">
    <h1>Welcome to Flaticon</h1>
  </div>
  )
}

function EmailHeader(){
  return(
    <header className="email-content--header">
    <div className="avatar"></div>
    <div className="email-info">
      <div className="sender-info">
        <h2>Freepik Company</h2>
        <em>&lt;no-reply@freepik.com&gt;</em>
      </div>
      <div className="user-info">
        <p>
          to me <em>&lt;nicolas@hoxtonacademy.co.uk&gt;</em>
        </p>
      </div>
    </div>
    <div className="date-info">
      <p>17 March 2021, 09:33</p>
    </div>
    <div className="email-action-icons">
      <ul>
        <li>
          <img className="icon" src={backArrow} alt="reply button" />
        </li>
        <li>
          <img
            className="icon"
            src={rateStarButton}
            alt="star button"
          />
        </li>
        <li>
          <img
            className="icon"
            src={rubbishButton}
            alt="delete button"
          />
        </li>
      </ul>
    </div>
  </header>
  )
}

function EmailBody(){
  return(
<section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
  )
}

function EmailActions(){
  return(<section className="email-actions">
  <button>Reply</button>
  <button>Forward</button>
</section>)
}

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
