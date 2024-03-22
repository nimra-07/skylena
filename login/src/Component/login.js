import {Component}from "react";
import"./login.css";
class Sha extends Component{
    render(){
        return(
            <form>
            <div className="Login">
            <h1>Login</h1>
            <form>
            <div className="text_area">
                <input type="text"
                id="Username"
                name="Username"
                defaultValue="Username"
                className="input"></input>
            </div>

            <div className="text_area">
                <input type="password"
                id="password"
                name="password"
                defaultValue="password"
                className="input"></input>
            </div>

            <input type="submit" value="Submit" className="btn"></input>
            
            </form>
            </div>
            </form>
        )
    }
}
export default Sha; 