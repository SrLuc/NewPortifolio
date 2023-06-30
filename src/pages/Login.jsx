const Login = ({ handleFormSubmit }) => {
  const handleSubmit = (e) => {
    const teste = e.target.name.value;
    handleFormSubmit(teste);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default Login;
