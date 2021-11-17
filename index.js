import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const  Message=({text })=>{
  return(
    <div>
    {text}
    <h2 className="first-text">Банальные, но неопровержимые выводы, а также ключевые особенности структуры проекта, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов. Вот вам яркий пример современных тенденций - глубокий уровень погружения требует анализа переосмысления внешнеэкономических политик.</h2>
  </div>
  );
};

const App=()=>{
  return(
    <div>
      <h1>{text}</h1>
      <h1> messageList
      <Message/>
    </div>
  );
};

ReactDOM.render(
 <React.StrictMode>
   <App
   text="Новый текст"/>
 </React.StrictMode>,
 document.getElementById("root")
);


