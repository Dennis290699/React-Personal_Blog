import "./header.css";
import wallpaperImage from "../assets/wallpaper.jpg"; // Importa la imagen

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={wallpaperImage} alt="" />
        </div>
    )
}