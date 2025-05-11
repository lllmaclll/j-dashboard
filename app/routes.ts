// Library
import { route, index, RouteConfig } from '@react-router/dev/routes'

export default [
  index('routes/HomePage.tsx'),
  route('air', 'routes/AirPage.tsx'),
  route('air-room', 'routes/AirRoomPage.tsx'),
  route('gold', 'routes/GoldPage.tsx'),
  route('plug', 'routes/PlugPage.tsx'),
] satisfies RouteConfig;
