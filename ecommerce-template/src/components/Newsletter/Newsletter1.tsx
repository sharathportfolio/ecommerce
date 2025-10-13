import React from 'react'

interface Props {
    props: string
}

const Newsletter1: React.FC<Props> = ({ props }) => {
    return (
        <>
            <section className="flex items-center justify-center">
          <div className="md:w-10/12 w-11/12">
             <div className={`newsletter-block md:py-20 sm:py-14 py-10 sm:px-8 px-6 sm:rounded-[32px] rounded-3xl flex flex-col items-center ${props}`}>
                    <h2 className="text-4xl font-bold text-black text-center">Sign up and get 10% off</h2>
                    <p className='text-md text-black text-center mt-3'>Sign up for early sale access, new in, promotions and more</p>
                    <div className="input-block lg:w-1/2 sm:w-3/5 w-full h-[52px] sm:mt-10 mt-7">
                        <form className='w-full h-full relative' action="post">
                            <input type="email" placeholder='Enter your e-mail' className='caption1 w-full h-full pl-4 pr-14 rounded-xl border border-line bg-white placeholder:text-black/30' required />
                            <button className='button-main bg-green text-white font-bold bg-black py-4 px-8 rounded-lg absolute top-1 bottom-1 right-1 flex items-center justify-center'>Subscribe
                            </button>
                        </form>
                    </div>
                </div>
               </div>
            </section>
        </>
    )
}

export default Newsletter1