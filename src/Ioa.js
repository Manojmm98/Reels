import React from 'react'
import vid1 from './vid1.mp4'
import vid2 from './vid2.mp4'
import vid3 from './vid3.mp4'
import vid4 from './vid4.mp4'

function Ioa() {
    // create a vedio array and set its state 
    const [source,setsource]=useState([{src:},{},{},{}])
   // create a callback function
   function callback(entry) {
       entry.forEach(element => {
           console.log(element);
       });
   }

    // create intersection observer there will be two arguments one is callback and other is option object for root(viewport),threshold
    const observer = new IntersectionObserver(callback,{
        threshold:0.9
    })
    return (
        <div className="vedio_container">
            
        </div>
    )
}

export default Ioa
