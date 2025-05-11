// Types
import { Translations } from "@app/types/translations";

const getPageTitle = (pathname: string, translations: Translations) => {

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
