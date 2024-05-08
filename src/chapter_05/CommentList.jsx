import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김하경",
        comment: "안녕하세요!",
    },
    {
        name: "이XX",
        comment: "안녕하세요~",
    },
    {
        name: "최XX",
        comment: "안녕하세용 :)",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}       
        </div>
    );
}

export default CommentList;