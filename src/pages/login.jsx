import Counter from "../components/Fragments/Counter";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Sign In" type="login">
        <FormLogin />
      </AuthLayout>
      <div className="flex items-center justify-center h-screen">
        <Counter />
      </div>
    </>
  );
};

export default LoginPage;
