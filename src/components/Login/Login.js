import React from "react";
import {FontIcon, RaisedButton} from "material-ui";
import {loginWithGoogle} from "../../helpers/auth";
import {firebaseAuth} from "../../config/constants";
import './Login.css'
import Profile from "../Profile/Profile"


const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";
const user_email="u_email";
const user_url="u_url";
const user_name="u_name";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            splashScreen: false,
            email: '',
            Password: ''             
        };

        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }



    handleGoogleLogin() {
        loginWithGoogle()
            .catch(function (error) {
                alert(error); // or show toast
                localStorage.removeItem(firebaseAuthKey);
            });
        localStorage.setItem(firebaseAuthKey, "1");
    }

    componentWillMount() {

        if (localStorage.getItem(appTokenKey)) {
            this.props.history.push("/home");
            return;
        }

        firebaseAuth().onAuthStateChanged(user => {
            if (user) {
                console.log("User signed in: ", JSON.stringify(user));
                console.log("User name: ", JSON.stringify(user.displayName));
              //  name=JSON.stringify(user.displayName);
               // url=JSON.stringify(user.photoURL);
               // email= JSON.stringify(user.email);
                localStorage.setItem(user_name,JSON.stringify(user.displayName));

                localStorage.setItem(user_url,JSON.stringify(user.photoURL));

                localStorage.setItem(user_email,JSON.stringify(user.email));

                var email=JSON.parse(localStorage.getItem(user_email));
                console.log(email);


                localStorage.removeItem(firebaseAuthKey);

                // here you could authenticate with you web server to get the
                // application specific token so that you do not have to
                // authenticate with firebase every time a user logs in
                localStorage.setItem(appTokenKey, user.uid);

                // store the token
                this.props.history.push("/home");
            }
        });
    }

  handleLoginnameChange(login) {
    this.setState(user_name: login)
  }

    render() {
        <Profile user_name={this.state.user_name}
           handleLoginnameChange={this.handleLoginnameChange} />

        console.log(firebaseAuthKey + "=" + localStorage.getItem(firebaseAuthKey));
        if (localStorage.getItem(firebaseAuthKey) === "1") return <SplashScreen />;
        return <LoginPage handleGoogleLogin={this.handleGoogleLogin}/>;
    }
}

const iconStyles = {
    color: "#ffffff"
};
const LoginPage = ({handleGoogleLogin}) => (

<div className="full_div">

<div className="container">
  <div className="container">
      <div className="card-panel grey lighten-5">


<div className="tabcontent">

<form method="POST" action="/student">



<div className="container">
   <label><b><font size = "6"> Login/Registration </font></b></label>
   <div className="input_box">
   <input type="text" id="prn" name="prn" placeholder="Enter your Email " required>
</input>

<input type="text" id="prn" name="prn" placeholder="Enter your Password " required>
</input>
</div>
<div className="nbutton">
<a href="/login" className="button">Login</a>
<a href="/signup" className="button success">Signup</a>
</div>

    <div className="gbutton" >    
       
            <RaisedButton 
                label="Sign in with Google"
                labelColor={"#ffffff"}
                backgroundColor="#dd4b39"
                icon={<FontIcon className="fa fa-google-plus" style={iconStyles}/>}
                onClick={handleGoogleLogin}
            />     
    </div>
   
</div>
 </form>
</div>


 </div>
</div>
</div>

</div>

);
const SplashScreen = () => (<p>Loading...</p>)
