import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/310513515_1367213893809838_4997032308302397668_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8QZs6hY_TuMAX8NfV03&tn=2Xj0OyOpxH-X4j3s&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT8aEIu2Gn2TnziITEzkoJhPdtoF3NWWz0Itgsu08s73Qg&oe=6345B0C1" 
                alt="Anh" 
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>anhnguyen.tiktok</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <span className={cx('username')}>Nguyen Van Anh</span>
            </div>
        </div>
    );
}

export default AccountItem;