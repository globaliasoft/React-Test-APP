import React from "react";

const BucketBody = (props) => {
    return (
       <li>
           <div className="itemTitle">{props.item.ItemTitle}</div>
           <div className="itemDescription">{props.item.Description}</div>
       </li>
    );
}

export default BucketBody;