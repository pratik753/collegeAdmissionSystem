const ApplicantProfile = (props) => {
  console.log(props.profiledata);
  let otp=Math.floor(Math.random()*1000);
  let id=props.profiledata[0].name;
  id=id+otp;
  console.log(id);
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="row">
          <div className="col-md-6">
            <label>User Id</label>
          </div>
          <div className="col-md-6">
            <p>{id}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Phone</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.mobile}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Aadhar No</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.applicant_details.aadhar_no}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Gender</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.applicant_details.gender}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Date of Birth</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.applicant_details.date_of_birth.slice(0,10)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Course</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.course}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Choice 1</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.applicant_details.choice_first}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Choice 2</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.applicant_details.choice_second}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Choice 3</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.applicant_details.choice_third}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ApplicantProfile;
