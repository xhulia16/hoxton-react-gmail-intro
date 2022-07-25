import Title from "./Title";
import EmailHeader from "./EmailHeader";
import EmailBody from "./EmailBody";
import EmailActions from "./EmailActions";

function Article(){
    return(
        <article className="email-content">
        <Title/>
       <EmailHeader/>
         <EmailBody/>
        <EmailActions/>
       </article>)
}

export default Article
