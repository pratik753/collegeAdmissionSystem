import classes from "./PaymentAfter.module.css";
import successful from "../assists/image/succesful.gif";
import MainNavigation from "../nav_footer/MainNavigation";
const PaymentAfter = () => {
  return (
    <>
      <MainNavigation />
      <div className={classes.afterpaymentcont}>
        <div className="formheading">Payment Successful</div>
        {/* <successful /> */}
        <div className="col-lg-8 mx-auto text-center">
          <img src={successful} width="40%" height="40%" />
        </div>
        <div className="col-lg-8 mx-auto text-center">
          <p>
            <b>Thank You For Payment</b>
          </p>
          <button className={classes.profilebutton}>Profile</button>
        </div>
      </div>
    </>
  );
};
export default PaymentAfter;
