const AddressProfile = (props) => {
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
            <label>Country</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.address_details.country}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>City</label>
          </div>
          <div className="col-md-6">
            <p>Muzaffarpur</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>State</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.address_details.state}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>House No.</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.address_details.house_no}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Address Line</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.address_details.address_line} </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Street</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.address_details.street}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Landmark</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.address_details.landmark}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>PinCode</label>
          </div>
          <div className="col-md-6">
            <p>{props.profiledata[0]?.address_details.pincode}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddressProfile;
