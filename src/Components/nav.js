import React, { useEffect, useState } from "react";
import { Person, Logout } from "@mui/icons-material"; // Import icons
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./styles/myStyles.css";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import History from './history';
let useremail;
function CustomNavbar({ scrollToComponent }) {
  const[showHistory,setShowHistory]=useState(false);
  const [user, setUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      useremail=user ?user.email:"null";
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const handleLoginClick = async () => {
    if (user) {
      signOut(auth);
    } else {
      // If user is not logged in, navigate to login page
      navigate("/login");
    }
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
    console.log(useremail);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSignOut = () => {
    signOut(auth);
    setOpenDialog(false); // Close the dialog after signing out
  };

  const handleHistoryClick = () => {
    setShowHistory(true);
    navigate("/history"); // Navigate to the history page
  };

  return (
    <>
     
      <div className="header-container">
        <img src={logo} alt="logo" />
        <div className="header-middle">
          <ui>
            <li>
              <a href="">SummarizeNow</a>
            </li>
            <li>
              <a onClick={() => scrollToComponent("extensions")}>Browser Extensions</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
          </ui>
        </div>
        <div className="header-last" style={{ display: "flex", height: "6vh" }}>
          {user && ( // Only render the following block if user is signed in
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "8px",
                  cursor: "pointer",
                  backgroundColor: "rgb(101, 74, 206)",
                }}
                onClick={handleDialogOpen} // Open dialog on click
              >
                <Person style={{ fontSize: 24, color: "#333" }} />
              </div>
              <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                PaperProps={{
                  style: {
                    borderRadius: 16,
                    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                    maxWidth: 400,
                  },
                }}
              >
                <DialogTitle style={{ background: "#6A1B9A", color: "white" }}>
                  User Options
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Hello, {user ? user.email.split("@")[0] : "Guest"}!
                  </DialogContentText>
                  <Button onClick={handleHistoryClick} color="primary" variant="outlined">
                    History
                  </Button>
                 
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleSignOut}
                    color="primary"
                    variant="outlined"
                    style={{ color: "#6A1B9A", borderColor: "#6A1B9A" }}
                  >
                    <Logout style={{ marginRight: 8 }} />
                    Sign Out
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
          <strong>
            <div style={{ color: "white", marginTop: "1vh" }}>
              {console.log(useremail)}
              {user ? (
                user.email.split("@")[0]
              ) : (
                <button
                  variant="light"
                  className="last-btn2"
                  onClick={handleLoginClick}
                >
                  Sign In
                </button>
              )}
            </div>
          </strong>
        </div>
      </div>
    </>
  );
}
export {useremail};
export default CustomNavbar;
