import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("ADMIN");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error("Invalid email address.");
      }
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          surname,
          username,
          role,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to register. Please try again later.");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      alert("Succesfully registerd");
      setName("");
      setSurname("");
      setUsername("");
      setRole("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Container className="p-5 bg-light p-2 text-dark bg-opacity-10 rounded-2 border border-light shadow ">
      <Row className="justify-content-center text-light">
        <h2 className="text-center mb-4 d-flex justify-content-center align-itmes-center">
          Register{" "}
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/green-energy-icon.png"
            width={"40 px"}
            className="ms-3"
          />
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mt-3 text-start">
            <Form.Label x>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mt-3 text-start">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mt-3 text-start">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mt-3 text-start">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </Form.Control>
          </Form.Group>

          <Form.Group
            className="mb-3 mt-3 text-start"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            variant={password ? "success" : "dark"}
            type="submit"
            className={`w-100 fw-bold shadow mt-2 ${
              password ? "" : "opacity-50"
            }`}
          >
            REGISTER
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default RegisterPage;
