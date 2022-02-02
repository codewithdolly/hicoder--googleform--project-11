import * as React from "react";
import "./AttendanceForm.scss";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";

const AttendanceForm = () => {
  return (
    <div>
      <div className="body--coreSheet2">
        <div>
          <p>
            Required <span className="body--coreSheet2--imp">*</span>
          </p>
          <div>
            <TextField
              required
              id="body--coreSheet2--details"
              defaultValue=""
              placeholder="Your Email"
              variant="standard"
            />
          </div>
        </div>
      </div>

      <div className="body--coreSheet2">
        <div>
          <p>
            How was the class?<span className="body--coreSheet2--imp">*</span>
          </p>
          <div className="body--coreSheet2-rating">
            <div>Not Good</div>
            <div>
              <div className="body--coreSheet2-rating">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
              <div>
                <Rating
                  name="half-rating"
                  defaultValue={4}
                  precision={0.5}
                  size="large"
                />
              </div>
            </div>
            <div>Awesome</div>
          </div>
        </div>
      </div>

      <div className="body--coreSheet2">
        <div>
          <p>Do you have any doubt?</p>
          <div>
            <TextField
              required
              id="body--coreSheet2--details"
              defaultValue=""
              placeholder="Your Answere"
              variant="standard"
              fullWidth
            />
          </div>
        </div>
      </div>

      <div className="body--coreSheet2">
        <div>
          <p>Feedback to Instructor & HiCoder</p>
          <div>
            <TextField
              required
              id="body--coreSheet2--details"
              defaultValue=""
              placeholder="Your Answere"
              variant="standard"
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceForm;
