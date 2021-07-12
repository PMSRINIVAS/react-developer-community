import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteFeedAction,
  getAllFeedAction,
  updateRenderAction,
} from "../redux/FeedReducer";

export const FeedList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllFeedAction());
  }, []);

  const deleteRecord = (item) => {
    console.log("DELETE RECORD", item.id);
    //dispatch the call.
    dispatch(deleteFeedAction(item));
  };

  // Step2-update
  const updateRecord = (item) => {
    console.log("UPDATE RECORD", item);

    // Step3-updating the store
    dispatch(updateRenderAction(item));

    //navigating to the page
    history.push("/feed-upsert");
  };

  return (
    <div>
      <div className="alert alert-secondary mb-0">
        <h3>Feed List</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">query</th>
            <th scope="col">feedDate</th>
            <th scope="col">feedTime</th>
            <th scope="col">topic</th>
            <th scope="col">relevance</th>
            <th scope="col">totalComments</th>
            <th scope="col">likes</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.feed?.feedList?.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.query}</td>
              <td>{item.feedDate}</td>
              <td>{item.feedTime}</td>
              <td>{item.topic}</td>
              <td>{item.relevance}</td>
              <td>{item.totalComments}</td>
              <td>{item.likes}</td>
              <td>
                {/**Step1-update */}
                <input
                  type="button"
                  value="UPDATE"
                  className="btn btn-outline-secondary btn-sm mr-1"
                  onClick={() => updateRecord(item)}
                />
                <input
                  type="button"
                  value="DELETE"
                  // onClick={deleteRecord}
                  onClick={() => deleteRecord(item)}
                  className="btn btn-outline-danger btn-sm ml-1 "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
