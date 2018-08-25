import React from "react";
import { Panel, PanelBody } from "react-bootstrap";

import BucketBody from "./bucketBody";

const Bucket = (props) => {
    return (
        <Panel>
            <Panel.Heading>
            <Panel.Title componentClass="h3">{props.bucket.Description}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <ul className="bucket-body">
                {props.bucket.Items.map( (item) => {
                    return (
                           <BucketBody item={item}  key={item.ItemId}/>
                    )
                } )}
                </ul>
            </Panel.Body>
        </Panel>
    )
}

export default Bucket;