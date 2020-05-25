const menuList = [
  {
    title: "首頁",
    key: "/home",
    icon: "home",
    isPublic: true,
  },
  {
    title: "商品",
    key: "/products",
    icon: "appstore",
    children: [
      {
        title: "類別管理",
        key: "/category",
        icon: "bars",
      },
      {
        title: "產品管理",
        key: "/product",
        icon: "tool",
      },
    ],
  },

  {
    title: "帳號管理",
    key: "/user",
    icon: "user",
  },
];

export default menuList;
