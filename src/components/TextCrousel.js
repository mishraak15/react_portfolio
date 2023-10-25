import React from 'react';
import { Typewriter} from 'react-simple-typewriter';

const TextCrousel = () => {
return (
    <div className='TextCrousel'>
      {/* <h1>
        Hello, My Name is{' '} */}
        <div className='dev flex-r'>
          <Typewriter
            words={["D  E  V  E  L  O  P  E  R "]}
            loop={2}
            cursor
            cursorStyle='.'
            typeSpeed={300}
            deleteSpeed={20}
            delaySpeed={1000}
          />
        </div>
      {/* </h1> */}
    </div>
  )
}

export default TextCrousel;