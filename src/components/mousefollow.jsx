import { useEffect, useState } from 'react';

const mousePosi = {x:0, y:0}
const myfunc = (x,y) => {mousePosi.x = x; mousePosi.y = y;}

export default function MouseFollow() {
  //const [mousePos, setMousePos] = useState({ x:0, y:0 });
  //const [prevMousePos, setprevMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      
      myfunc(event.clientX, event.clientY );
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  const style = {top: Math.floor(mousePosi.y), left: Math.floor(mousePosi.x)}

  return (
    <div>
        {/* <p>previous x:{prevMousePos.x} y:{prevMousePos.y}</p> */}
        <p>current x:{mousePosi.x} y:{mousePosi.y}</p>

        <div className='qwe' style={style}>

        </div>
    </div>
  )
}