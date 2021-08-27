import './style.css'
import { Component } from "react";

export class Button extends Component{
    
    render(){
        const {text, onClick, disabled} = this.props;
        return(
            <button onClick={onClick} disabled={disabled} className="btn">{text}</button>
        )
    }
    
}