import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "../utils/api";

const ShortenerPage = () => {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState(30);
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    try {
      const payload = { url, validity: Number(validity) };
      if (shortcode) payload.shortcode = shortcode;

      const response = await axios.post("/shorturls", payload);
      setResults([...results, response.data]);
      setUrl("");
      setShortcode("");
      setValidity(30);
    } catch (err) {
      console.error("Error creating short URL:", err.response?.data || err.message);
      alert("Failed to create short URL");
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create Short URLs
      </Typography>

      <TextField
        label="Long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Custom Shortcode (Optional)"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Validity in minutes"
        type="number"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
        Shorten URL
      </Button>

      <Box sx={{ mt: 4 }}>
        {results.map((res, idx) => (
          <Box key={idx} sx={{ mb: 2, p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
            <Typography>
              <strong>Short Link:</strong>{" "}
              <a href={res.shortLink} target="_blank" rel="noopener noreferrer">
                {res.shortLink}
              </a>
            </Typography>
            <Typography>
              <strong>Expiry:</strong> {new Date(res.expiry).toLocaleString()}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShortenerPage;
