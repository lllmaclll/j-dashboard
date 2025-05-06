import CardHome from "@components/CardHome"
// import CardAirQualityOutdoor from "@components/CardAirQualityOutdoor"
import CardAirQualityIndoor from "@components/CardAirQualityIndoor"
import CardGold from "@components/CardGold"
import CardPlug from "@components/CardPlug"

const CardRenderer = ({ pathname }: { pathname: string }) => {
    switch (pathname) {
      case '/': return <CardHome />
      // case '/air': return <CardAirQualityOutdoor />
      case '/air-room': return <CardAirQualityIndoor />
      case '/gold': return <CardGold />
      case '/plug': return <CardPlug />
      default: return <div>Page not found</div>
    }
  }
  export default CardRenderer
  