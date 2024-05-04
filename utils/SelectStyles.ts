export const selectStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "transparent",
    padding: "6px",
    border:
      state.isFocused || state.isHover
        ? "1px solid white"
        : "1px solid #46464C",
    boxShadow: "none",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color:"white" ,
    backgroundColor: state.isFocused ? "var(--bg-tertiary)" : "provided.backgroundColor",
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: '#222', // This line changes the background color of the dropdown menu
  }),
};