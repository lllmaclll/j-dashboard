import { useLanguage } from "@app/context/LanguageContext";

const getPageTitle = (pathname: string) => {
  const { translations } = useLanguage();

  const routeMap: Record<string, string> = {
    "/": translations.pages.home,
    "/air": translations.pages.air,
    "/air-room": translations.pages.airRoom,
    "/gold": translations.pages.gold,
    "/plug": translations.pages.plug,
  };

  return routeMap[pathname] || "/";
};

export default getPageTitle;
