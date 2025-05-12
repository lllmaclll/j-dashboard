// Types
import { AQIResponse } from "@app/types/aqi-outdoor";

// Utils
import { renderAirQualityCards } from "@utils/renderAirQualityCards";

// Components
import CardGold from "@components/contents/CardGold";
import CardHome from "@components/contents/CardHome";
import CardPlug from "@components/contents/CardPlug";
import CardAirQualityIndoor from "@components/contents/CardAirQualityIndoor";

type RouteComponent = React.ReactNode | ((props?: any) => React.ReactNode);
// React.ReactNode รองรับแค่ element, string, number, fragment ฯลฯ — ไม่รองรับฟังก์ชัน

const routeComponentMap: Record<string, RouteComponent> = {
  '/': () => <CardHome />,
  '/air': renderAirQualityCards,
  '/air-room': () => <CardAirQualityIndoor />,
  '/gold': () => <CardGold />,
  '/plug': () => <CardPlug />
}

const CardRenderer = ({ pathname, selectedOption, showSkeleton, filteredStations }: { pathname: string, selectedOption?: string, showSkeleton?: boolean, filteredStations?: AQIResponse[] | null }) => {
  const component = routeComponentMap[pathname];
  if (!component) {
    throw new Error(`No component found for path: ${pathname}`);
  }

  // ✅ เช็คว่าเป็นฟังก์ชันหรือ JSX element
  return typeof component === 'function' ? component({ selectedOption, showSkeleton, filteredStations }) : component;
};

export default CardRenderer