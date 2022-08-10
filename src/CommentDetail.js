import React from "react";

const CommentDetail = ({ avatar, name, text, time }) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {name}
        </a>
        <div className='metadata'>
          <span className='date'>{time}</span>
        </div>
        <div className='text'>{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
