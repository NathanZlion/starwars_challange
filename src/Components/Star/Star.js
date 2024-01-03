
import React, { useEffect } from 'react';

const Star = ({ x, y }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => { setIsVisible(true) }, Math.floor(Math.random() * 3200));
        return () => { clearTimeout(timeout) };
    })
    
    const size = Math.floor(Math.random() * 7);

    if (!isVisible) {
        return (
            <div
                className={`bg-white rounded-full absolute opacity-50`}
                style={{ left: `${x}%`, top: `${y}%`, width: `${size}px`, height: `${size}px` }}
            >
            </div>
        )
    }


    return (
            <div
                className={`bg-white rounded-full absolute animate-pulse`}
                style={{ left: `${x}%`, top: `${y}%`, width: `${size}px`, height: `${size}px` }}
            >
            </div>
  );
};

export default Star;
