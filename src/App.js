import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import TodoApp from "./components/TodoApp";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLoggin = (logged) => {
    this.setState({ isLoggedIn: logged });
  };

  componentWillMount() {
    this.setState({
      isLoggedIn: localStorage.getItem("isLoggedIn"),
    });
  }

  render() {
    const LoginView = () => <Login handleLoggin={this.handleLoggin} />;

    const TodoAppView = () => <TodoApp />;
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">TODO React App</h1>
          </header>
          <br />
          <br />
          <ul>
            {!this.state.isLoggedIn ? (
              <li>
                <Link to="/">Login</Link>
              </li>
            ) : (
              ""
            )}
            {this.state.isLoggedIn ? (
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            ) : (
              ""
            )}
          </ul>

          <div>
            {this.state.isLoggedIn ? (
              ""
            ) : (
              <Route exact path="/" component={LoginView} />
            )}
            {this.state.isLoggedIn ? (
              <Route path="/todo" component={TodoAppView} />
            ) : (
              ""
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
