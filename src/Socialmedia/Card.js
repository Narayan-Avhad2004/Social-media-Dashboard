import React, { useState } from "react";

function Card({ user }) {
  const [likes, setLikes] = useState(user.likes || 0);

  return (
    <div className="card">
      <div className="card-header">
        <img src={user.profilePic} alt="profile" className="profile-pic" />
        <span>{user.username}</span>
      </div>
      <img src={user.postImage} alt="post" className="post-img" />
      <div className="card-footer">
        <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
      </div>
    </div>
  );
}

export default Card;
