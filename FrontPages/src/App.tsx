import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const DataEntryDashboard = lazy(() => import("./pages/DataEntryDashboard"));
const TrackerDashboard = lazy(() => import("./pages/TrackerDashboard"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/data-entry-dashboard'
              element={<DataEntryDashboard />}
            />
            <Route path='/tracker-dashboard' element={<TrackerDashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

{
  /* Implement navigation on a new function/component:
ReactForms -> onSubmit button, send POST request to BE, if correct data returns,
redirect to authenticated dashboard page
Redirection to different page (tracker dashboard) using simple navigation.  */
}

export default App;
