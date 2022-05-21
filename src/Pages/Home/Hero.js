import React from 'react';
import beautiful from '../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Hero = () => {
    return (
<div class="hero">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img className='md:w-2/5' src={beautiful} />
    <div className='md:w-1/2 mr-16'>
      <h1 class="text-5xl font-bold uppercase">Beauty salon for every woman</h1>
      <p class="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tenetur eius neque ipsam dolores earum dolor architecto quaerat ipsa voluptatem.</p>
      <button class="btn bg-pink-500 text-white border-0">Get an Application</button>
    </div>
  </div>
</div>
    );
};

export default Hero;