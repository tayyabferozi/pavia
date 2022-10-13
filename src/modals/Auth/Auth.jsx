import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import Modal from "../../components/Modal";

const Auth = ({ loginForm, setLoginForm, ...rest }) => {
  const toggleForm = () => [setLoginForm((prevState) => !prevState)];

  return (
    <Modal {...rest}>
      <div className="header">{loginForm ? "LOGIN" : "SIGN UP"}</div>

      <form action="">
        <Input placeholder="Email address" />
        <div className="d-flex justify-content-center">
          <Button primary>Submit</Button>
        </div>

        <div className="text-center fs-12 mt-3">
          {loginForm ? (
            <>
              <span className="opacity-20">New user?</span>{" "}
              <span className="c-pointer" onClick={toggleForm}>
                Signup first
              </span>
            </>
          ) : (
            <>
              {" "}
              <span className="opacity-20">Already have an account?</span>{" "}
              <span className="c-pointer" onClick={toggleForm}>
                Login instead
              </span>
            </>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default Auth;
