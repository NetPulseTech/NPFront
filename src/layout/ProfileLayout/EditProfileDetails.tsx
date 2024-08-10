import React from "react";

const EditProfileDetails = () => {
  return (
    <>
      <div className="profile-wrap">
        <div className="edit-title">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-briefcase iw-16 ih-16"
            >
              <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h5>work details</h5>
          <a href="#" className="btn btn-outline">
            + add work
          </a>
        </div>
        <div className="edit-content">
          <h5>
            UX Designer at Google{" "}
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit-2 iw-16 ih-16"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
            </a>
          </h5>
        </div>
      </div>
      <div className="profile-wrap">
        <div className="edit-title">
          <div className="icon">
            <svg>
              <use
                className="fill-color"
                xlinkHref="../assets/svg/icons.svg#degree"
              />
            </svg>
          </div>
          <h5>education</h5>
          <a href="#" className="btn btn-outline">
            + add education
          </a>
        </div>
        <div className="edit-content">
          <h5>
            At London Univercity - 2015
            <a>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit-2 iw-16 ih-16"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
            </a>
          </h5>
        </div>
      </div>
      <div className="profile-wrap">
        <div className="edit-title">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-heart iw-18 ih-18"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h5>relationship status</h5>
        </div>
        <div className="edit-content">
          <form className="edit-radio row">
            <div className="form-check col-sm-6">
              <label className="form-check-label" htmlFor="exampleRadios1">
                <input
                  className="form-check-input radio_animated"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                single
              </label>
            </div>
            <div className="form-check col-sm-6">
              <label className="form-check-label" htmlFor="exampleRadios2">
                <input
                  className="form-check-input radio_animated"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  defaultValue="option2"
                />
                in a relationship
              </label>
            </div>
            <div className="form-check col-sm-6">
              <label className="form-check-label" htmlFor="exampleRadios3">
                <input
                  className="form-check-input radio_animated"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  defaultValue="option3"
                />
                engaged
              </label>
            </div>
            <div className="form-check col-sm-6">
              <label className="form-check-label" htmlFor="exampleRadios4">
                <input
                  className="form-check-input radio_animated"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios4"
                  defaultValue="option3"
                />
                married
              </label>
            </div>
            <div className="form-check col-sm-6">
              <label className="form-check-label" htmlFor="exampleRadios5">
                <input
                  className="form-check-input radio_animated"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios5"
                  defaultValue="option3"
                />
                divorced
              </label>
            </div>
            <div className="form-check col-sm-6">
              <label className="form-check-label" htmlFor="exampleRadios6">
                <input
                  className="form-check-input radio_animated"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios6"
                  defaultValue="option3"
                />
                widowed
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="profile-wrap">
        <div className="edit-title">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-map-pin iw-18 ih-18"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx={12} cy={10} r={3} />
            </svg>
          </div>
          <h5>current city</h5>
          <a href="#" className="btn btn-outline ms-auto">
            + add city
          </a>
        </div>
        <div className="edit-content">
          <h5>
            London
            <a>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit-2 iw-18 ih-18"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg>
            </a>
          </h5>
        </div>
      </div>
    </>
  );
};

export default EditProfileDetails;
