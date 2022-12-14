import Head from "next/head";
import { Loading, Notify } from "notiflix";
import { useState } from "react";
import { connect } from "react-redux";
import { Button, Typograhpy } from "../../src/components/atoms";
import { TextfieldGroup } from "../../src/components/organisms";
import { LoginApi } from "../../src/redux/actions";

const form = [
  {
    label: "Username",
    nama: "username",
  },
  {
    label: "Password",
    nama: "password",
    type: "password",
  },
];

const Login = (props: { login: (data: any) => Promise<any> }) => {
  const [data, setData] = useState({} as any);
  const [error, setError] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Loading.dots("loading...", {
      svgColor: "#1e40af",
      backgroundColor: "rgba(0, 0, 100, 0.5)",
    });
    props
      .login(data)
      .then((res) => {
        Loading.remove();
        window.location.href = "/app";
      })
      .catch((err) => {
        Loading.remove();
        if (err.response.data) {
          Notify.failure(err.response.data.message, {
            position: "right-bottom",
          });
          setError(err.response.data.errors);
        }
      });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="h-screen flex bg-gradient-to-l from-cyan-500 to-blue-500 justify-center items-center flex-col">
        <div className="text-center md:mb-10 text-2xl font-extrabold font-sans">
          Amri Alamsyah
        </div>
        <div className="bg-white w-full shadow shadow-blue-800 h-screen md:w-1/3 md:h-80 rounded p-5 flex md:block justify-center items-center">
          <form onSubmit={handleSubmit}>
            <Typograhpy
              child="MASUK :"
              variant="lg"
              other={"text-blue-800 font-bold mb-4"}
            />
            <TextfieldGroup
              setError={setError}
              error={error}
              showError={false}
              form={form}
              setData={setData}
              data={data}
            />
            <Button type="submit" other={"w-full mb-6"} child={"Masuk"} />
          </form>
        </div>
      </div>
    </>
  );
};

const actions = (dispatch: any) => ({
  login: (data: any) => dispatch(LoginApi(data)),
});

export default connect(null, actions)(Login);
