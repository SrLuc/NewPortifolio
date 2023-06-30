const Login = ({ handleFormSubmit }) => {
  const handleForm = (e) => {
    const name = e.target.name.value;
    handleFormSubmit(name);
  };

  return (
    <section>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default Login;
