import ComboBoxApp from "./ComboBoxApp";
import ComboBoxDebounceApp from "./ComboBoxDebounceApp";
import PatternList from "./patternList";

const App = () => {
  return (
    <>
      <ComboBoxApp style={{ margin: "5px" }} />
      <ComboBoxDebounceApp style={{ margin: "5px" }} />
      <PatternList />
    </>
  );
};

export default App;
