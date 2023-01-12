import './Navbar.css'
const Navbar = () => {
    return(
        <header className="header">
            <div className="container wrapper">
                <p className="logo__container"><a className="logo" href="">LOVE<span>CLICKS</span></a></p>
                <nav className='nav'>
                    <ul className="nav__list">
                        <li className="nav__item"> <a className="nav__link" href="/products">Properties</a></li>
                        <li className="nav__item"> <a className="nav__link" href="/customers">Customers</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Navbar