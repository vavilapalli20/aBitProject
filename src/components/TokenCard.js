import React from 'react'

const TokenCard = () => {
    const dothis = () =>{
        console.log("you are clicked");
    }
  return (
    <div className='w-[283.64px] h-[312px] rounded-2xl border border-black mt-[60px] ml-10 cursor-pointer overflow-hidden relative mb-[240px]' onClick={dothis}>
        <h1 className='absolute text-white font-bold text-lg pt-4 pl-4'> The Sound of Silence</h1>
        <ul className=' absolute flex  text-white mt-[240px] text-center w-[245px] h-16 bg-slate-300 ml-4 rounded-2xl pt-2'>
            <div className=' pl-4'>
                <li className='w-12'>Shares 317</li>
            </div>
            <div className='pl-8'>
                <li>Offered</li>
                <li>75%</li>
            </div>
            <div className='pl-9'>
                <li>Raised</li>
                <li>$9510</li>
            </div>
        </ul>
        <img className='object-cover w-full h-full ' src='https://s3-alpha-sig.figma.com/img/87c0/3d4c/1a546c66ea689708d7a03042db7eb340?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MTxtNKQS-SsMEYymio-D29idrcYpuo~HiqxfujchXlyyMUOZN0gTzTUU33UuqkHpkdsqM9L8G8zVLX2HBCCHKd4PbUv57-hSv0jjaq3Y8hmfvuF0Vt7MoS7WsUTAFV67eVHd3UPrhe5FEgqi-okXyxM~4oAdOOEuajE2UGa8VWp985rIESHsHbCLrTGPHXXI52bTxQfFtS26i201um6hCePFeDVi3e25yoaR50VS9ze5WiMVb4V3dhic02Hv38rUZVoVf5CPtCZd~RrYyYONuEpEIp~W8RUT9jAg8EO~f1CWcxxIAEtibQblGQt2veRgn0SJtAPZTBydnW6B5fpWag__' alt='logo'></img>
    </div>
  )
}

export default TokenCard