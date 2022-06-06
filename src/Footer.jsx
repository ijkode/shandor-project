import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import footer from "./logosmall.jpeg";

function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary" align="right">
      {<img src={footer} width="400" height="100" align="right"></img>}
      העמותה ע"ש אהרן שנדור (ע"ר)
      <br />
      הכוון וסיוע לילדים ובוגרים בסיכון
      <br />
      שדרות החושן 6 א' מבשרת ציון
      <br />
      90805 דוא"ל galitby017@gmail.com
      <br />
      {"Copyright © "}
      <Link color="inherit">JCE project Team</Link> {new Date().getFullYear()}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
