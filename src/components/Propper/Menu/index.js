import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PropperWrapper } from '~/components/Propper'
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //!! is convert to boolean
            return (
                <MenuItem 
                    key={index} 
                    data={item} 
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}/>
            );
        });
    }

    return ( 
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-propper')}>
                        {history.length > 1 && <Header title={'Language'} onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1));
                        }}/>}
                        {renderItems()}
                    </PropperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;