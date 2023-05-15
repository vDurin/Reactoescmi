import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Menu from './Menu';
import Footer from './Footer';

// Gabriele

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(null);
  const [state, setState] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea l'oggetto dati da inviare all'API
    const data = {
      email: email,
      password: password
    };

    // Effettua la richiesta all'API
    fetch('https://645e112a12e0a87ac0e6b4cf.mockapi.io/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      // Gestisci la risposta dall'API 
      setState(true);
      //setResponsedata(responseData.name)
      setName('Giuseppe');
      console.log('Risposta dall\'API:', responseData);
    })
    .catch(error => {
      // Gestisci l'errore
      setName('nessuno')
      console.error('Errore nella richiesta:', error);
      setState(false)
    });
  };
  useEffect(() => {
  }, [state]);
  if (!state) {
    return (
     
      <div class="container">
         {state}
        <Menu />
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci l'email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci la password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Accedi
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
      </div>

    );
  } else {
    return  <div class="container">
    <Menu />
    <div>Benvenuto {name}
    </div>
    <Footer />
    </div>
  }
};

export default LoginForm;
