import MockBooks from '../../data/MockBook';
import './CurrentlyReadingHero.css';

export default function CurrentlyReadingHero({id}) {

    const currBook = MockBooks.find(book => book.id === id);

    if (!currBook) {
        return <p> No book found</p>
    }

    return(
        <main className='hero-cmp'>
            <div className='current-book'>
                <img src={currBook.cover} alt="book cover" />
            </div>
            
            <div className=' book-info'>
                <p> Currently Reading </p>
                <h2 className='book-title'> {currBook.title} </h2>
                <p className='author-name'> { currBook.author} </p>
                <p1> {currBook.pages} pages <p2>*</p2>  {currBook.hoursLogged}</p1>
            </div>
        </main>
    );
} 