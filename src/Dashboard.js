import React, { Component } from 'react'
import './App.css';
import QuestionBar from "./QuestionBar"

export default class Dashboard extends Component {
    render() {
        return (
            <div  className="question-bar">
                <QuestionBar/>
            </div>
        )
    }
}
