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
                    <p> Books read year </p>
                    <p> Hours read </p>
                    <p> Day streak </p>
                    <p> Series in progress </p>
                </div>

                <div className='bottom-section'> 
                    {/* Brown book template at the bottom */}
                    <div className='general-book'/> 
                    <div className='general-book'/>
                    <div className='general-book'/>
                    <div className='general-book'/> 
                    
                    <div className='qoutes'>
                        <QuoteCard text={"\"Beauty is terror. Whatever we call beautiful, we quiver before it.\""} source={"\"The Secret History\""}></QuoteCard>
                        <QuoteCard text={"\"It's a rare thing to know your own heart.\""} source={"Piranesi"}></QuoteCard>
                    </div>
                </div>
            </section>
        </main>
    );
}