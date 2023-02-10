import hs from "./Header.module.css";
function Header() {
    return (
        <div className={hs.Header}>
            <div className={hs.container}>
                <h1>TodoList</h1>
            </div>
        </div>
    )
}

export default Header;