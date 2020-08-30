import React from 'react';
import '../styles/Header.css';
import logo from '../assets/app.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/AddCircle';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../context/StateProvider';

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt=""/>
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Megbook' type="text" />
                </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon style={{color:"gray"}} />
                </IconButton>
                <IconButton>
                    <ForumIcon style={{color:"gray"}} />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon style={{color:"gray"}} />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon style={{color:"gray"}} />
                </IconButton>
            </div>
            <div className="header__menu">
                    <SearchIcon />
                     <Menu />
                </div>
        </div>
    )
}

export default Header;
