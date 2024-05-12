import DesktopCommunity from "./components/DesktopCommunity";
import MobileCommunity from "./components/MobileCommunity";
import { getData } from './actions'

export interface IAppProps {}

export default async function App(props: IAppProps) {
  const Posts = await getData();
  console.log("Posts" , Posts);
  return (
    <div>
      <DesktopCommunity Posts={Posts}  />
      <MobileCommunity Posts={Posts} />
    </div>
  );
}
