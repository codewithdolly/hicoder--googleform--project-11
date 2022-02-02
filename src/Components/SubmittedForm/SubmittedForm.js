import * as React from "react";
import "./AttendanceSheet.scss";
import Link from "@mui/material/Link";
import HicoderImg from "../Images/Hicoder_img.png";
import SubmitButton from "../SubmitButton/SubmitButton";

const SubmittedForm = () => {
    return (
        <div className="body">
            <img src={HicoderImg} alt="Hicoder Image" width="100%" />
            <div className="body--coreSheet">
                <h1 className="body--coreSheet--header">
                    Student Attendance + Class Review (HCMAY2021)
                </h1>
                <hr />
                <div className="">
                    Submit another response
                </div>
                <SubmitButton />
                {/* Body Ends */}
            </div>
        </div>
  );
};

export default SubmittedForm;
