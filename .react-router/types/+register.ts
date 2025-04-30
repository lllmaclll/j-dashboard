import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/air": {};
  "/air-room": {};
  "/gold": {};
  "/plug": {};
};