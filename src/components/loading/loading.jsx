import Spinner from "react-bootstrap/Spinner";
import classes from './loading.module.css'

function Loading() {
  return (
    <div className={classes.spinner}>
      <Spinner animation="border" variant="primary"></Spinner>
    </div>
  );
}

export default Loading;
