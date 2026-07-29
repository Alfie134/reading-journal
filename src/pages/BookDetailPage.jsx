import QuoteCard from '../compontens/journal/QuoteCard';
import AddQuoteButton from '../compontens/journal/AddQuoteButton';
import Stars from '../compontens/animations/stars';
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
                        <p>Genres</p>
                        <p>finished 12 jul 2026 - 6h 40m - 245 pages</p> 
                        <Stars></Stars>
                    </div>
            </section>
            <hr />
            <section className='book-detail-journal'>
                <div className='journal-entries'>
                    <h2>Journal Entry</h2>
                    <p>loru ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
                    <h2>reading sessions</h2>
                    <p>date + time</p>
                </div>
                <div className='saved-quotes'>
                    <h2>Saved Quotes</h2>  
                    <QuoteCard text={"\"Beauty is terror. Whatever we call beautiful, we quiver before it.\""} source={"p. 200"}></QuoteCard>
                    <QuoteCard text={"\"It's a rare thing to know your own heart.\""} source={"p. 1"}></QuoteCard>
                <div>
                        <AddQuoteButton/> 
                </div>
                </div>
            </section>
        </main>
    );
}