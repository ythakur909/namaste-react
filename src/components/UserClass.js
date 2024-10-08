import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://picsum.photos/200/300",
      },
    };
    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component DID mount");
    const data = await fetch("https://api.github.com/users/ythakur909");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    this.timer = setInterval(() => {
      console.log("Delay");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentwillunmount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h1>Location:{location}</h1>
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h2>Count:{this.state.count}</h2>
        <h2>Age:{this.state.age}</h2>
        <h3>Address: Bangalore</h3>
        <h3>Contact: ythakur909@gmail.com</h3> */}
      </div>
    );
  }
}

export default UserClass;
