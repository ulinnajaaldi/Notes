import React from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChange];
};
