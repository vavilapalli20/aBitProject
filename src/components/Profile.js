import React from 'react'

const Profile = () => {
  return (
    <div className='w-[571px] h-[234px] flex bg-sky-50 rounded-3xl overflow-hidden shadow-2xl absolute top-[286px] left-[39px] '>
        <div className='w-5/6'>
            <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=an0sSeprW4qce88X76QXGMUU53dOCt1VKgK4fba0MuWszB2hagQM2-OKWVarROMjbaKl43maoNd31xVGIAKPS9h0S9cJXXPvwj3CG5ZVpePi0B81Ji0jmOkfnITvXrmPDmXX4Lzo0JrR7~~Idq3WQ2yqexC3OAb-C3~ZIf1x-Kvie4OKol7k8bUF1W39y2NOowwg63~YMOsblyQ3jLLHNuL5oXHRSeJtJf0u7y4L~kxWm9uATezoyD9Sjqe6VB6P61-a37bzFzr91zOgjLphx-uHVI1mpDaR8UIf1ALDIRhKid8kqCToDjhzPMUErU~D-eH9kyzRXSpQbpD1XSDp0A__' alt='logo'></img>
        </div>
        <ul className='ml-6 pr-4'>
            <div className='flex ' >
                <li className='text-2xl pt-4 font-bold mr-12 mb-4'> DAN MACE </li>
                <li className='pt-5 text-xs' > /Johny_Films/ </li>
            </div>
            <li className='text-base font-bold text-gray-500'> Bio</li>
            <p>
                Simply a film fan creating original     content for youTube. Let's Collaborate.
            </p>
            <div className='flex mt-6 ml-3 text-center border rounded-md border-black '>  
                <li className='w-32 border-r rounded-r-md border-black'> Creator</li>
                <li className='w-36 bg-slate-700 p-0 fill-current '> </li>
            </div>
        </ul>
    </div>
  )
}

export default Profile