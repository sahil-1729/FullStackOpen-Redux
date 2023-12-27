import { useSelector } from "react-redux";
import { setNotification_None } from "../reducers/notificationReducer";
import { useDispatch } from "react-redux";
const Notification = () => {
  var notific = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const mpty = "";

  // if (notific) {
  //   setTimeout(() => {
  //     const result = "";
  //     dispatch(setNotification_None(result));
  //   }, 5000);
  // }
  return (
    <div
    // className="border-solid border-green-600 rounded-sm w-4/12 p-1 border-2"
    >
      <span className="font-semibold	">{notific}</span>
    </div>
  );
};

export default Notification;
