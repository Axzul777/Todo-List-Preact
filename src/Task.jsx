import { Component } from 'preact';

class Task extends Component {
  render(props, state) {
    return (
      <>
        <div class="task-item">
          <input type="checkbox" id="checker" />
          <label for="checker" class="todo">
            {props.text}
          </label>
          <div>
             <button class="btn-del">Delete</button>
             <button class="btn-edit">Edit</button>
          </div>
        </div>
      </>
    );
  }
}

export default Task;
