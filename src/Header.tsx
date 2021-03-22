import React from 'react';
import './css/header.less';
import classNames from 'classnames';

interface Props {
    logo: string,
    mainText: string, 
    subText: string
}

// const defaultProps: Props = {
//     logo: 'Mr',
//     text: 'McGee'
// }

const Header: React.SFC<Props> = ({ logo, mainText, subText})  => (
    <div className="header">
        <div className={classNames('header-children', 'header-children-logo')}>{logo}</div>
        <div className={classNames('header-children', 'header-children-text')}>
            <p className={classNames('header-children-text-main')}>{mainText}</p>
            <p >{subText}</p>
        </div>
    </div>
);

// Header.defaultProps = defaultProps;

export default Header;