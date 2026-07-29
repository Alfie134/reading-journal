import QuoteCard from '../compontens/journal/QuoteCard';
import AddQuoteButton from '../compontens/journal/AddQuoteButton';
import './BookDetailPage.css';


export default function BookDetailPage() {
    return (
        <main className='book-detail-page'>
            <section className='book-detail'>
                <div className='general-book'></div>
                <div className='book-detail-info'>
                    <p>series - 1 of 1 - finished</p>
                    <h1>MockBook</h1>
                    <p>Author</p>
                    <p>stars + time spend + pages</p>
                    <p>Genres</p>
                </div>
                <hr />
            </section>
            <section className='book-detail-journal'>
                <div className='journal-entries'>
                    <h2>Journal Entry</h2>
                    <p>Entry 1</p>
                    <QuoteCard text={"\"Beauty is terror. Whatever we call beautiful, we quiver before it.\""} source={"p. 200"}></QuoteCard>
                    <QuoteCard text={"\"It's a rare thing to know your own heart.\""} source={"p. 1"}></QuoteCard>
                    <AddQuoteButton/> 
                </div>
            </section>
        </main>
    );
}