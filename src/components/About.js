import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent component DID mount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is react series</h2>
        <div>
          LoggedIn
          <UserContext.Consumer>
            {(data) => <h2>{data.loggedIn}</h2>}
          </UserContext.Consumer>
        </div>
        <User name={"Yogesh Thakur (function)"} />
        {/* / <UserClass name={"First"} /> */}
        {/* <UserClass name={"Second"} /> */}
      </div>
    );
  }
}

export default About;
