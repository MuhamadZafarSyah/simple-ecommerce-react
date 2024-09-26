import Button from "../buttons";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <form className="mt-8 space-y-4">
      <InputForm
        htmlFor="username"
        label="username"
        placeholder="Your username"
        type="username"
        name="username"
      >
        Username
      </InputForm>
      <InputForm
        htmlFor="email"
        label="email"
        placeholder="email@gmail.com"
        type="email"
        name="email"
      >
        Email
      </InputForm>
      <InputForm
        htmlFor="password"
        label="password"
        placeholder="*******"
        type="password"
        name="password"
      >
        Password
      </InputForm>
      <InputForm
        htmlFor="confirmpassword"
        label="confirmpassword"
        placeholder="*******"
        type="confirmpassword"
        name="confirmpassword"
      >
        Password
      </InputForm>
      <div className="!mt-8">
        <Button type="submit" color="bg-blue-600">
          Register
        </Button>
      </div>
    </form>
  );
};

export default FormRegister;
