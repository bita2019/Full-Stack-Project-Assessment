import React , {useState} from "react";
//add
//import search
import mydata from './../exampleresponse.json';
import VideoDetails from './VideoDetails';

const Video = () => {
    
    return(
        <span>
            <h3>My Video</h3>    
            {/* put add & search component */}
            {mydata.map( (movie)=>
            <VideoDetails movie={movie}/>
          )}
                 
            
        </span>
    )
};

export default Video ;