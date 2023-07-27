import React from 'react'
import { data } from './goalsData'

const Goals = () => {
  return (
    <>
      <section className="your-goals py-4">
        <div className="container">
          <h3 className="site-heading text-center mb-4">Achieve your <span>goals</span> with Codex View</h3>
          <div className="row gy-4">
            {
              data.map((item, i) => (
                <div className="col-md-3" key={i}> 
                <div className='card py-3 p-2 border-0 rounded-4'>
                <div className="media">
                    <div className="media-body text-center">
                      {item.svg}
                      <h5 className="mb-0 pt-1">{item.h5}</h5>
                      <p className=' m-auto'>{item.p}</p>
                    </div>
                  </div>
                </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Goals