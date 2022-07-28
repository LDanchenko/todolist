import { ToDoList } from './ToDoList';
import style from './App.module.css';

export const App = () => {
  return (
    <div className={style.container}>
      <ToDoList />
    </div>
  );
};
