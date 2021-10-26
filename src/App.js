import { Container } from "react-bootstrap";
import "./app.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import HomePage from "./pages/home_page/HomePage";
import FlashcardPage from "./pages/flashcard_page/FlashcardPage";
import AboutPage from "./pages/about_page/AboutPage";
import ContactPage from "./pages/contact_page/ContactPage";

import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container
          className="d-flex justify-content-center container"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/flashcards" component={FlashcardPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
          </div>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
