import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = { count: 0 };

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child constructor Called " + this.props.name);
  }

  async componentDidMount() {
    // APi calls
    const data = await fetch("https://api.github.com/users/krishan190");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    console.log("Child componentDidMount " + this.props.name);
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("CompoenentWillUnmount");
  }

  render() {
    console.log("child render " + this.props.name);

    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h3>location : {this.state.userInfo.location}</h3>
      </div>
    );
  }
}

export default Profile;
