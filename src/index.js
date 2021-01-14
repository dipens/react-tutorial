import React from 'react';
import ReactDom from 'react-dom'
import './index.css'



function BookList() {
  return (
    <section className='bookList'>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}

const Book = () => {
  return (<article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>)
}
const Image = () => {
  return (
    <img src='https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._SX323_BO1,204,203,200_.jpg'></img>
  ) 
}

const Title = () => {
  return <h1>The Intelligent Investory</h1>
}
const Author = () => {
  return <h3>Dipen Shah</h3>
}

ReactDom.render(<BookList />, document.getElementById('root'));