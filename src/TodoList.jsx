import { render, Component } from 'preact';

export default class TodoList extends Component {
    state = {
        todos: [
            { text: "Write my first post", completed: true },
            { text: "Buy new groceries", completed: false },
            { text: "Walk the dog", completed: false },
        ],
        newItem: ''
    };

    setNewItem = e => {
        this.setState({ newItem: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();

        let { todos, newItem } = this.state;
        todos = todos.concat({ text: newItem, completed: false });
        if (newItem != '') {
            this.setState({ todos, newItem: '' });  // Reset input value on add
        }
    };

    completeTodo = (index) => {
        let { todos } = this.state;
        todos[index].completed = !todos[index].completed;
        this.setState({ todos });
    };

    removeTodo = (index) => {
        let { todos } = this.state;
        todos.splice(index, 1);
        this.setState({ todos });
    };

    completedCount = () => {
        return this.state.todos.filter(todo => todo.completed).length;
    };

    render({ }, { todos, newItem }) {
        return (
            <form onSubmit={this.addTodo} class="box">
                <div class="navbar">
                    <div class="nav-item">
                        <textarea class="text-entry" name="3" id="3" cols="30" value={newItem} onInput={this.setNewItem}></textarea>
                    </div>
                    <button class="btn-add nav-item" onClick={this.addTodo}>Add</button>
                </div>
                <hr />
                <article class="task-container">
                    {todos.map((todo, index) => (
                        <div class="task-item">
                            <input type="checkbox" id={index} />
                            <label for={index}>
                                {todo.text}
                            </label>
                            <div>
                                <button class="btn-del" onClick={() => this.removeTodo(index)}>Delete</button>
                                <button class="btn-edit">Edit</button>
                            </div>
                        </div>
                    ))}
                </article>
            </form>
        );
    }
}
