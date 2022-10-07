import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';


import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {

    //Hide - Show search results
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    });

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok}"/>
                </div>

                <div className={cx('search')}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                               <PropperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Account
                                    </h4>

                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PropperWrapper>
                            </div>
                        )}
                    >
                        <input placeholder='Search accounts and videos' spellCheck={false}/>
                    </Tippy>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                    
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>

                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
     );
}

export default Header;