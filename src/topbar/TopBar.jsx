import "./topbar.css";
import profileImage from "../assets/profile.jpeg"; // Importa la imagen

export default function TopBar(){
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="TopListItem">HOME</li>
                    <li className="TopListItem">ABOUT</li>
                    <li className="TopListItem">CONTACT</li>
                    <li className="TopListItem">LOGOUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img className="topImg" src={profileImage} alt="" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
