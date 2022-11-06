import React from '../../../../react-portfolio/node_modules/@types/react';

export default function About() {
  return (
    <div>
   
      <p className='content is-medium'>Full Stack Developer</p>
      <hr/>
      <img className='photo' src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Meskerem (Mesky) Assefa"/>
      <p className='content'>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}