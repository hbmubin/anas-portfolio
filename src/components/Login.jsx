const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(pass, email);
  };

  return (
    <div className="flex items-center justify-center text-center dark:bg-gray-50 dark:text-gray-800">
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-800"
      >
        <label htmlFor="username" className="self-start text-xs font-semibold">
          Email
        </label>
        <input
          required
          name="email"
          type="text"
          className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-teal-600 focus:dark:ring-teal-600"
        />
        <label
          htmlFor="password"
          className="self-start mt-3 text-xs font-semibold"
        >
          Password
        </label>
        <input
          required
          name="password"
          type="password"
          className="flex items-center h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-teal-600 focus:dark:ring-teal-600"
        />
        <input
          value="Login"
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-teal-600 dark:text-gray-50"
        />
      </form>
    </div>
  );
};

export default Login;
