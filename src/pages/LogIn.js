import { useAuth } from "../context/auth";

function LogInPage() {
  const { login } = useAuth();

  return (
    <section>
      <h1>Please Log In</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          login();
        }}
      >
        LogIn
      </button>
    </section>
  );
}

export default LogInPage;
