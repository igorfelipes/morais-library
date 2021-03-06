import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageBody from '../../components/PageBody';
import ListItem from '../../components/ListItem';

import bookIcon from '../../assets/images/book.png';

import { ApplicationState } from '../../store';
import { loadBooksRequest } from '../../store/modules/books/actions';
import { Book } from '../../store/modules/books/types';

import './styles.css';

function BooksList(){

  const dispatch = useDispatch()

  const { books } = useSelector( (state: ApplicationState) => state);

  useEffect(() => {
    dispatch(loadBooksRequest())
  }, [dispatch]);
  

  return (
    <PageBody 
      title="Livros - Lista"
      link="/livros/form"
      isBook={true}
      reserveLink="/books/reservations/form"
      reservationTitle="Nova reserva"
      myReservationsLink="books/my-reservations"
      isBookPage={true}
    >
            
      { books.data.map( (book: Book) => {
        return       <div className="book-list">
        <ListItem 
            key={book.id}
            isEdit={false}
            book={book}
            avatar={bookIcon}
            header={book.titulo}
            description_one_title="Editora"
            description_one_value={book.editora.nome}
            description_two_title="ISBN"
            description_two_value={book.isbn}
            additional_information_title="Quantidade"
            additional_information_value={book.qtd_geral}
            editLink="/users/form"
            deleteLink="/users"
            reserveLink='books'
        />
      </div>
      })}


    </PageBody>
  )
}

export default BooksList;