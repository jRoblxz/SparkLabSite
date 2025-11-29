import { Container, Grid, Typography } from "@mui/material";


import { styled } from "@mui/material/styles"
import StyledPython from "../../../../components/StyledButton/StyledPython";
import StyledPHP from "../../../../components/StyledButton/StyledPHP";

const Skills = () => {
   const StyledSkill = styled("div")(({theme})=>({

         backgroundColor: theme.palette.secondary.contrastText,
         height: "100vh",
         display: "flex",
         alignItems: "center",
         [theme.breakpoints.up('xs')]: {
             paddingTop: "100px",
         },
         [theme.breakpoints.up('md')]: {
             paddingTop: "0",
         }

     }))

  return (
    <>
      <StyledSkill>
        <Container maxWidth="lg">
          
          <Typography variant="h1" pb={5}>My Skills</Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 3 }}>
              <StyledPHP></StyledPHP>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <StyledPython></StyledPython>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
            </Grid>
        </Grid>
          
        </Container>
      </StyledSkill> 
    </>
  );
};

export default Skills;
