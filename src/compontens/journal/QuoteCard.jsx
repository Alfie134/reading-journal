import './QuoteCard.css'

export default function QuoteCard({ text, source }) {
    return (
        <main>
            <div className="quote-card">
                <p className="quote-card__text">{text}</p>
                <p className="quote-card__source">{source}</p>
            </div>
        </main>
    );
}