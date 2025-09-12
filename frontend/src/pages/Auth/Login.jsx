import { Link} from "react-router-dom";
import Input from "../../components/Auth/Input";
import Button from "../../components/Auth/Button";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-600 mt-2">
            Login to continue to <span className=" text-pink-600 font-semibold">DevConnect</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="your@email.com"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <Link to="/auth/forgot" className="text-pink-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" text="Login" className="w-full" />
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-pink-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;