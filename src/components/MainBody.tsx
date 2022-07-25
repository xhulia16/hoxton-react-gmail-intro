import "../stylesheets/emailMain.css";

import Toolbar from "./Toolbar";
import Article from "./EmailArticle";

function Main(){
    return(
        <main className="email-view">
        <Toolbar />
        <Article />
      </main>
    )
}

export default Main