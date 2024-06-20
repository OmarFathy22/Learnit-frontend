import DesktopCommunity from "./components/DesktopCommunity";
import MobileCommunity from "./components/MobileCommunity";
import { getPosts } from './actions'

export interface IAppProps {}

export default async function App(props: IAppProps) {
  const Posts = await getPosts();
  return (
    <div>
      <DesktopCommunity Posts={Posts} />
      <MobileCommunity Posts={Posts} />
    </div>
  );
}
