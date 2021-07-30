import React,{useState,useEffect} from 'react'
import vid1 from './vid1.mp4'
import vid2 from './vid2.mp4'
import vid3 from './vid3.mp4'
import vid4 from './vid4.mp4'
import Video from './Video'

function Ioa() {
    // create a vedio array and set its state 
    const [sources,setsource]=useState([{url:vid1},{url:vid2},{url:vid3},{url:vid4}])
   // create a callback function
   const callback=(entry)=> {
       entry.forEach(element => {
           console.log(element);
           //const el=element.target.childNodes[0];
           let el = element.target.childNodes[0];
           el.play().then(()=>{
        //if this video is not in viewport then pause it
        if(!el.paused && !element.isIntersecting)
        {
           el.pause();                
        }
    
    })
            
    });
    }

    // create intersection observer there will be two arguments one is callback and other is option object for root(viewport),threshold
    const observer = new IntersectionObserver(callback,{
        threshold:0.9
    })
    // attach observer with all vedios so that when it comes to viewport it will play 
    useEffect(() => {
        let elements = document.querySelectorAll('.video');
        elements.forEach(el => {
            observer.observe(el);

        });
        
    }, [])
    return (
        // we render all vedio from the source array and vedios are inside an array in object form and we will get it through src
        <div className="video_container">
          <div className="video">
            <Video source={sources[0].url}/>
          </div>  
          <div className="video">
            <Video source={sources[1].url}/>
          </div> 
          <div className="video">
            <Video source={sources[2].url}/>
          </div> 
          <div className="video">
            <Video source={sources[3].url}/>
          </div> 
        </div>
    )
}

export default Ioa


























// import React, { useEffect, useState } from 'react'
// import vid1 from './fashion.mp4';
// import vid2 from './frog.mp4';
// import vid3 from './tree.mp4';
// import vid4 from './water.mp4';
// import Video from './Video';
// function Ioa() {
//     const[sources,setSources]=useState([{url:vid1},{url:vid2},{url:vid3},{url:vid4}])
//     const callback = entries=>{
//         entries.forEach(element => {
//             console.log(element);
//             let el = element.target.childNodes[0];
//             el.play().then(()=>{
//                 //if this video is not in viewport then pause it
//                 if(!el.paused && !element.isIntersecting)
//                 {
//                     el.pause();                
//                 }
//             })

//         });
//     }
//     const observer = new IntersectionObserver(callback,{
//         threshold:0.9
//     })
//     useEffect(()=>{
//         console.log('Effect');
//         let elements = document.querySelectorAll('.videos')
//         elements.forEach(el=>{
//             observer.observe(el)
//         })

//     },[])
//     return (
//         <div className='video-container' >
//             <div className='videos'>
//                 <Video source={sources[0].url} />
//             </div>
//             <div className='videos'>
//                 <Video source={sources[1].url} />
//             </div>
//             <div className='videos'>
//                 <Video source={sources[2].url} />
//             </div>
//             <div className='videos'>
//                 <Video source={sources[3].url} />
//             </div>
            
//         </div>
//     )
// }

// export default Ioa
