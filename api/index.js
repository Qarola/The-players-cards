const server = require("./src/app.js");
const { conn, Player } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  console.log("Connection with DB is correct");
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
 //<<<<<<<<<<<<<<< DESCOMENTAR PARA CARGAR LA DB >>>>>>>>>>>>>>>>>>>>>>>>>>
  /*const tom = await Player.create({
      id: 1,
      name: "tom",
      status: "active",
      ranking: 123,
      avatar:
        "https://gravatar.com/avatar/1813216c2d6569a56e6fd3ba3683a7d4?s=400&d=robohash&r=x",
    });
    const santi = await Player.create({
      id: 2,
      name: "santi",
      status: "active",
      ranking: 159,
      avatar:
        "https://gravatar.com/avatar/6b0013df0c40a9434a276c4b11d569c2?s=400&d=robohash&r=x",
    });
    const joe = await Player.create({
      id: 3,
      name: "joe",
      status: "active",
      ranking: 214,
      avatar:
        "https://gravatar.com/avatar/3ce35acdc48e7959392e85b54fc30128?s=400&d=robohash&r=x",
    });
    const chris = await Player.create({
      id: 4,
      name: "chris",
      status: "active",
      ranking: 156,
      avatar:
        "https://gravatar.com/avatar/96ca52e367496e41fb0a966e3c232f55?s=400&d=robohash&r=x",
    });
    const lau = await Player.create({
      id: 5,
      name: "lau",
      status: "active",
      ranking: 654,
      avatar:
        "https://gravatar.com/avatar/517ec5059edacbcb9f3aefc4fb4cd632?s=400&d=robohash&r=x",
    });
    const moe = await Player.create({
      id: 6,
      name: "moe",
      status: "inactive",
      ranking: 124,
      avatar:
        "https://gravatar.com/avatar/3c53ceb21bb71a555a3b8738d2b23053?s=400&d=robohash&r=x",
    });
    const mia = await Player.create({
      id: 7,
      name: "mia",
      status: "inactive",
      ranking: 741,
      avatar:
        "https://gravatar.com/avatar/cc6df2f260d11502befa6cc6e19d7de9?s=400&d=robohash&r=x",
    });
    const charlie = await Player.create({
      id: 8,
      name: "charlie",
      status: "inactive",
      ranking: 456,
      avatar:
        "https://gravatar.com/avatar/0eaab448f89171e4df0f67c45908d3d2?s=400&d=robohash&r=x",
    });
    const eli = await Player.create({
      id: 9,
      name: "eli",
      status: "inactive",
      ranking: 111,
      avatar:
        "https://gravatar.com/avatar/4a2764ee2455253fb897cfe34683b364?s=400&d=robohash&r=x",
    });
    const carol = await Player.create({
      id: 10,
      name: "carol",
      status: "active",
      ranking: 987,
      avatar:
        "https://gravatar.com/avatar/7e3b9267a865513e49cb4381e947704b?s=400&d=robohash&r=x",
    });
    const kate = await Player.create({
      id: 11,
      name: "kate",
      status: "active",
      ranking: 632,
      avatar:
        "https://gravatar.com/avatar/1d50ac8c5596334ad8e5d15db9de4005?s=400&d=robohash&r=x",
    });
    const beth = await Player.create({
      id: 12,
      name: "beth",
      status: "active",
      ranking: 563,
      avatar:
        "https://gravatar.com/avatar/afaa239a302bcc43efbe02b27c5d2c27?s=400&d=robohash&r=x",
    });
    const anne = await Player.create({
      id: 13,
      name: "anne",
      status: "active",
      ranking: 321,
      avatar:
        "https://gravatar.com/avatar/7909219fcd4412a7708ea47b0a60e033?s=400&d=robohash&r=x",
    });
    const mike = await Player.create({
      id: 14,
      name: "mike",
      status: "active",
      ranking: 412,
      avatar:
        "https://gravatar.com/avatar/381dc165ac0abf39b5aa42ff0af9a5b9?s=400&d=robohash&r=x",
    });
    const ant = await Player.create({
      id: 15,
      name: "ant",
      status: "active",
      ranking: 369,
      avatar:
        "https://gravatar.com/avatar/d491a39991e5d6d3e2f55aa918a7a7ae?s=400&d=robohash&r=x",
    });
    const zeus = await Player.create({
      id: 16,
      name: "zeus",
      status: "active",
      ranking: 852,
      avatar:
        "https://gravatar.com/avatar/04316479164d84175f72aece4c4d8e78?s=400&d=robohash&r=x",
    });
    const laus = await Player.create({
      id: 17,
      name: "laus",
      status: "active",
      ranking: 359,
      avatar:
        "https://gravatar.com/avatar/a6a2c2a096dad5dbcd10b8b44b2daceb?s=400&d=robohash&r=x",
    });
    const mint = await Player.create({
      id: 18,
      name: "mint",
      status: "active",
      ranking: 853,
      avatar:
        "https://gravatar.com/avatar/3ada5a68489bef4de52734ddf8be3a50?s=400&d=robohash&r=x",
    });
    const coke = await Player.create({
      id: 19,
      name: "coke",
      status: "active",
      ranking: 732,
      avatar:
        "https://gravatar.com/avatar/f22d6482649aaf6ef4bb135f81c88e01?s=400&d=robohash&r=x",
    });
    const lazy = await Player.create({
      id: 20,
      name: "lazi",
      status: "inactive",
      ranking: 325,
      avatar:
        "https://gravatar.com/avatar/4a8db2ce7d1743cc725a06326d5e038d?s=400&d=robohash&r=x",
    });
    Promise.all([
      tom,
      santi,
      joe,
      chris,
      lau,
      moe,
      mia,
      charlie,
      eli,
      carol,
      kate,
      beth,
      anne,
      mike,
      ant,
      zeus,
      laus,
      mint,
      coke,
      lazy,
    ]).then((res) => console.log("Players has been created"));*/
  });
});