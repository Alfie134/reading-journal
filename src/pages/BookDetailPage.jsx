import './BookDetailPage.css';


export default function BookDetailPage() {
    return (
        <main className='book-detail-page'>
            <section className='book-detail'>
                <div className='book-detail-hero'></div>
                <div className='book-detail-info'>
                    <h1>Book Title</h1>
                    <p>Author</p>
                    <p>Genre</p>
                    <p>Year Published</p>
                </div>
            </section>
        </main>
    );
}