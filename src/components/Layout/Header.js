import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';

import foodimage from '../../assets/Food.jpg'
import classes from './Header.module.css';
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Eat Easy</h1>
                <h2>Order Online!!!</h2>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={foodimage} alt='Food Image'/>
            </div>
        </Fragment> 

);
};

export default Header;