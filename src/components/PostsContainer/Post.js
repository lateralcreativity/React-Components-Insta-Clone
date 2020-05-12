// You will add code in this file
import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes);
  const [likedStatus, setLikedStatus] = useState(false);
  const addLikeHandler = event => {
    if(likedStatus === false){
      setLikes(likes + 1)
      setLikedStatus(true)
    } else {
      setLikes(likes - 1)
      setLikedStatus(false)
    }
  }
  
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection username={props.post.username} likes={likes} addLike={addLikeHandler}/>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
