const AcademicProfile = (props) => {
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
            <label>Type of Exam</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.type_of_exam}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>10th Roll No.</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.ten_roll}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Aggr. % in 10th</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.ten_percent}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>10th Passing Year</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.ten_passing_year}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>12th Roll No.</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.twelve_roll}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Aggr. % in 12th</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.twelve_percent}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>12th Passing Year</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.twelve_passing_year}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>13th Roll No.</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.other_roll}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Aggr. % in 13th</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.other_passing_year}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>13th Passing Year</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0].academic_details.other_percent}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AcademicProfile;
