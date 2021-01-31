import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import "./styles/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    localStorage.setItem("username", "edkillah");
    localStorage.setItem("pwd", "123456");
  }

  state = { email: "", password: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("username");
    const pwd = localStorage.getItem("pwd");

    if (this.state.email === user && this.state.password === pwd) {
      localStorage.setItem("isLoggedIn", true);
      this.props.handleLoggin(true);
      this.props.history.push("/todo");
    } else {
      localStorage.setItem("isLoggedIn", false);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <main className="layout">
          <Paper className="paper">
            <Avatar className="avatar">
              <LockIcon />
            </Avatar>
            <Typography variant="h2">Sign in</Typography>
            <form onSubmit={this.handleSubmit} className="form">
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(Login);
