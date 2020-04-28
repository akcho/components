import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" msg="Hi" />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" msg="Bye" />
      <CommentDetail author="Jane" timeAgo="Today at 5:00PM" msg="Why" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
