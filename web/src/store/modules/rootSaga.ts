import { all, takeLatest} from 'redux-saga/effects'

import { UsersTypes } from './users/types';
import { BooksTypes } from './books/types';
import { loadUsersSaga } from './users/saga';
import { loadBooksSaga } from './books/saga';


export default function* rootSaga(){
  return yield all([
    takeLatest(UsersTypes.LOAD_USERS_REQUEST, loadUsersSaga ),
    takeLatest(BooksTypes.LOAD_BOOKS_REQUEST, loadBooksSaga ),
  ])
} 