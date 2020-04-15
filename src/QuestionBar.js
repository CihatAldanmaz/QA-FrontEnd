import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faQuestion } from '@fortawesome/free-solid-svg-icons'


export default class QuestionBar extends Component {
    render() {
        return (
            <div>
               <div className="asking">
        <div className="asking-bar">
          <div className="asking-icon">              <FontAwesomeIcon icon={faQuestion} size="3x"/>
</div>
          <textarea name="content" id="content" cols={30} rows={10} maxLength={160} placeholder="Type Your Question" defaultValue={""} />  </div>
        <div className="asking-footer">
          <div className="profile-icon">
              {/* <i className="fas fa-user-circle fa-2x" /> */}
              <FontAwesomeIcon icon={faUserCircle} size="2x"/>
              </div>
          <input type="text" className="name-input" placeholder="Your Name(Optional)" />
          <div className="send-button"><button className="askbutton" type="button">ASK!</button></div>
        </div>
      </div>  
            </div>
        )
    }
}
