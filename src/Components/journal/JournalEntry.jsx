import React from 'react'

const JournalEntry = () => {
  return (
    <div className='journal__entry pointer' >
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize:"cover",
                backgroundImage:"url(https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true)"
            }}
        >  
        </div>
        <div className='journal__entry-body' >
            <p className='journal__entry-title' >
                Un nuevo dia
            </p>
            <p className='journal__entry-content' >
                fdsfsdfdsfsdf  fds fsd f fd fsdf sdf dsfs
            </p>

        </div>
        <div className='journal__entry-date-box' >
            <span>Monday</span>
            <h4>28</h4>

        </div>
    </div>
  )
}

export default JournalEntry