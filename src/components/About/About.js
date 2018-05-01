import React from "react";
import './About.css'

const appTokenKey = "appToken";
const firebaseAuthKey = "firebaseAuthInProgress"; // also duplicated in Login.js
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                <div className="nav">
                <h3>Navigation</h3>
                <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">contact</a></li>
                </ul>
                </div>
                <div className="main">
                <h4>About</h4>
                

<p>
 "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
</p>
<p>
 "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
</p>
<p>
 "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
</p>
<p>
 "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
</p>
<p>
 "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
</p>
<p>
 "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
</p>
 

                </div>
                </div>

            </div>
          
        );
    }
}