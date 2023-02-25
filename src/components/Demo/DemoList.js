import React from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  const sortedList = items.sort((a, b) => a - b);

  const list = props.isClicked ? sortedList : sortedList.reverse()

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
