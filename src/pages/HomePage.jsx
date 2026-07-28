import './HomePage.css';
import QuoteCard from 'C:/Coding/reading-journal/src/compontens/journal/QuoteCard.jsx';
import NavBar from '../compontens/Layout/NavBar';


export default function HomePage() {
    return (
        <main className='home-page'>
            <NavBar></NavBar>
            <section className='current-read'>
                <div className='current-book'>
                    <img src="/public/alchemised.jpg" alt="book cover" />
                </div>

                <div className=' book-info'>
                    <p> Currently Reading </p>
                    <h2> Title of Book</h2>
                    <p> Name of Author </p>
                    <p> x of x pages * xh xm logged</p>
                </div>
            </section>

            <section className='general-info'>
                <hr />
                <div className='general-stats'>
                    <p> books read this year</p>
                    <p> hours read</p>
                    <p>Day streak</p>
                    <p> Series in progress</p>
                </div>
                <div className='general-book'></div>
                <QuoteCard text={"Beauty is terror. Whatever we call beautiful, we quiver before it."} source={"The Secret History"}></QuoteCard>
                <QuoteCard text={"It's a rare thing to know your own heart."} source={"Piranesi"}></QuoteCard>
            </section>
        </main>
    );
}