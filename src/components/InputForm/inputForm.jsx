import  { useState } from "react";

const InputForm = ({ addcar }) => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");

// useref const nameInputRef=useRef(null)
// useId const nameId=useId()
// const modelId =useId()
  const handleSubmit = (e) => {
    e.preventDefault();

    addcar({ name, model });
    setName("");
    setModel("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Car name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Car model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />

      <button type="submit">Add Car</button>
    </form>
  );
};

export default InputForm;
