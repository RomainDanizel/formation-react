import { useEffect, useState, memo } from 'react';

function Resize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function resize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

  return (
    <div>{width}px</div>
  );
}

export default memo(Resize);
