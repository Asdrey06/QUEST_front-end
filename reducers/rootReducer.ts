import { combineReducers } from "redux";
import users from "./users";
import concierges from "./concierges";
import offers from "./offers";
import createoffers from "./createoffers";
import conciergeProfile from "./conciergeProfile";
import openrequest from "./openrequest";

// Define the RootState type
export type RootState = {
  users: typeof users;
  concierges: typeof concierges;
  offers: typeof offers;
  createoffers: typeof createoffers;
  conciergeProfile: typeof conciergeProfile;
  openrequest: typeof openrequest;
};

const rootReducer = combineReducers({
  users,
  concierges,
  offers,
  createoffers,
  conciergeProfile,
  openrequest,
});

export default rootReducer;
