import './NavBar.css';

export default function NavBar() {


    return(
        <main className='navbar-cmp'>
            <div className='content'>
                <div className='greeting'>
                    <h2> Hello, username</h2>
                </div>
                <div className='nav-links'>
                    <a href='library'> library </a>
                    <a href='journal'> journal </a>
                    <a href='stats'> stats </a>
                    <a href='tbr'> tbr </a>
                </div>
                <div className='profile'></div>
            </div>
            <hr className='navbar-spacer'></hr>
        </main>
    );
}     