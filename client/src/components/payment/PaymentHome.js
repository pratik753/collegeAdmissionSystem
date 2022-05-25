import MainNavigation from "../nav_footer/MainNavigation";
import classes from "./payment.module.css";

const PaymentHome = () => {
  return (
    <>
      <MainNavigation />
      <div className={classes.paymentcont}>
        <div className="formheading">Payment</div>
        <div className="col-lg-8 mx-auto text-center">
          <p>
            Our payment services are soon to start till then you can tranfer
            money in our account
          </p>
          <b>
            <p>
              Pay Rs<span id="amount"></span> for{" "}
              <span id="plan">10,000.00</span>
            </p>
          </b>
          <p>Our details below:</p>
          <button className={classes.paymentbutton}>Pay</button>
          <div style={{ border: "1px solid #555" }}>
            A/C no:&nbsp; 7512779400 <br />
            IFSC:&nbsp;KKBK0000682
          </div>
          <p>Once the Payment is successful send a screenshot at:</p>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default PaymentHome;
