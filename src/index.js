import React from 'react';
import ReactDom from 'react-dom'
import './index.css'


const firstBook = {
  author:'Dipen Shah',
  title: 'The Intelligent Investor',
  img: 'https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._SX323_BO1,204,203,200_.jpg',
};

const secondBook = {
  author:'Barack Obama',
  title: 'A Promised Land',
  img: 'https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg',
};

function BookList() {
  return (
    <section className='bookList'>
      <Book 
      img={firstBook.img} 
      title={firstBook.title} 
      author = {firstBook.author} 
      />
      <Book  
      img={secondBook.img} 
      title={secondBook.title} 
      author = {secondBook.author}
      />
    </section>
  );
}
const Book = ({img, title, author}) => {
  return (<article className='book'>
    <img src={img} alt={title}></img>
    <h1>{title}</h1>
    <h3>{author}</h3>
  </article>)
}

ReactDom.render(<BookList />, document.getElementById('root'));