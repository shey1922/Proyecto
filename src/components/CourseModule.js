import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CourseResource from "./CourseResource";

export default function CourseModule(props) {
  return (
    <Accordion disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <CourseResource name="Tema 1" />
          <CourseResource name="Tema 2" />
          <CourseResource name="Tema 3" />
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
