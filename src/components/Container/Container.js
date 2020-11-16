function Container(props) {
  const { children } = props;
  return (
    <div style={{ border: '5px solid black' }}>
      {children}
    </div>
  );
}

export default Container;
