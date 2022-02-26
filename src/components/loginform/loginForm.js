import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react'
import { Form, Input, Button, Alert, Row, Col } from 'antd';



const LoginForm = ({baseUrl, issuer}) => {
  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
}