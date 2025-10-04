import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, CircularProgress, Alert, Box } from "@mui/material";
import CompanyCard from "./CompanyCard";
import Filter from "./Filter";
import companiesData from "./companies.json";

function App() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    try {
      setTimeout(() => {
        setCompanies(companiesData);
        setLoading(false);
      }, 500);
    } catch (err) {
      setError("Failed to load companies");
      setLoading(false);
    }
  }, []);

  const locations = [...new Set(companies.map(c => c.location))];
  const industries = [...new Set(companies.map(c => c.industry))];

  let filteredCompanies = companies
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    .filter(c => selectedLocation ? c.location === selectedLocation : true)
    .filter(c => selectedIndustry ? c.industry === selectedIndustry : true)
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });

  return (
    <Container>
      <Box textAlign="center" mt={4} mb={4}>
        <Typography 
          variant="h3" 
          fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          fontWeight="bold"
          color="#1976d2"
        >
          🌟 Companies Directory 🌟
        </Typography>
      </Box>

      {loading ? (
        <Grid container justifyContent="center" mt={5}>
          <CircularProgress />
        </Grid>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <Filter
            search={search}
            setSearch={setSearch}
            locations={locations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            industries={industries}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />

          {filteredCompanies.length === 0 ? (
            <Typography textAlign="center" mt={2}>No companies found</Typography>
          ) : (
            <Grid container spacing={3}>
              {filteredCompanies.map(c => (
                <Grid item xs={12} sm={6} md={4} key={c.id}>
                  <CompanyCard company={c} />
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </Container>
  );
}

export default App;
