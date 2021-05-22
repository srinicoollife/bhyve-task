import { getCall } from "../utils/helper";
import {
  get_skills_endpoint,
  max_skills_count,
  skills_per_page,
} from "../consts";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BasicInfo = () => {
  const [skills, setskills] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [pageNo, setpageNo] = useState(0);

  const [selectedSkills, setselectedSkills] = useState([]);
  const [filteredSkills, setfilteredSkills] = useState([]);

  // to call api once component loaded
  useEffect(() => {
    getSkills();
  }, []);

  // to get filtered skills upon page no change
  useEffect(() => {
    pageNo && getFilteredSkills();
  }, [pageNo]);

  const getSkills = async () => {
    let res = await getCall(get_skills_endpoint);
    res.json().then((res) => {
      setskills(res);
      setpageNo(1);
    });
  };

  const getFilteredSkills = () => {
    let startIndex = (pageNo - 1) * skills_per_page;
    let endIndex = startIndex + skills_per_page;
    setfilteredSkills(skills.slice(startIndex, endIndex));
  };

  // UI click events
  const handlePageClick = (data) => setpageNo(data.selected + 1);

  const handleSkillClick = (selected_skill) => {
    if (selectedSkills.length < max_skills_count) {
      let isAlreadySelected = selectedSkills.find(
        (skill) => skill.id === selected_skill.id
      );
      if (!isAlreadySelected) {
        setselectedSkills(selectedSkills.concat(selected_skill));
      }
    } else {
      toast("Please remove any one skill by clicking on selected skill");
    }
  };

  const handleSelectedSkillClick = (selected_skill) => {
    setselectedSkills(
      selectedSkills.filter((skill) => skill.id !== selected_skill.id)
    );
  };

  const handleSaveClick = () => {
    if (!firstName.trim().length) {
      toast("Please enter valid First Name");
    } else if (!lastName.trim().length) {
      toast("Please enter valid Last Name");
    } else if (selectedSkills.length < 3) {
      toast("Please select minimum of 3 skills");
    }
  };

  return (
    <div id="basicinfo_container">
      <h5 className="text-center mb-5">Fill up the Basic Info</h5>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <div className="row">
        <div className="col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            style={{ width: "300px" }}
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(event) => setfirstName(event.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            style={{ width: "300px" }}
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(event) => setlastName(event.target.value)}
          />
        </div>
      </div>
      <div id="skills_container">
        <label htmlFor="lastName">Select Skills</label>
        <div>
          {filteredSkills.map((skill, index) => {
            return (
              <button
                key={index}
                type="button"
                className={`btn mb-3 ${
                  selectedSkills.find((s) => s.id === skill.id)
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                style={{
                  marginRight: "15px",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                }}
                onClick={() => handleSkillClick(skill)}
              >
                {skill.skillName}
              </button>
            );
          })}
        </div>
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"page"}
        pageCount={skills.length / skills_per_page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page"}
        previousClassName={"page"}
        nextClassName={"page"}
        activeClassName={"active"}
      />

      {selectedSkills.length ? (
        <div id="selected_skills_container">
          <label htmlFor="lastName">
            Selected Skills ({selectedSkills.length})
          </label>
          <div>
            {selectedSkills.map((skill, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  className="btn btn-primary mb-3"
                  style={{
                    marginRight: "15px",
                    borderRadius: "50px",
                    textTransform: "capitalize",
                  }}
                  onClick={() => handleSelectedSkillClick(skill)}
                >
                  {skill.skillName}
                </button>
              );
            })}
          </div>
          <p>* You can select Mininum of 3 skills and Maximum of 8 skills</p>
        </div>
      ) : null}

      <div class="text-end">
        <button className="btn btn-light" style={{ marginRight: "20px" }}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default BasicInfo;
