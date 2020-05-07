import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <ul style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'nowrap', flexDirection: 'row'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/button">Button</Link></li>
                    <li><Link to="/dropdown">Dropdown</Link></li>
                    <li><Link to="/listgroup">ListGroup</Link></li>
                    <li><Link to="/tablemenu">Table </Link></li>
                    <li><Link to="/badge">Badge</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
          );
    }
}
export default Header;