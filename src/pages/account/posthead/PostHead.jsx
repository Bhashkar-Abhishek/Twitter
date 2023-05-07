import { useEffect, useState } from "react";
import styles from "./PostHead.module.css";
import { Avatar, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import CollectionsIcon from "@mui/icons-material/Collections";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRecoilState } from "recoil";
import { tweetData, userData } from "../../recoilAtom/Atom";

function PostHead() {
  const [btnfor, setbtnFor] = useState(true);
  const [btnfollow, setbtnfollow] = useState(false);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [tweet, setTweet] = useRecoilState(tweetData);
  const [user, setUser] = useRecoilState(userData);
  // const islogin = false;
  
  const number = Math.floor(Math.random() * 900) + 100;

  const handleButtonClick = (buttonName) => {
    if (buttonName == "foryou") {
      setbtnFor(true);
      setbtnfollow(false);
    } else {
      setbtnfollow(true);
      setbtnFor(false);
    }
  };
 

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  function handleInputChange(e) {
    setText(e.target.value);
    // console.log(image);
  }

  useEffect(() => {
    console.log(image);
  }, [image]);

  function handleClick() {
    if (image || text) {
      let userData = JSON.parse(localStorage.getItem("userData"));
      let username = userData.username;
      let userObj = {
        username: username,
        images:
          "https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0",
      };
      let tweetObj = { 
        content: text,
        image: image,
        likeCount: 0,
        iscomment: false,
        commentCount: 0,
        isretweet: false,
        reTweetsCount: 0,
        isLiked: false,
        poll: 0,
        ispoll: false,
        share: 0,
        isshare: false,
      };
      Object.preventExtensions(tweetObj);
      Object.preventExtensions(userObj);
      setTweet([tweetObj, ...tweet]);
      setUser([userObj, ...user]);
    } else {
      alert("select something");
    }
    setImage('')
  }

  return (
    <div>
      <h1>Home</h1>
      <div className={styles.header}>
        <div className={styles.buttons}>
          <button
            className={btnfor ? styles.HeadToggleBtn : styles.HeadBtn}
            onClick={() => handleButtonClick("foryou")}
          >
            For You
          </button>
          <button
            className={btnfollow ? styles.HeadToggleBtn : styles.HeadBtn}
            onClick={() => handleButtonClick("follow")}
          >
            Following
          </button>
        </div>
        <div className={styles.postTweet}>
          <Avatar
            alt="Remy Sharp"
            className={styles.avatar}
            src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
          />
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "90px",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              marginLeft: "28px",
            }}
          >
            Everyone
            <KeyboardArrowDownIcon />
          </Button>
        </div>
        <div className={styles.tweetInput}>
          <input
            type="text"
            placeholder="What's happening"
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.btn}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "18px",
              width: "190px",
              borderRadius: "15px",
              transformStyle: "none",
              textTransform: "none",
              border: "none",
              margin: "0px",
            }}
          >
            <PublicIcon sx={{ height: "15px" }} />
            Everyone can reply
          </Button>
        </div>
        <div className={styles.Btns}>
          <div className={styles.btn1}>
            <label htmlFor="fileInput">
              <CollectionsIcon
                sx={{
                  height: "20px",
                  width: "20px",
                  color: "#1DA1F2",
                  marginRight: "10px",
                  padding: "5px",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "lightskyblue",
                  },
                }}
              />
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
             
              style={{ display: "none" }}
              onChange={handleChange}
            />
            
            <GifIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <PollIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <SentimentSatisfiedAltIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <DateRangeIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <LocationOnIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
          </div>
          
          <div className={styles.btn2}>
            <Button
              sx={{
                backgroundColor: "#1DA1F2",
                color: "White",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#0e8db7",
                },
              }}
              onClick={handleClick}
            >
              Tweet
            </Button>
          </div>
        </div>
        <div  >
        {image ? <img src={image} alt="preview image" style={{width: '30rem', height: '35rem'}} /> : ''}
          </div>
        <div className={styles.lastBtn}>
          <button
            style={{ color: "#1DA1F2", fontSize: "0.9rem", fontWeight: "500" }}
          >
            Show {number} Tweets
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostHead;
