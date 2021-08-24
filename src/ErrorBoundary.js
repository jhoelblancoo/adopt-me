// mostly took this from the React docs
import { Component } from "react";
import { Link,Redirect } from "react-router-dom";

class ErrorBoundary extends Component{
    state = {hasError: false , redirect: false};
    static getDerivedStateFromError(){
        return {hasError:true}
   }
   componentDidCatch(error,info){
       //I log this to Sentry, Azur Monitor, New Relic, TrackJS
       console.error("ErrorBoundary caught an error", error,info)
   }

   componentDidUpdate(){
    if (this.state.hasError){
        setTimeout(() => this.setState({redirect:true}),5000)
    }
   }

   render(){

        if(this.state.redirect){
            return <Redirect to="/"/>
        } else if(this.state.hasError){
        return(
            <h2>
                this listing has an error. <Link to="/">Click here to go back home</Link>
            </h2>
        )
       }
       return this.props.children;
   }
}
export default ErrorBoundary;