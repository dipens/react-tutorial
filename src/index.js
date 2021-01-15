import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
const books = [
  {
    id: 1,
    author:'Dipen Shah',
    title: 'The Intelligent Investor',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._SX323_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    author:'Barack Obama',
    title: 'A Promised Land',
    img: 'https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg',
  },
  {
    id: 3,
    author:'George Orwell',
    title: 'Nineteen Eighty Four',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51K84pomCRL._SX305_BO1,204,203,200_.jpg',
  },
];

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}
const Book = ({img, title, author}) => {
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

ReactDom.render(<BookList />, document.getElementById('root'));