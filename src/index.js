import React from 'react';
import ReactDom from 'react-dom'
import './index.css'



const author = 'Dipen Shah'
const title = 'The Intelligent Investor';
const img = 'https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._SX323_BO1,204,203,200_.jpg'
function BookList() {
  return (
    <section className='bookList'>
      <Book job="developer" />
      <Book title='random title' number={22}/>
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (<article className='book'>
    <img src={img} alt={title}></img>
    <h1>{title}</h1>
    <h3>{author}</h3>
  </article>)
}

ReactDom.render(<BookList />, document.getElementById('root'));