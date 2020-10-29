import { useEffect } from 'react';

function Title(props) {
  const { title } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  // useEffect(() => {
  //   function clickWindow() {
  //     console.log(title)
  //   }
  //   window.addEventListener('click', clickWindow);
  //   return () => {
  //     window.removeEventListener('click', clickWindow);
  //   }
  // }, [title]);

  return (
    <h1>{title}</h1>
  );
}

export default Title;
