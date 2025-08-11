import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Typography,
  CircularProgress,
  Paper,
  InputAdornment,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchResult {
  text: string;
  filename: string;
}

const SemanticSearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 500);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!debouncedQuery) return;

      setLoading(true);
      setError("");
      setResults([]);

      try {
        const response = await axios.get<{ results: SearchResult[] }>(
          "http://127.0.0.1:8000/semantic-search/",
          {
            params: { query: debouncedQuery },
          }
        );
        setResults(response.data.results);
      } catch (err: any) {
        setError(err.response?.data?.detail || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [debouncedQuery]);

  const getTitle = (text: string) => {
    const words = text.split(/\s+/);
    return words.slice(0, 8).join(" ") + (words.length > 8 ? "..." : "");
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5, p: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Semantic Search"
        placeholder="Try: 'figureout', 'complaint', 'thank you', etc."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#fff" }} />
            </InputAdornment>
          ),
          sx: {
            color: "#fff",
            "& fieldset": {
              borderColor: "#fff", // border color of text field
            },
            "&:hover fieldset": {
              borderColor: "#fff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff",
            },
          },
        }}
        InputLabelProps={{
          sx: { color: "#ccc" },
        }}
      />

      <Box mt={4}>
        {loading && (
          <Box display="flex" justifyContent="center">
            <CircularProgress color="inherit" />
          </Box>
        )}

        {error && (
          <Typography color="error" mt={2} textAlign="center">
            {error}
          </Typography>
        )}

        {!loading && results.length > 0 && (
          <Stack spacing={3}>
            {results.map((item, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "#1f1f1f",
                  color: "#fff",
                  border: "1px solid #ffffff", // white border for result cards
                }}
              >
                <Typography variant="h6" gutterBottom color="white">
                  {getTitle(item.text)}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ whiteSpace: "pre-wrap", color: "#ccc" }}
                >
                  {item.text}
                </Typography>

                <Divider sx={{ my: 2, borderColor: "#ffffff" }} />
                <Chip
                  label={`Filename: ${item.filename}`}
                  color="info"
                  variant="outlined"
                />
              </Paper>
            ))}
          </Stack>
        )}

        {!loading && results.length === 0 && debouncedQuery && !error && (
          <Typography mt={2} sx={{ color: "#aaa" }} textAlign="center">
            No semantic matches found for "{debouncedQuery}".
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SemanticSearchBar;
