import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const About = () => {
  const [animationName, setAnimationName] = useState('idle');
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('nishantchopra2020@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="w-full text-white-600">
        <h2 className="head-text">About me</h2>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={0} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="rounded-3xl w-16 h-16 p-2 bg-white">
                      <img className="w-full h-full" src={item.icon} alt="icon" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-600">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} <span>{item.duration}</span>
                    </p>
                    <div className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item?.title?.map((content, idx) => (
                        <p key={idx}>{content}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div 
              className="space-y-2 gap-5 transition-all ease-in-out duration-500 cursor-pointer hover:bg-gray-700 rounded-lg max-w-2xs mb-6" 
              id='aboutContact'
              onClick={() => setAnimationName('salute')}
              onPointerOver={() => setAnimationName('salute')}
              onPointerOut={() => setAnimationName('idle')}
            >
              <p className="text-center font-bold text-white-600">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy icon" />
                <p className="text-center">
                  nishantchopra2020@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;