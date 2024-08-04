import React from 'react'

const blogs = [
    {
        
    }
]

const BlogsCard = () => {
  return (
    <div className='sm:w-3/4 py-14 md:py-20 space-y-28'>
        <div className='serviceCard'>
            <div className='servFlex1'>
                <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                <div>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
                    <BlogBtn/>
                </div>
            </div>
            <div className='servFlex2'>
                <img src={flower} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BlogsCard