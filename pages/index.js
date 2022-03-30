import Head from "next/head";
import Channels from "components/Channel";
import Activity from "components/Activity";
import Content from "components/Content";
import useResponsive from "hooks/useResponsive";

export default function Home() {
  const { isTablet } = useResponsive();

  return (
    <>
      <Head>
        <title>React Social Network</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex space-x-10 px-[6%] sm:px-[4%] md:flex-col md:space-x-0 md:pt-6">
        <div className="w-2/3 md:w-full">
          <Content
            leftTitle="Videos"
            rightTitle="Browse all videos"
            className="pt-0"
          />
          {isTablet && <Channels />}
          <Content leftTitle="People" rightTitle="view all" />
          <Content leftTitle="Documents" rightTitle="Browse all documents" />
        </div>
        <div className="w-1/3 md:w-full">
          <Activity />
          {!isTablet && <Channels />}
        </div>
      </div>
    </>
  );
}
