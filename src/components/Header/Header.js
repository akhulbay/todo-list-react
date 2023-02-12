import hs from "./Header.module.css";
function Header() {
    return (
        <div className={hs.Header}>
            <div className={hs.Container}>
                <img src="homepage.png" alt="" className={hs.Homepage}/>
                <form id = "form" >
                    <input type="search" id="query" name="q" placeholder="Search" className = {hs.Search}/>
                    <img src="lupadlypoiska.png" alt="" className={hs.Searchicon}/>
                </form>
                <div className={hs.Container2}></div>
                <button type="button" className={hs.Percentage}>
                    <img src="percentage.png" alt="" className={hs.Percentageicon}/>
                </button>
                
                <button type = "button" className={hs.Question}>
                    <img src="questions.png" alt="" className={hs.Questionicon}/>
                </button>

                <button type = "button" className={hs.Account}>
                    <img src="account.png" alt="" className={hs.Accounticon}/>
                </button>

            </div>
        </div>
    )
}

export default Header;