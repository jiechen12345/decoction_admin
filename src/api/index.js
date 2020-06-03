import ajax from "./ajax";
import { institutions, users } from "./data";
const BASE = "";

export const reqLogin = (username, password) =>
  ajax(BASE + "/login", { username, password }, "POST");

export const reqUser = (id = "") => {
  if (id) {
    return users.find((user) => user.id === 2);
  } else {
    return users;
  }
};

export const getUsersByInstId = (instId) => {
  return users.filter((user) => user.instId.includes(instId));
};

export const getInsts = (instId = "") => {
  if (instId) {
    return institutions.filter((inst) => inst.id.includes(instId));
  } else {
    return institutions;
  }
};

export const addInst = (instId) => {
  if (instId) {
    return users.filter((user) => user.instId.includes(instId));
  }
};
