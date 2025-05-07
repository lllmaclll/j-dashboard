// get page title based on the current route
const getPageTitle = (pathname: string) => {
  const routeMap: Record<string, string> = {
    "/": "Home",
    "/air": "Air",
    "/air-room": "Air Room",
    "/gold": "Gold",
    "/plug": "Plug",
  };

  return routeMap[pathname] || "Main";
};

export default getPageTitle;
