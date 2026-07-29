import CurrentlyReadingHero from '../compontens/book/CurrentlyReadingHero';
import './HomePage.css';
import QuoteCard from '../compontens/journal/QuoteCard';


export default function HomePage() {
    return (
        <main className='home-page'>
            <section className='current-read'>
                <CurrentlyReadingHero />
                
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
                <QuoteCard text={"\"Beauty is terror. Whatever we call beautiful, we quiver before it.\""} source={"\"The Secret History\""}></QuoteCard>
                <QuoteCard text={"\"It's a rare thing to know your own heart.\""} source={"Piranesi"}></QuoteCard>
            </section>
        </main>
    );
}