import { Container } from "react-bootstrap";

import Signup from "./components/signup/Signup";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";

import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Container
        className="d-flex align-items-center justify-content-center "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
