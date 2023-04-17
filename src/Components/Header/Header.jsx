import "./Header.scss";
import flagUSA from "../../assets/img/header/flag-usa.svg"
import iconProf from "../../assets/img/Icons/basic_icons/Profile.svg"
import arrRight from "../../assets/img/Icons/arrows/Right.svg"
import arrLeft from "../../assets/img/Icons/arrows/Left.svg"

const Header = () => {
    return(
        <header className="header">
           <div className='header__navbar'>
               <div className="navbar__top-bar">
                   <div className="top-bar__number"><a href="tel:">Available 24/7 at (405) 555-0128</a></div>
                   <ul className="menu-secondary">
                       <li><a href="#">Delivery & returns</a></li>
                       <li><a href="#">Track order</a></li>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Contacts</a></li>
                   </ul>
                   <button className="lang-currency">
                       <li>
                           <img src={flagUSA} alt="flag"/>
                           <div>Eng / $</div>
                       </li>

                   </button>
                   <ul className="account">
                       <li><img src={iconProf} alt=""/></li>
                       <li>Log in / Register</li>
                   </ul>
               </div>
               <nav className="navbar__navigetion">

                       <div className="nav__logo">
                           <a href="#"><img src="" alt="logo"/></a>
                       </div>
                       <ul className="nav__menu">
                           <li><a href="#">Women</a></li>
                           <li><a href="#">Men</a></li>
                           <li><a href="#">Girls</a></li>
                           <li><a href="#">Boys</a></li>
                           <li><a href="#">Sale</a></li>
                       </ul>
                       <div className="nav__input">
                           <input></input>
                       </div>
                       <table className="nav__toolbar">
                           <tr>
                               <td>
                                   <img src="" alt="logo"/>
                                   <span>2</span>

                               </td>
                               <td>
                                   <img src="" alt="logo"/>
                                   <span>4</span>
                               </td>
                           </tr>

                       </table>

               </nav>
               <div className="header--special-offers">
                   <button><img src={arrLeft} alt=""/></button>
                   <p>Up to 70% Off. <a href="#">Shop our latest sale styles</a></p>
                   <button><img src={arrRight} alt=""/></button>
               </div>
           </div>
        </header>
    );
}
export default Header;