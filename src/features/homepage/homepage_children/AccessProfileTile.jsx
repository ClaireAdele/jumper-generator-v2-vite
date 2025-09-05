const AccessProfileTile = ({username}) => {
    return (
        <div className="auth-form-green-square">
            <div className="auth-form-container">
                <h2>{username}</h2>
            </div>
            <button className="auth-button">My Profile</button>
        </div>
    );
};

export default AccessProfileTile;