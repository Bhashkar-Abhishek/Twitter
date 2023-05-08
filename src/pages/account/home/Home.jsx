import { useRecoilState } from "recoil";
import Footer from "../../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import SearchBar from "../searchbar/SearchBar";
import Middle from "../middle/Middle";
import { RightSection } from "../rightsection/RightSection";
import { RightDownSection } from "../rightdownsection/RightDownSection";
import {isLogin} from '../../recoilAtom/Atom'
import Grid from "@mui/material/Grid";
import styles from "./Home.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";

function Home() {
  const [islogin, setlogin] = useRecoilState(isLogin);
  const isLogedIn=localStorage.getItem("isLogedIn")
  return (
    <>
    {isLogedIn?(
      <Grid container spacing={2}>
      <Grid item xs={3} md={2}>
        <Sidebar />
      </Grid>

      <Grid item xs={5} md={6}>
         <Middle />
      </Grid>

      <Grid item xs={4} md={4}>
         <SearchBar />
         <RightSection />
         <RightDownSection />
      </Grid>

    </Grid>
    ):(<Grid container spacing={2}>
        <TwitterIcon
          sx={{
            color: "skyblue",
            margin: "auto",
            fontSize: "10rem",
            marginTop: "3rem",
            width: "100%",
          }}
        />
      <h1 className={styles.heading}>Welcome to home page</h1>
      <Footer />
    </Grid>)}
    </>
  );
}

export default Home;
