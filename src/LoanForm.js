import { useState } from "react";
import Modal from "./Modal";

export default function LoanForm() {
  function handdelSubmit(e) {
    e.preventDefault();
  }
  const [loanInputs, SetLoanInputs] = useState({
    Name: "",
    PhoneNumber: "",
    Age: "",
    isEmployee: false,
    salaryRange: "",
  });
  const canSubmit =
    loanInputs.Age === "" ||
    loanInputs.Name === "" ||
    loanInputs.PhoneNumber === "";

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center  ">
          <form
            id="Loan-form"
            className="col-sm-8 col-md-5  bg-light mt-4 mb-4"
          >
            <h1>Requst Application</h1>
            <div class="mb-3">
              <label for="Name" className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                id="Name"
                aria-describedby="NameHelp"
                value={loanInputs.Name}
                onChange={(event) => {
                  SetLoanInputs({ ...loanInputs, Name: event.target.value });
                }}
              />
              <div id="NamelHelp" className="form-text"></div>
            </div>

            <div className="mb-3">
              <label for="Age" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="Age"
                value={loanInputs.Age}
                onChange={(event) => {
                  SetLoanInputs({ ...loanInputs, Age: event.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label for="phoneNumder" className="form-label">
                <span className="bi bi-telephone-fill me-2 text-dark"></span>
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumder"
                value={loanInputs.PhoneNumber}
                onChange={(event) => {
                  SetLoanInputs({
                    ...loanInputs,
                    PhoneNumber: event.target.value,
                  });
                }}
              />
            </div>

            <div className="mb-3">
              <label for="Salary" className="form-label">
                {" "}
                <i className="bi bi-cash-coin me-2 "></i> Salary
              </label>
              <select
                id="Salary"
                className="form-select"
                aria-label="Default select example"
                value={loanInputs.salaryRange}
                onChange={(event) => {
                  SetLoanInputs({
                    ...loanInputs,
                    salaryRange: event.target.value,
                  });
                }}
              >
                <option selected>Salary</option>
                <option value="less than 500$">less than 500$</option>
                <option value="500$ or More">500$ or More </option>
                <option value="More thn 1000$">More thn 1000$</option>
              </select>
            </div>

            <div class="mb-3 form-check">
              <label className="form-check-label" for="exampleCheck1">
                <i className="bi bi-person-fill me-2 "></i> Are you employee?
              </label>

              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={loanInputs.isEmployee}
                onChange={(e) => {
                  SetLoanInputs({
                    ...loanInputs,
                    isEmployee: e.target.checked,
                  });
                }}
              />
            </div>

            <button
              type="submit"
              className={canSubmit ? "btn btn-secondary" : "btn btn-primary"}
              onClick={handdelSubmit}
              disabled={canSubmit}
            >
              <i className="bi bi-send-fill me-2 "></i> Submit
            </button>
          </form>
        </div>
      </div>

      <Modal />
    </>
  );
}
