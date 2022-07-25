import "../stylesheets/writeEmail.css";
import backArrow from "../assets/icons/back-arrow.png";

function WriteEmail() {
  return (
    <section className="new-email__section">
      <div>
        <img className="user-img" src="https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png" />
      </div>
      <div className="email-box">
        <div className="new-email_header">
        <img src={backArrow} alt="reply button" className="go-back_button" />
        <h4 className="email-address">Freepik Company(no-reply@freepik.com)</h4>
        </div>
        <input type="text" placeholder="Write your email here" className="new-email_input"></input>
        <div>
            <nav>
                <ul className="new-email_list">
                    <li><button className="send-button">Send</button></li>
                    <li><span className="material-symbols-outlined">text_format</span></li>
                    <li><span className="material-symbols-outlined">attach_file</span></li>
                    <li><span className="material-symbols-outlined">attachment</span></li>
                    <li><span className="material-symbols-outlined">add_reaction</span></li>
                    <li><span className="material-symbols-outlined">add_to_drive</span></li>
                    <li><span className="material-symbols-outlined">imagesmode</span></li>
                    <li><span className="material-symbols-outlined">add_to_drive</span></li>
                    <li><span className="material-symbols-outlined">work_history</span></li>
                    <li><span className="material-symbols-outlined">drive_file_rename_outline</span></li>
                </ul>
            </nav>
        </div>
      </div>
    </section>
  );
}

export default WriteEmail;
