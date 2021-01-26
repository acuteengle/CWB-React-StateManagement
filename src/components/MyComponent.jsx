const MyComponent = (props) => {
  const { myProp } = props;
  return (
    <div>
      <p>Happy Birthday, {myProp}</p>
    </div>
  );
};

export default MyComponent;
