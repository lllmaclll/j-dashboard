import CardHome from "@components/CardHome"
import CardAirQualityIndoor from "@components/CardAirQualityIndoor"
import CardGold from "@components/CardGold"
import CardPlug from "@components/CardPlug"

const routeComponentMap: Record<string, React.ReactNode> = {
  '/': <CardHome />,
  '/air-room': <CardAirQualityIndoor />,
  '/gold': <CardGold />,
  '/plug': <CardPlug />
}

const CardRenderer = ({ pathname }: { pathname: string }) => {
  const component = routeComponentMap[pathname];
  if (!component) {
    throw new Error(`No component found for path: ${pathname}`);
  }
  return component;
};

export default CardRenderer
  