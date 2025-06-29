import { Component } from 'preact';

class Task extends Component {
  render(props, state) {
    return (
      <>
        <div class="task">
          <input type="checkbox" id="checker" />
          <label for="checker" class="todo">
            {props.text}
          </label>
          <button class="btn-del">Delete</button>
        </div>
      </>
    );
  }
}

export default Task;
