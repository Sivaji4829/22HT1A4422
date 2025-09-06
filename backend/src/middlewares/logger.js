const axios = require("axios");

const LOG_SERVER = "http://20.244.56.144/evaluation-service/logs";
const CLIENT_ID = "1c3cc950-7b49-406d-9284-baee2cf6c088"; // Replace with your clientID
const CLIENT_SECRET = "zSWHXnuHpMVeatPS"; // Replace with your clientSecret
const ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaXZhamljaGlubmFtMjQ1OUBnbWFpbC5jb20iLCJleHAiOjE3NTcxMzkxNjQsImlhdCI6MTc1NzEzODI2NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjExZWNhZjU5LTcxZGMtNDE3Ni04Y2ZhLWViODc1MzE4Y2QzNCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InNpdmFqaSBjaGlubmFtIiwic3ViIjoiMWMzY2M5NTAtN2I0OS00MDZkLTkyODQtYmFlZTJjZjZjMDg4In0sImVtYWlsIjoic2l2YWppY2hpbm5hbTI0NTlAZ21haWwuY29tIiwibmFtZSI6InNpdmFqaSBjaGlubmFtIiwicm9sbE5vIjoiMjJodDFhNDQyMiIsImFjY2Vzc0NvZGUiOiJRZnpuZGsiLCJjbGllbnRJRCI6IjFjM2NjOTUwLTdiNDktNDA2ZC05Mjg0LWJhZWUyY2Y2YzA4OCIsImNsaWVudFNlY3JldCI6InpTV0hYbnVIcE1WZWF0UFMifQ.bJXiDKtEG3YKXyex27GmJrqRb2scLfRCAgTCvwZvNDs"; // Your token

async function log(stack, level, pkg, message) {
  console.log(`[${level.toUpperCase()}] ${pkg} | ${stack} -> ${message}`);
}

module.exports = log;


module.exports = log;
