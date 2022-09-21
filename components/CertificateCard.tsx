import React from 'react'
import { data } from '../certificateData'
type Props = {}

function CertificateCard({ }: Props) {
  return (
    <>
      {data.map((item) => (
        <article className=' flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-gray-100 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-150 overflow-hidden'>

          <div className=' px-0 md:px-10'>
            <h1 className=' text-[14px] font-extrabold text-left'>{item.name}</h1>
            <h4 className='flex text-xs'>{item.source}</h4>
            <p className=' text-xs text-left'>{item.year}</p>
          </div>
        </article>

      ))}
    </>
  )
}

export default CertificateCard