import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";


const CompanyCard = (props) => {
  return (
    <Card 
      sx={{ 
        minWidth:220, 
        minHeight: 150, 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start',
        p:2,
        boxShadow: 3, 
        border: "2px solid #87CEEB",
        transition: 'transform 0.3s', 
        '&:hover': { transform: 'scale(1.05)' } 
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold">{props.company.name}</Typography>
        <Typography color="textSecondary">{props.company.location}</Typography>
        <Typography color="textSecondary">{props.company.industry}</Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
