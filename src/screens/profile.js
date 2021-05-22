import { getCall } from "../utils/helper";
import { get_profile_endpoint } from "../consts";
import React, { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Profile = () => {
  const [profile, setprofile] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getProfileInfo();
  }, []);

  const getProfileInfo = async () => {
    setloading(true);
    let res = await getCall(get_profile_endpoint);
    if (res.ok) {
      res.json().then((res) => {
        console.log(res);
        setprofile(res);
        setloading(false);
      });
    }
  };

  return (
    <div>
      {loading && (
        <FadeLoader
          type="ThreeDots"
          color="lightblue"
          loading={loading}
          size={15}
          css={{ position: "absolute", left: "49%", top: "50%" }}
        />
      )}
      <div id="basicinfo_container">
        <h5 className="text-center mb-5">Profile Information</h5>
        <div>
          <label>First Name</label>
          <input
            type="text"
            style={{ width: "300px" }}
            className="form-control"
            value={profile.firstName}
            disabled
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            style={{ width: "300px" }}
            className="form-control"
            value={profile.lastName}
            disabled
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            style={{ width: "300px" }}
            className="form-control"
            value={profile.username}
            disabled
          />
        </div>
        <div id="skills_container">
          <label>
            Selected Skills ({profile.skills && profile.skills.length})
          </label>
          <div>
            {profile.skills &&
              profile.skills.map((skill, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className="btn mb-3 btn-primary"
                    style={{
                      marginRight: "15px",
                      borderRadius: "50px",
                      textTransform: "capitalize",
                    }}
                  >
                    {skill}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
