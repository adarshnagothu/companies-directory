import React from "react";
import { Grid, TextField, Autocomplete, Popper } from "@mui/material";
import { styled } from "@mui/system";

// Custom Popper to force dropdown alignment with input
const CustomPopper = styled(Popper)({
  width: "35% !important",
  zIndex: 1300,
});

const Filter = ({
  search,
  setSearch,
  locations,
  selectedLocation,
  setSelectedLocation,
  industries,
  selectedIndustry,
  setSelectedIndustry,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <Grid container spacing={2} mb={4} justifyContent="center">
      {/* Search by Name */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Search by Name"
          variant="outlined"
          fullWidth
          size="medium"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ borderRadius: 2 }}
        />
      </Grid>

      {/* Filter by Location */}
      <Grid item xs={12} sm={6} md={3}>
        <Autocomplete
          options={locations}
          value={selectedLocation}
          onChange={(e, newValue) => setSelectedLocation(newValue || "")}
          renderInput={(params) => (
            <TextField {...params} label="Location" variant="outlined" fullWidth size="medium" />
          )}
          freeSolo
          fullWidth
          PopperComponent={CustomPopper}
          slotProps={{
            paper: {
              sx: {
                mt: 1,
                borderRadius: 2,
                boxShadow: 3,
                "& .MuiAutocomplete-option": {
                  py: 1,
                  px: 2,
                  fontSize: "0.95rem",
                },
              },
            },
          }}
        />
      </Grid>

      {/* Filter by Industry */}
      <Grid item xs={12} sm={6} md={3}>
        <Autocomplete
          options={industries}
          value={selectedIndustry}
          onChange={(e, newValue) => setSelectedIndustry(newValue || "")}
          renderInput={(params) => (
            <TextField {...params} label="Industry" variant="outlined" fullWidth size="medium" />
          )}
          freeSolo
          fullWidth
          PopperComponent={CustomPopper}
          slotProps={{
            paper: {
              sx: {
                mt: 1,
                borderRadius: 2,
                boxShadow: 3,
                "& .MuiAutocomplete-option": {
                  py: 1,
                  px: 2,
                  fontSize: "0.95rem",
                },
              },
            },
          }}
        />
      </Grid>

      {/* Sort by Name */}
      <Grid item xs={12} sm={6} md={3}>
        <Autocomplete
          options={["A → Z", "Z → A"]}
          value={sortOrder === "asc" ? "A → Z" : "Z → A"}
          onChange={(e, newValue) =>
            setSortOrder(newValue === "A → Z" ? "asc" : "desc")
          }
          renderInput={(params) => (
            <TextField {...params} label="Alphabetical Order" variant="outlined" fullWidth size="medium" />
          )}
          fullWidth
          PopperComponent={CustomPopper}
          slotProps={{
            paper: {
              sx: {
                mt: 1,
                borderRadius: 2,
                boxShadow: 3,
                "& .MuiAutocomplete-option": {
                  py: 1,
                  px: 2,
                  fontSize: "0.95rem",
                },
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
