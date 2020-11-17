import { useRef } from 'react';

function useDebug(props) {
  const prevRef = useRef(props);

  for (let i in props) {
    if (props[i] !== prevRef.current[i]) {
      console.log('props', i, 'has changed');
    }
  }

  prevRef.current = props;
}

export default useDebug;
