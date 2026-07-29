import './CurrentlyReadingHero.css';

export default function CurrentlyReadingHero() {

    return(
        <main className='hero-cmp'>
            <div className='current-book'>
                <img src="/public/alchemised.jpg" alt="book cover" />
            </div>
            
            <div className=' book-info'>
                <p> Currently Reading </p>
                <h2> Title of Book</h2>
                <p> Name of Author </p>
                <p> x of x pages * xh xm logged</p>
            </div>
        </main>
    );
} 