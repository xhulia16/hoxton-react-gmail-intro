import "../stylesheets/emailMain.css";

import Toolbar from "./Toolbar";
import Article from "./EmailArticle";
import WriteEmail from "./WriteEmail";

function Main(){
    return(
        <main className="email-view">
        <Toolbar />
        <Article />
        <WriteEmail/>
      </main>
    )
}

export default Main