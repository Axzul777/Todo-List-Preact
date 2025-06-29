import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';
import Task from './Task';

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div class="box">
        <div class="navbar">
          <div class="nav-item">
            <input class="text-entry"></input>
          </div>
          <div class="nav-item">
            <button class="btn-add">Add</button>
          </div>
          {/* <div class="nav-item">
            <button class="btn-del">Delete</button>
          </div> */}
        </div>
        <hr />
        <article class="todo-list">
          <Task text="hello" />
        </article>
      </div>
    </>
  );
}
