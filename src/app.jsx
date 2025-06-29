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
            {/* <input class="text-entry" placeholder='Write a new task'></input> */}
            <textarea  class="text-entry" name="3" id="3" cols="30"></textarea>
          </div>
          {/* <div class="nav-item">
            <button class="btn-add nav-item">Add</button>
          </div> */}
          <button class="btn-add nav-item">Add</button>


          {/* <div class="nav-item">
            <button class="btn-del">Delete</button>
          </div> */}
        </div>
        <hr />
        <article class="task-container">
          <Task text="BLALLALALALALAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGO MAS DE TEXTO ETX A DA FA FA SSaludad a invitados o a los demas" />
          <Task text="BLALLALALALALAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGO MAS DE TEXTO ETX A DA FA FA SSaludad a invitados o a los demas" />
          <Task text="BLALLALALALALAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGO MAS DE TEXTO ETX A DA FA FA SSaludad a invitados o a los demas" />
          <Task text="BLALLALALALALAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGO MAS DE TEXTO ETX A DA FA FA SSaludad a invitados o a los demas" />
          <Task text="BLALLALALALALAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGO MAS DE TEXTO ETX A DA FA FA SSaludad a invitados o a los demas" />
        </article>
      </div>
    </>
  );
}
