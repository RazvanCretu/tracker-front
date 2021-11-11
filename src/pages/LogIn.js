import LogInForm from "../components/forms/LogInForm";
import { useAuth } from "../context/auth";

function LogInPage() {
  const { login } = useAuth();

  return (
    <section>
      <h1>Please Log In</h1>
      <LogInForm onLogIn={login} />
    </section>
  );
}

export default LogInPage;
