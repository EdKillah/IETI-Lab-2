import React, { Component } from "react";
import { TodoList } from "./TodoList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import moment from "moment";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", priority: 1, dueDate: moment() };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handlePriorityChange(e) {
    if(e.target.value<1 || e.target.value>5) return '';
    this.setState({
      priority: e.target.value,
    });
  }

  handleDateChange(date) {
    this.setState({
      dueDate: date,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (
      !this.state.text.length ||
      !this.state.priority.length ||
      !this.state.dueDate
    )
      return;

    const newItem = {
      text: this.state.text,
      priority: Number(this.state.priority),
      dueDate: this.state.dueDate,
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: "",
      priority: "",
      dueDate: "",
    }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="todo-form">
          <h3>New TODO</h3>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="text" className="right-margin">
              Text:
            </InputLabel>

            <Input
              id="text"
              onChange={this.handleTextChange}
              value={this.state.text}
            />
          </FormControl>
          <br />
          <br />
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="priority" className="right-margin">
              Priority:
            </InputLabel>

            <Input
              id="priority"
              type="number"
              min={1}
              max={5}
              onChange={this.handlePriorityChange}
              value={this.state.priority}
            />
          </FormControl>
          <br />
          <br />

          <DatePicker
            id="due-date"
            selected={this.state.dueDate}
            placeholderText="Due date"
            onChange={this.handleDateChange}
          ></DatePicker>
          <p />
          <Button
            color="primary"
            type="submit"
            fullWidth
            variant="contained"
            className="submit"
          >
            Add #{this.state.items.length + 1}
          </Button>
        </form>
        <br />
        <br />
        <TodoList todoList={this.state.items} />
      </div>
    );
  }
}

export default TodoApp;
