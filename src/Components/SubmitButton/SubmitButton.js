import * as React from "react";
import "./SubmitButton.scss";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

const SubmitButton = () => {
  return (
    <div className="formBody">
      <div className="formBody--Submit">
        <Button variant="contained" href="#contained-buttons">Submit</Button>
        <div>
          <Slider
            defaultValue={100}
            sx={{
              width: 200,
              height: 8,
              color: "success.main",
            }}
          />
        </div>
        <div>Page 1 of 1</div>
        <Button color="primary">Clear form</Button>
      </div>
      <small className="formBody--info">
        Never submit passwords through Google Forms.
      </small>
      <p className="formBody--info2">This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy.</p>
      <p className="formBody--info3">Google <span className="formBody--info4" >Forms</span></p>
    </div>
  );
};

export default SubmitButton;
