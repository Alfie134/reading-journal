import ReadingStatus from './ReadingStatus';

const MockBooks = [
  {
    id: "1",
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    yearPublished: 1925,
    cover: '',
    pages: 200,
    hoursLogged: '',
    status: ReadingStatus.TBR
},

{
  id: "2",
  title: 'Alchemised',
  author: 'SenLinYu',
  genre: 'Dark Fantasy', 
  yearPublished: 2025,
  cover: './alchemised.jpg',
  pages: 1040,
  hoursLogged: '',
  status: ReadingStatus.FINISHED
},

{
  id: "3",
  title: 'The Poppy War',
  author: 'R.F. Kuang',
  genre: 'High Fantasy', 
  yearPublished: 2018,
  cover: './ThePoppyWar.jpg',
  pages: 530,
  hoursLogged: '',
  status: ReadingStatus.READING
}
];
export default MockBooks;