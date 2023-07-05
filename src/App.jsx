import { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

import ColorList from "./components/ColorList";
import Form from "./components/Form";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const changeColor = (color) => {
    if (color === "") {
      toast.error("The field cannot be empty");
      return;
    }
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form changeColor={changeColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
