import Sidebar from "@/lib/modules/sidebar/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import HttpService from "@/lib/utils/HttpService";
import { Routes } from "@/lib/constants/ApiRoutes";
import { useStore } from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: any;
}) {
  let content = <></>;

  try {
    const cookbooks = await HttpService.get(Routes.COOKBOOK_GET_ALL, {
      game: "60ae73e09113a40015ca98e3",
    });
    const guides = await HttpService.get(
      Routes.GUIDES_GET_ALL(cookbooks[0]?._id)
    );
    useStore.setState({ cookbooks, guides });

    content = (
      <>
        <Sidebar cookbook={cookbooks[0]} guides={guides} />
        {children}
      </>
    );
  } catch (err) {
    console.log(err);
    content = <>Error</>;
  }

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 flex overflow-hidden h-screen`}
      >
        {content}
      </body>
    </html>
  );
}
