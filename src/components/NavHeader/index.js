import React from 'react';
import Address  from '../Address';
import Search  from '../Search';
import Profile  from '../Profile';
import './index.css';
export default class NavHeader extends React.Component {
    render() {
        return (
            <div className="outer">
                <Address/>
                <Search/>
                <Profile/>
            </div>
        )
    }
}