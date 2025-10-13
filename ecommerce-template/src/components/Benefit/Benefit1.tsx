import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';
import { SiTicktick } from 'react-icons/si';
import { TbTruckReturn } from 'react-icons/tb';

interface Props {
  props: string;
}

const Benefit1: React.FC<Props> = ({ props }) => {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="md:w-10/12 w-11/12">
          {' '}
          <div className={`benefit-block ${props}`}>
            <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
              <div className="benefit-item flex flex-col items-center justify-center">
                <RiCustomerService2Line size={50}  className='text-black'/>
                <div className="heading6 text-center mt-5 font-bold text-xl text-black">
                  24/7 Customer Service
                </div>
                <div className="caption1 text-secondary text-center mt-3 text-black">
                  We&apos;re here to help you with any questions or concerns you
                  have, 24/7.
                </div>
              </div>
              <div className="benefit-item flex flex-col items-center justify-center">
                <TbTruckReturn size={50} className='text-black'/>
                <div className="heading6 text-center mt-5 font-bold text-xl text-black">
                  14-Day Money Back
                </div>
                <div className="caption1 text-secondary text-center mt-3 text-black">
                  If you&apos;re not satisfied with your purchase, simply return
                  it within 14 days for a refund.
                </div>
              </div>
              <div className="benefit-item flex flex-col items-center justify-center">
                <SiTicktick size={50} className='text-black'/>
                <div className="heading6 text-center mt-5 font-bold text-xl text-black">
                  Our Guarantee
                </div>
                <div className="caption1 text-secondary text-center mt-3 text-black">
                  {' '}
                  We stand behind our products and services and guarantee your
                  satisfaction.
                </div>
              </div>
              <div className="benefit-item flex flex-col items-center justify-center">
                <FaShippingFast size={50} className='text-black'/>
                <div className="heading6 text-center mt-5 font-bold text-xl text-black">
                  Shipping worldwide
                </div>
                <div className="caption1 text-secondary text-center mt-3 text-black">
                  We ship our products worldwide, making them accessible to
                  customers everywhere.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit1;
