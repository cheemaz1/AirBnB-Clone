import React from 'react';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
        
        console.log("props");
        console.log(props);
    }

    render() {
        const { currentUser } = this.props
        return (
            <div className="profile-show">
                <h1 className="profile-header"> Personal info</h1>
                <li> <div> Full name</div>
                    <p>{currentUser.first_name + " " + currentUser.last_name}</p>
                </li>
                <li> <div> Username </div>
                    <p>{currentUser.username}</p>
                </li>
                <li> <div> Email </div>
                    <p>{currentUser.email}</p>
                </li>
                <li> <div> Birthday </div>
                    <p>{currentUser.birthday}</p>
                </li>
            </div>
        )
    }
}

export default ProfileShow