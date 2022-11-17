import React from 'react';
import img from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import Button from '../../../Button/Button';

const Banner = () => {
    return (
     <section className=''
     style={
       { background:`url(${bg})`,
       backgroundSize : 'cover'
    }
     }
     >
           <div className="hero mt-10 ">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <img src={img} alt='' className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>Get Start</Button>
                </div>
            </div>
        </div>
     </section>
    );
};

export default Banner;