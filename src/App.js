import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import useServices from "./hooks/useServices";
import Departments from "./Pages/Departments/Departments/Departments";
import Doctors from "./Pages/Doctors/Doctors/Doctors";
import Home from "./Pages/Home/Home/Home";
import ShowServiceDetail from "./Pages/Home/ShowServiceDetail/ShowServiceDetail";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  const services = useServices();
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* home route */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            {/* doctors route */}
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            {/* departments route */}
            <PrivateRoute path="/departments">
              <Departments></Departments>
            </PrivateRoute>

            {/* service route */}
            <PrivateRoute path="/servicedetail/:serviceId/:name/:details">
              <ShowServiceDetail services={services}></ShowServiceDetail>
            </PrivateRoute>

            {/* login and register route */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            {/* not found route */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
