import { SecondaryButton } from "../../src/components/UIelements/Buttons";

const Login = ({ handleFormSubmit }) => {
  const handleForm = (e) => {
    const name = e.target.name.value;
    handleFormSubmit(name);
  };

  return (
    <section className="flex w-full p-56 h-screen justify-center bg-[#D9D9D9]">
      <form
        className="flex flex-col justify-evenly w-80 p-5"
        onSubmit={handleForm}
      >
        <h1 className="text-4xl text-center p-5">Welcome</h1>
        <input
          className="p-3 text-center outline-none bg-transparent"
          type="text"
          name="name"
          id="name"
          placeholder="Put you name Here"
        />
        <SecondaryButton>
          <input type="submit" value="Let's Start" />
        </SecondaryButton>
      </form>
    </section>
  );
};

export default Login;
