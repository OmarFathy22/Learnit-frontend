import DesktopCommunity from "./components/DesktopCommunity";
import MobileCommunity from "./components/MobileCommunity";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <DesktopCommunity />
      <MobileCommunity />
    </div>
  );
}
