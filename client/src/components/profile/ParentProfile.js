const ParentProfile = (props) => {
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
            <label>Father's name</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.parents_details.father_name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Mother's Name</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.parents_details.mother_name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Father's Phone No.</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.parents_details.father_mobile}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Mother's Phone No.</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.parents_details.mother_mobile}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Father's Occupation</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.parents_details.mother_occupation}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Mother's Occupation</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.parents_details.mother_occupation}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ParentProfile;
