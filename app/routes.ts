import { route, index, RouteConfig } from '@react-router/dev/routes'

export default [
  index('./pages/HomePage.tsx'),
  route('air', './pages/AirPage.tsx'),
  route('air-room', './pages/AirRoomPage.tsx'),
  route('gold', './pages/GoldPage.tsx'),
  route('plug', './pages/PlugPage.tsx'),
] satisfies RouteConfig;
