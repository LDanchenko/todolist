import React from 'react';
import style from './ToDoList.module.css';

export const ToDoList = () => (
  <>
    <h1 className={style.title}>ToDoList</h1>
    <ul className={style.list}>
      <li className={style.item}>Item 1</li>
      <li className={style.item}>Item 2</li>
      <li className={style.item}>Item 3</li>
    </ul>
  </>
);
