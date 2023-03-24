import { Box } from "@mui/system";
const Login = () => {
  return (
    <Box>
      <h1>Se connecter</h1>
      <form method="post" action="http://localhost:8000/auth/login">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email*"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe*"
          required
        />
        <input type="submit" value="Se connecter" className="main-btn" />
      </form>
    </Box>
  );
};

export default Login;
