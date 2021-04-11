import { makeStyles } from "@material-ui/core";

export default makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderButtom: "10px solid white",
  },
  activeCard: {
    borderButtom: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },

  cardActions: {
    display: "flex",
    padding: "0 16px 8px 16px",
    justifyContent: "space-between",
  },
});
