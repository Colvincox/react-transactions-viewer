import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DropDown = ({ color, text, onClick }) => {
  const [selectedUserID, setSelectedUserID] = React.useState("");

  const handleChange = (event) => {
    setSelectedUserID(event.target.value);

    onClick(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Select User
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedUserID}
          onChange={handleChange}
          label="Select User"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>John Oliver</MenuItem>
          <MenuItem value={2}>Bob Martin</MenuItem>
          <MenuItem value={3}>Helena Fernandez</MenuItem>
          <MenuItem value={4}>Francesco De Mello</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default DropDown;
