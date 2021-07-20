import React from 'react'
import Navbar from './Navbar'
import UploadButtons from './UploadButtons'
import Cards from './Cards'
// here we are rendering navbar first then upload buttons then cards because they comes one after another
function Main() {
    return (
        <div>
            <Navbar/>
         <UploadButtons/>
         <Cards/>
        </div>
    )
}

export default Main
