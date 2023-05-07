import SearchIcon from "@mui/icons-material/SearchSharp";
import { TextField } from "@mui/material";


export default function SearchBar() {

  
  return (
    <>
      <TextField
        type="text"
        label="Search"
        
        sx={{
          marginLeft: "2rem",
          width: "31rem",
          borderRadius: "3rem",
          border: "none",
          position: "fixed",
          marginBottom: "4rem",
          "@media screen and (max-width: 786px)": {
            display: "none",
          },
        }}
        InputProps={{
          endAdornment: <SearchIcon sx={{ color: "black" }} />,
        }}
      />
      
     
    </>
  );
}
