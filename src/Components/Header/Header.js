import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './Header.css';
import { useStateValue } from '../../StateProvider/StateProvider';

function Header() {
    const [{ cart }] = useStateValue();

    return (
        <nav className="header">
            {/* logo */}
            <Link to='/'>
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            {/* search */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option__lineOne">Hello, Saurav</span>
                        <span className="header__option__lineTwo">Sign in</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option__lineOne">Returns</span>
                        <span className="header__option__lineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option__lineOne">Your</span>
                        <span className="header__option__lineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shopping cart icon */}
                        <ShoppingBasketIcon />
                        {/* number of items in cart */}
                        <span className="header__option__lineTwo header__basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </nav >
    )
}

export default Header
