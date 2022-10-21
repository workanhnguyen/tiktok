
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCircleXmark, 
    faSpinner, 
    faMagnifyingGlass,
    faEllipsisVertical, 
    faEarthAsia, 
    faCircleQuestion, 
    faKeyboard,
    faCloudUpload, 
    faMessage 
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PropperWrapper } from '~/components/Propper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Propper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
];

function Header() {

    //Hide - Show search results
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    });
    //Handle logic
    const handleMenuChange = (menuItem) => {

    };

    const currentUser = true;

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok}"/>
                </div>

                <div className={cx('search')}>
                    <HeadlessTippy
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
                    </HeadlessTippy>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                    
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>

                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy
                            content={'Upload video'} 
                            placement='bottom'
                        >
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>
                    </>
                    ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Log in</Button>
                            </>
                    ) 
                }
                    <Menu
                        items={MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img 
                                src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/311069528_1372650299932864_6046759375724341162_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pk_guqglfj8AX8myq_0&_nc_oc=AQnvbNNhlpJFw1Phq1JvM5M0NjUJKpeMGYDfw6akQRMmJm2D3lcUWOH3NuIel3Gfv7U&_nc_ht=scontent.fsgn2-7.fna&oh=00_AT9OMg9jb5WrLSmczsTNF5-tdN75JUHWe2r4R6Z8qe9Q1A&oe=634E6F3A' 
                                className={cx('user-avatar')} 
                                alt='Anh Nguyễn'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div> 
            </div>
        </header>
     );
}

export default Header;