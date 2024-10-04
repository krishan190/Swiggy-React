import ProfileFunctionalCmp from "./Profile";
import { Component } from "react";
import userContext from "./../utils/UserContext";

class About extends Component {
  
  
  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About us page</h1>
        <userContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}- {user.email}
            </h4>
          )}
        </userContext.Consumer>
        <p>
          This is react live course whichh is taught by cool teacher that is
          Akshay Saini
        </p>
        <ProfileFunctionalCmp name={"KrishanFun"} />
        {/* <Profile name={"FirstChild"} /> */}
      </div>
    );
  }
}
export default About;
