import React, { useState, useEffect } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material";
import axios from "../utils/api";

const StatsPage = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Replace with your backend endpoint to get all short URLs
        const response = await axios.get("/shorturls");
        setStats(response.data);
      } catch (err) {
        console.error("Error fetching stats:", err.response?.data || err.message);
        alert("Failed to fetch statistics");
      }
    };

    fetchStats();
  }, []);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Analytics
      </Typography>

      {stats.length === 0 ? (
        <Typography>No data available</Typography>
      ) : (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Short URL</TableCell>
                <TableCell>Original URL</TableCell>
                <TableCell>Total Clicks</TableCell>
                <TableCell>Clicks Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stats.map((urlItem, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <a href={urlItem.shortLink} target="_blank" rel="noopener noreferrer">
                      {urlItem.shortLink}
                    </a>
                  </TableCell>
                  <TableCell>{urlItem.url}</TableCell>
                  <TableCell>{urlItem.totalClicks}</TableCell>
                  <TableCell>
                    {urlItem.clicks.map((click, i) => (
                      <Box key={i} sx={{ mb: 1 }}>
                        {new Date(click.timestamp).toLocaleString()} - {click.referrer} - {click.geo}
                      </Box>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Box>
  );
};

export default StatsPage;
