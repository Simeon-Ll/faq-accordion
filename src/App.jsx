import React from 'react'
import desktop from './assets/images/background-pattern-desktop.svg'
import mobile from './assets/images/background-pattern-mobile.svg'
import star from './assets/images/icon-star.svg'
import data from './data'
import plus from './assets/images/icon-plus.svg'
import minus from './assets/images/icon-minus.svg'


function App() {

    const [faqState, setFaqState] = React.useState({
      faq1: false,
      faq2: false,
      faq3: false,
      faq4: false,
    })

    const toggleFaq = (faq) => {
      setFaqState((prevState) => ({
        ...prevState,
        [faq]: !prevState[faq],
      }));
    }
    
  return (
    <>
      <picture className='w-full absolute inset-y-0'>
        <source media="(min-width: 425px)" srcSet={desktop} />
        <img src={mobile} alt="" />
      </picture>

      <div className='w-11/12 bg-White rounded-md flex flex-col p-4 z-10 pb-0 md:w-96'>
        <div className='flex items-center px-2'>
          <img src={star} alt="" className='w-7'/>
          <h1 className='ml-4 text-3xl'>FAQs</h1>
        </div>
        <div className='py-2'>
          {data.map(faq=>(
            <>
              <div className=' flex flex-col p-2 border-b-2 border-gray-100 hover:text-purple-700 cursor-pointer last:border-0' key={faq.index} onClick={()=> toggleFaq(faq.index)}>
                <div className='flex justify-between items-center'>
                  <h3 className='text-xs '>{faq.question}</h3>
                <img src={faqState[faq.index] ? minus: plus} alt="" className='w-6' />
                </div>
                
                {
                  faqState[faq.index] &&
                  <div className='text-xs text-black py-2'>
                    {faq.answer}
                  </div>
                }
              </div>
                
            </>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default App
