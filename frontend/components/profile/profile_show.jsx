import React from 'react';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
        
        // console.log("props");
        // console.log(props);
    }

    render() {
        const { currentUser } = this.props
        return (
            <div className="profile-show">
                <h1 className="profile-header"> Personal info</h1>
                <li> <div className="info-head"> Full name</div>
                    <p className="info-ans">{currentUser.first_name + " " + currentUser.last_name}</p>
                </li>
                <li> <div className="info-head"> Username </div>
                    <p className="info-ans">{currentUser.username}</p>
                </li>
                <li> <div className="info-head"> Email </div>
                    <p className="info-ans">{currentUser.email}</p>
                </li>
                <li> <div className="info-head"> Birthday </div>
                    <p className="info-ans">{currentUser.birthday}</p>
                </li>
            </div>
        )
    }
}

export default ProfileShow