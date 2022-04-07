import { Fragment } from 'react';

import foodimage from '../../assets/Food.jpg'
import classes from './Header.module.css';
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={foodimage} alt='Food Image'/>
            </div>
        </Fragment> 

);
};

export default Header;