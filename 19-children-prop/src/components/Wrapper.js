function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    width: props.width,
    padding: '20px',
    margin: '20px auto',
    fontSize: props.fontSize,
  };
  console.log(props);
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
