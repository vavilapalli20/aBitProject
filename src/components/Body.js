import React from 'react'

import NewReleases from './NewReleases'
import Band from './Band'

const Body = () => {
  return (
    <div className='absolute top-[500px] '>
        <div className=''>
            
            <Band />
           {/*} <img className='w-full h-[548px] object-cover' src='https://s3-alpha-sig.figma.com/img/476d/21b6/b66d780a7fbb10091dc98cfc3c3974b4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WOLFGBWgO7o7xtyUWi78HlhehDSr2qpDvGXjNaNzO~BjdmAu~ZfVUiaFPrh6WWi7nfn88vbAazOYERqxqCaPvo1v31riwj9qINM~ZaCiyxj9-eSOXod9YzpxEyGM0icddt-xjd0VMaHK4FH9VqJKCjpG4W4laY1ir9PZ9GCv-GpyLKTQNZ-hrBFlvaJ2qtnTvc5v6VOgtM-X4koEgzJKkkDE2kwXRM8mh9QXP8~wn0CwH3Leph9LUXvHyQBB~EOwajo2TTd4QMc22wbDUtl2l2LCaJ349vaPshvIAOeCbuq4OxuK~uX1JBqt0OKq1ln4lLxU5P-BMn8iIQX4auuFSg__' alt='logo'></img> */}
            
        </div>
        <NewReleases />
        <div className='border border-gray-200'>
        </div>
    </div>
  )
}

export default Body