import React from 'react'

export const Book = ({img, title, author}) => {
  const clickHandler = (e) => {
    console.log(e.target);
  };
  const complexExample = (author) => {
    console.log(author);
  }
  return (<article className='book' onMouseOver={()=>{
    console.log(title);
  }}>
    <img src={img} alt={title}></img>
    <h1>{title}</h1>
    <h3>{author}</h3>
    <button type="button" onClick={clickHandler}>Reference example</button>
    <button type="button" onClick={() => {complexExample(author)}}>More complex example</button>
  </article>)
}

export default Book
