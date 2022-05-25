import Adminslider from "../adminreport/Adminslider";
import OverAll from "../adminreport/OverAll";

import {
  Route,
  Switch,
  Redirect,
  useParams,
  useRouteMatch,
  Link,
} from "react-router-dom";

const Adminpage = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="admaindiv">
        <div className="sliderdiv">
          <Adminslider />
        </div>
        <Switch>
          <Route path="/admin/overall" exact>
            <div className="sliderdiv">
              <Adminslider />
            </div>
            <div className="comdiv">
              <OverAll />
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default Adminpage;
