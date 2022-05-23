import React from "react";
import * as qs from "qs";
import { useAuth } from "context/auto-index";

export const RegisterScreen = () => {
  const { register, user } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    register({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"}></input>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"}></input>
      </div>
      <button type={"submit"}>注册</button>
    </form>
  );
};
