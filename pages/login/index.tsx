import Head from "next/head";
import { Notify } from "notiflix";
import { useState } from "react";
import { connect } from "react-redux";
import { Button, Typograhpy } from "../../src/components/atoms";
import { TextfieldGroup } from "../../src/components/organisms";
import { ValidationSubmit } from "../../src/functions";
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
  const [checkForm, setCheckForm] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const check = ValidationSubmit(form, data);
    setCheckForm(!check);
    if (check) {
      props
        .login(data)
        .then((res) => {
          if (res.status === 200) {
            fetch("/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: res.data.token,
                refreshToken: res.data.refreshToken,
              }),
            }).then(() => {
              Notify.success("Login Success", {
                position: "right-bottom",
              });
              window.location.href = "/app";
            });
          }
        })
        .catch((err) => {
          if (err.response.data) {
            Notify.failure(err.response.data.message, {
              position: "right-bottom",
            });
            setError(err.response.data.errors);
          }
        });
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="h-screen flex justify-center items-center flex-col">
        <div className="text-center md:mb-10">Logo</div>
        <div className="bg-white w-full shadow shadow-teal-800 h-screen md:w-1/3 md:h-80 rounded p-5 flex md:block justify-center items-center">
          <form onSubmit={handleSubmit}>
            <Typograhpy
              child="MASUK :"
              variant="lg"
              other={"text-teal-800 font-bold mb-4"}
            />
            <TextfieldGroup
              setError={setError}
              error={error}
              showError={checkForm}
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
