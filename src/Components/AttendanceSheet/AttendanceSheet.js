import * as React from "react";
import "./AttendanceSheet.scss";
import Link from "@mui/material/Link";
import HicoderImg from "../Images/Hicoder_img.png";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import AttendanceForm from "../AttendanceForm/AttendanceForm";
import SubmitButton from "../SubmitButton/SubmitButton";

const AttendanceSheet = () => {
  return (
    <div className="body">
      <img src={HicoderImg} alt="Hicoder Image" width="100%" />
      <div className="body--coreSheet">
        <h1 className="body--coreSheet--header">
          Student Attendance + Class Review (HCMAY2021)
        </h1>
        <hr />
        <div className="body--coreSheet--Email">
          <strong>
            hicoder.dolly@gmail.com{" "}
            <Link href="#" underline="none">
              {"Switch account"}
            </Link>
          </strong>
          <br />
          <div>
            <CloudDoneOutlinedIcon />
          </div>
        </div>
        <p color="error" id="body--coreSheet--Email--reqired">
          Required*
        </p>
      </div>
      <AttendanceForm />
      <SubmitButton />
      {/* Body Ends */}
    </div>
  );
};

export default AttendanceSheet;
