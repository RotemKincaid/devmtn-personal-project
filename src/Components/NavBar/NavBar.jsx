import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom'
import hamburgerIcon from '../../assets/hamburger-icon.jpg'
import NavModal from '../NavModal/NavModal'
import { destroySession } from '../../ducks/sessionReducer';
import { connect } from 'react-redux';

export function NavBar(props) {
  return (
    <div className="nav-bar">
      <NavModal toggle={props.toggle} show={props.showModal} />
      <h1> Belch </h1>
          <div className="nav-items">
              <li onClick={() => props.backHome(true)}>Home</li>
        <Link onClick={() => props.backHome(false)} to={`/notifications`}><li>My activity</li></Link> 
        {/* lets see if we cant get rid of this props.backHome bullshit.. */}
        <Link to = '/store' onClick={() => props.backHome(false)}> <li>Store</li> </Link>
        <Link to='/'> <button className='logout' onClick={props.destroySession}>Logout</button></Link> 
      </div>
      <img src={hamburgerIcon} className='hamburger-icon' alt='nav dropdown menu' onClick={props.toggleModal}/>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.session.user
  };
};


const mapDispatchToProps = {
  destroySession
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
