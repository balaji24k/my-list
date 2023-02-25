import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [button,setButton] = useState(true);
  

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const ascButtonHandler = () => {
    setButton(true);
    console.log(listItems,"asc clickedbtn");
  };

  const dscButtonHandler = () => {
    setButton(false);
    console.log(listItems,"dsc clickedbtn");
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  console.log(button,"isClicked")


  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} isClicked = {button} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={button ? dscButtonHandler:ascButtonHandler} >
        {button ? "change to descending order" : "change to ascending order" }
      </Button>
      
    </div>
  );
}

export default App;
