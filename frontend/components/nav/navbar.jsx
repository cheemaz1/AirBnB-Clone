import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='navbar'>
                <nav className='login-signup'>
                    <div className='home-link'>
                        <Link to='/' className='title'>CozyBnB</Link>
                    </div>
                    {/* <div className='links'>
                        <a href='https://github.com/cheemaz1/CozyBnB' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/zayed-cheema-30521920a/' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href='https://angel.co/u/zayed-cheema' target="_blank" rel="noopener noreferrer"><i className="fab fa-angellist"></i></a>
                    </div> */}
                    <div className='header'>
                        <div className='icon-button'>
                            <div className='icon1'>
                                <i className="fas fa-grip-lines icon-large"></i>
                            </div>
                            <div className='icon2'>
                                <i className="far fa-user-circle" ></i>
                            </div>
                            <div className='dropdown'>
                                {
                                    this.props.currentUser ?
                                        <div className='dropdown-content'>
                                            <ul className='drop-down-inside'>Welcome {this.props.currentUser.username}</ul>
                                            <Link className='drop-down-inside' to='/home/new'>Host</Link>
                                            <Link className='drop-down-inside' to='/bookings'>Bookings</Link>
                                            <ul className='drop-down-inside' onClick={() => this.props.logout()}>Log Out</ul>
                                        </div>
                                        :
                                        <div className='dropdown-content'>
                                            <ul className='drop-down-inside'>Welcome to CozyBnB</ul>
                                            <ul className='drop-down-inside' onClick={() => this.props.openModal('login')}>Log In</ul>
                                            <ul className='drop-down-inside' onClick={() => this.props.openModal('signup')}>Sign Up</ul>
                                            <ul className='drop-down-inside' onClick={() => this.props.login({ username: 'DemoUser', password: 'DemoUser' })}>Demo User</ul>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default NavBar


