export var institutions = [
  {
    _id: 1,
    name: "敏聖醫院",
    address: "桃園市經國路5號",
  },
  {
    _id: 2,
    name: "梁祐診所",
    address: "桃園市南平路6號",
  },
];

export var users = [
  {
    _id: 1,
    instId: [1],
    name: "江坤俊",
    account: "a01",
  },
  {
    _id: 2,
    instId: [1, 2],
    name: "裝強",
    account: "a02",
  },
  {
    _id: 3,
    instId: [2],
    name: "廖振志",
    account: "a03",
  },
];
// export const getInstitutions = () => {
//   return institutions;
// };
// export const getUsers = () => {
//   return users;
// };
