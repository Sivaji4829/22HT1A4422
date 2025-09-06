import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage.jsx";
import StatsPage from "./pages/StatsPage.jsx";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Stats
          </Button>
        </Toolbar>
      </AppBar>

      {/* Routes */}
      <Box sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
