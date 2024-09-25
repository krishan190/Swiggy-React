import Profile from "./ProfileClass";
import ProfileFunctionalCmp from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }

  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About us page</h1>
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
