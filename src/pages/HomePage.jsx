import './HomePage.css';

export default function HomePage() {
    return (
        <main className='home-page'>
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
                <div className='quotes'>
                    <h2> from the commonplace </h2>
                    <p>"Book qoute"</p>
                    <p>Book title</p>
                    <div className='vertical-line'></div>
                </div>
            </section>
        </main>
    );
}