import React from 'react'


const Header = () => {
    const doThis = () =>{
        console.log("you are clicked!!!")
    }
  return (
    <div className='flex justify-between  h-[110px] bg-white absolute w-full '>
        <div>
            <h1 className="text-lg font-bold w-[46px] h-[29px] pl-[123px] pt-[40px] cursor-pointer" onClick={doThis}>aBit</h1>
        </div>
        <ul className='flex'>
            <li className='pt-[35px] pr-[22px] '>
            <button className="  bg-white-200 text-violet-800 rounded-[60px] border-[2px] border-violet-800 text-xs font-bold hover:bg-white-300 focus:outline-none focus:ring w-[139px] h-[39px] " onClick={doThis}> Share new video</button>
            </li>
            <li className='pr-[16px] pt-[40px] '><img className='w-[28px] h-[28px] cursor-pointer' src="https://s3-alpha-sig.figma.com/img/e429/0fe3/3cf727787d97b30f43e9d5d593811c05?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7Btq83OwrpaNBN1gB2ZGaRK9Aj2JPaCa-sUqdznBFl4sm-4l~Vx5OnHVk1Oqjni2Nvva4PIYfLHwNXvksFVdz78XVnNJvGuXYEf3bwVpEIgyDUBWsCZNSGJMp-qdV8hFnGDvOT96OdrL7BpKb8BFvgJfnYWiOnfqDE-E7rZr6IfyEH5tAqE1QvjYHIdcbxOkq-IqMcVQBuEmJ-Ss7F0IJBeAuogLALd0-IvUx0jeT13Slxe3P6R1GEhJIhaOfwSLnqh250eP4LoQDzGnS5lqJRkFyVAwV3AWNaT2F7qn1uFRN-~x-wGBmUDnKWS6h90J47uvfJKBIRk-2GCcoM1ww__" alt='logo' onClick={doThis}></img></li>
            <li className='pr-[16px] pt-[36px] '><img className='w-[36px] h-[36px] cursor-pointer' src='https://s3-alpha-sig.figma.com/img/d4b0/9a75/31214bab4d4da0e74f722e59ea7df6a7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FiDr2~pY~uc9HDUCh763LLT41vnKhyvBe7dNLODlqIQuanqGbkfDYB4LR6SFQGe75PNAKJoUFrf1IIoo4HYCLlP9V~jRTDgbZkUmYQaGjIzSMlFIrhY5GXK-rZdMVEfvh-DH~MXWEpAKW0-JZeITkYf63vqXMdIvOYo-kaq7JILkrP7cH-ibVOXRrKHrzgCViUWoKkglapU~2dAmHmruhPYIOY4g93GGdcyCZ2UfjtpaPSg7X7IGYroNbpSgEjkuzKT1gyjkGsKA3DpCYmWpMRcDf0-ma2cLUSz-4TWu-QWnaidTNGN1E~SJEN6s3kdOJu1q1rwfZkfRTwsEcPnTLQ__' alt='logo' onClick={doThis}></img></li>
            <li className='pt-[38px] pr-[15px] '><img className='w-[31px] h-[32px] border rounded-[24px] cursor-pointer' src='https://s3-alpha-sig.figma.com/img/fa88/725b/e918233d4da7ccd1a24a48ff69f54227?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=an0sSeprW4qce88X76QXGMUU53dOCt1VKgK4fba0MuWszB2hagQM2-OKWVarROMjbaKl43maoNd31xVGIAKPS9h0S9cJXXPvwj3CG5ZVpePi0B81Ji0jmOkfnITvXrmPDmXX4Lzo0JrR7~~Idq3WQ2yqexC3OAb-C3~ZIf1x-Kvie4OKol7k8bUF1W39y2NOowwg63~YMOsblyQ3jLLHNuL5oXHRSeJtJf0u7y4L~kxWm9uATezoyD9Sjqe6VB6P61-a37bzFzr91zOgjLphx-uHVI1mpDaR8UIf1ALDIRhKid8kqCToDjhzPMUErU~D-eH9kyzRXSpQbpD1XSDp0A__' alt='logo' onClick={doThis}></img></li>
            <li className='pt-[42px] pr-[54px] '><img className='w-[24px] h-[24px] cursor-pointer ' src='https://s3-alpha-sig.figma.com/img/77f1/bcd4/30c1e1ab750b92d3674e360cc2c1876a?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QamFUkFxWkCq3g0ul4TiGw5KD6Q4k5~LOlLF-hhQeJf0ZhyiBOLcBvgiob4HQBWB0kNew8EtFED2NRUftQXAncboQ1by3EL84KXFpApnXhoonpP782wzJL~ro9F2RkSuFJkPMHmcHGGDiBYjcuF~ZFIDB-JLHE1h0SgILC~hE2VpvoNH3a5jiK~UJZSJZGp5kcCceQ-7CNB1DcqQDiiOT21yVXh7hx3PiZhcVIPnB7nWYspAZzIS19H50xk8YqmGWx~aTn2ozWRPSNkGDyv9Q6fNilvHix5QW2O3QuJU47CDBFMIfGur9vSt6h4wmP6idrYBlPiZ9vlukBukwsY-bw__' alt='logo' onClick={doThis}></img></li>
        </ul>
           
    </div>
  )
}

export default Header;