import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserCard = () => {
  const name = "David Emmanuel Hernandez Aros";
  const eid = "david_hernnadez48@outlook.com";
  const interviewerId = 0;
  const interviewerCount = 0;
  return (
    <div className="interviewers-list">
      <Card sx={{ width: 310, marginRight: "2rem", marginBottom: "2rem" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 20, textAlign: "center" }}
            color="black"
            gutterBottom
          >
            Interviewer {interviewerId}
          </Typography>
          <Typography sx={{ mt: 3, fontSize: 16 }} color="text.primary">
            {name}
          </Typography>
          <Typography variant="body2">{eid}</Typography>
          <Typography color="text.secondary" sx={{ mt: 2, fontSize: 16 }}>
            Interviewer: {interviewerCount}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
