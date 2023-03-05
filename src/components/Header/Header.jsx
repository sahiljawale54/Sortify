import React,{useState,useEffect} from 'react';
import './Header.scss';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Sahil Jawale</h3>
        <div className="header__bar__icons">
          <a href="https://www.instagram.com/sahiljawale54/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/></a>
          <a href="https://github.com/sahiljawale54" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
          <a href="https://www.linkedin.com/in/sahiljawale/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        </div>
      </div>

      <div className="header-logo">Sor<span>tify</span></div>
      <div className="header__options">
          <h3 className="header__option" onClick = {contactHandler}>Get In Touch</h3>
      </div>
   </div>
  )
}

export default Header;