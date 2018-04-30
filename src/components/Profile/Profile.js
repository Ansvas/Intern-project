import React, { Component } from 'react';
import {RaisedButton} from "material-ui";
import {Avatar} from "material-ui";
import {logout} from "../../helpers/auth";
import './Profile.css'
import {Login} from "../../components/Login/Login";

const appTokenKey = "appToken";


class Profile extends React.Component {


    constructor(props) {
        super(props);
        var name=JSON.parse(localStorage.getItem('user_name'));
        console.log(name);
        var url=JSON.parse(localStorage.getItem('user_url'));
        var email=JSON.parse(localStorage.getItem('user_email'));
             console.log(url);
             console.log(name);
             console.log(email);

        this.state = {
            firebaseUser: JSON.parse(localStorage.getItem("firebaseUser")),
            name: name,
            url: url,
            email: email

        };
        console.log(this.state.name);

     //   console.log("Username:", this.state.user_name);
        console.log("State:", this.state.firebaseUser);

        this.handleLogout = this.handleLogout.bind(this);
    }

                


    	componentWillMount(){
    		console.log("123");
    		fetch('https://jsonplaceholder.typicode.com/posts')
    		.then(res =>res.json())
    		.then(data =>console.log(data));

    }


    handleLogout() {
        logout().then(function () {
            localStorage.removeItem(appTokenKey);
            this.props.history.push("/login");
            console.log("user signed out from firebase");
        }.bind(this));

    }

    render() {

     /*   	const postItems = this.state.posts.map(post =>(
        		<div key={post.id}>
        		<h3>{post.title}</h3>
        		<p>{post.body}</p>
        			</div>
        			));*/
console.log(this.props.name);


        return (
<div className="container">
            <div className="main">
                <div className="batn">
                    <RaisedButton
                        backgroundColor="#a4c639"
                        labelColor="#ffffff"
                        label="Sign Out"
                        onTouchTap={this.handleLogout}
                    />
                </div>


            <h2>Your Profile</h2>
            <div className="pro">
            <h3>Name: {this.state.name}</h3>
            <div >
            <img src={this.state.url} alt="Mountain View">        
            </img>
            </div>
  
                </div>
            </div>
            </div>
        );
    }
}

export default Profile;




