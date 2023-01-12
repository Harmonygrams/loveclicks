import "./Searchbox.css"
const Searchbox = () => {
    return(
        <section className="searchbox__container">
            <div className="search__input-container">
                <div className="search">
                    <input 
                        className="search__input"
                        placeholder="search"
                    />
                    <button className="search__btn">Search</button>
                </div>
            </div>
        </section>
    )
}
export default Searchbox;