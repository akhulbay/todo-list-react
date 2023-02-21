const Modal = ({active,setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e=>e.stopPropagation()}>
                <table className="table">
                    <h4 className="text_modal">Daily Goal:</h4>
                    <input type="number" min="3" max="100" className="goal_input"/>
                    <h4 className="text_modal">Email:</h4>
                    <input type="text" value="dauletova@gmail.com" className="email_input"/>
                    <h4 className="text_modal">Password:</h4>
                    <input type="password" value="12345678" className={"password_input"}/>
                    <br/>
                    <button className="pass_btn">Change Password</button>
                </table>
            </div>
        </div>
    )
}
export default Modal;