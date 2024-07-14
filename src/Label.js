import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Label({ labels, setLabel }) {
  const [todo, setTodo] = useState('');
  const navigate = useNavigate();
  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onClick = () => {
    setLabel([...labels, todo]);
    setTodo('');
    console.log(labels);
    navigate('/');
  };

  return (
    <div>
      <h1>할 일 추가</h1>
      <input value={todo} onChange={onChange} />
      <button onClick={onClick}>추가</button>
    </div>
  );
}

export default Label;
