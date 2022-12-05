import React,{useState} from 'react';
import './App.css';
import ToDoList from './components/todolist';


function App() {
  const [todos,setTodos] = useState([])
  const [taskList,settaskList] = useState({});

  function onChangeInput (e) {
     settaskList({...taskList,isim: e.target.value})
  }

  function handleSubmit (event){
    event.preventDefault()
    if(taskList.isim ===''){
      return false;}
    setTodos(event.target.value)
    console.log(todos)
  }
  return (
    <div>
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input className='new-todo' placeholder='What needs to be done?' autoFocus onChange={onChangeInput} />
        </form>
      </header>
      <section className='main'>
        <input className='toggle-all'/>
        <label htmlFor='toggle-all'>
          Mark all as complete
        </label>
        <ul className='todo-list'>
        <ToDoList taskListInput={'Necip'}/>
        </ul>
      </section>

      <footer className='footer'>
        <span className='todo-count'>
          {/* bu kısma başka bir parametre eklemem gerekiyor*/}
          <strong>2</strong>
          </span>
          <ul className='filters'>
            <li>
               {/* bu kısma başka bir sayfa gelecek sanırım*/}
              <a href='#/' className='selected'>All</a>
            </li>
            <li>
            <a href="#/">Active</a>
            </li>
            <li>
				    <a href="#/">Completed</a>
			    </li>
          </ul>

          <button className='clear-completed'>
            Clear Completed
          </button>
      </footer>
    </section>
    </div>
  );
}

export default App;
