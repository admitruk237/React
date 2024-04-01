const App = ({ initialButtonText, initialClaaeaList }) => {
  console.log("Called");
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesName] = React.useState(initialClaaeaList);

  const onButtonClick = () => {
    setButtonText("Hello from react");
    setClassesName("green-bnt");
  };
  return (
    <div className="app">
      <button
        className={classesList}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(
  <App
    initialButtonText="Click me"
    initialClaaeaList=""
  />
);
