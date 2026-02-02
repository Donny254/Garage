function DarkMode({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default DarkMode;
