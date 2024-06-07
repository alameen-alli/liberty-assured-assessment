import { NavBar } from "@/components/NavBar/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paybox360 Admin",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid overflow-hidden h-screen">
      <SideBar />
      <NavBar />
      <div className="relative bg-[#F8F9FB] md:rounded-[2rem] overflow-hidden md:ml-[18rem] md:mr-7 md:my-7">
        <header className="hidden md:flex justify-between gap-5 items-center bg-[white] px-12 pt-[3rem] pb-7 text-[#242424]">
          <p className="font-[600] md:text-[1.3rem] lg:text-[1.5rem] shrink truncate">
            Analytics dashboard
          </p>

          <div className="hidden md:flex items-center md:gap-4">
            {/* notifications button */}
            <button className="bg-[#ECF1FF] hover:opacity-75 w-10 h-10 inline-flex items-center justify-center rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4 16.33C20.12 17.08 19.53 17.65 18.76 17.91C17.68 18.27 16.57 18.54 15.45 18.73C15.34 18.75 15.23 18.77 15.12 18.78C14.94 18.81 14.76 18.83 14.58 18.85C14.36 18.88 14.13 18.9 13.9 18.92C13.27 18.97 12.65 19 12.02 19C11.38 19 10.74 18.97 10.11 18.91C9.83999 18.89 9.57999 18.86 9.31999 18.82C9.16999 18.8 9.01999 18.78 8.87999 18.76C8.76999 18.74 8.65999 18.73 8.54999 18.71C7.43999 18.53 6.33999 18.26 5.26999 17.9C4.46999 17.63 3.85999 17.06 3.58999 16.33C3.31999 15.61 3.41999 14.77 3.84999 14.05L4.97999 12.17C5.21999 11.76 5.43999 10.97 5.43999 10.49V8.62999C5.43999 4.99999 8.38999 2.04999 12.02 2.04999C15.64 2.04999 18.59 4.99999 18.59 8.62999V10.49C18.59 10.97 18.81 11.76 19.06 12.17L20.19 14.05C20.6 14.75 20.68 15.57 20.4 16.33Z"
                  fill="#07112D"
                />
                <path
                  d="M12 10.76C11.58 10.76 11.24 10.42 11.24 10V6.90001C11.24 6.48001 11.58 6.14001 12 6.14001C12.42 6.14001 12.76 6.48001 12.76 6.90001V10C12.75 10.42 12.41 10.76 12 10.76Z"
                  fill="white"
                />
                <path
                  d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z"
                  fill="#07112D"
                />
                <path
                  d="M19.3333 7.66667C21.1743 7.66667 22.6667 6.17428 22.6667 4.33333C22.6667 2.49238 21.1743 1 19.3333 1C17.4924 1 16 2.49238 16 4.33333C16 6.17428 17.4924 7.66667 19.3333 7.66667Z"
                  fill="#FF0000"
                />
              </svg>
            </button>

            {/* user profile */}
            <div className="flex items-center">
              <Image
                priority
                src="/assets/user.jpeg"
                width={0}
                height={0}
                sizes="100vw"
                alt="Profile"
                className="w-12 bg-[#ECF1FF] h-12 aspect-square object-cover rounded-full mr-2"
              />

              <div className="flex gap-3">
                <div className="flex flex-col">
                  <span className="text-sm font-[700]">Dexter Olaniyi</span>
                  <span className="text-[0.65rem]">Dexterola@gmail.com</span>
                </div>

                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8284 14.2377C13.3184 15.7477 10.9014 15.798 9.33095 14.3887L9.17157 14.2377L5.29289 10.1182C4.90237 9.7277 4.90237 9.09454 5.29289 8.70401C5.65338 8.34353 6.22061 8.3158 6.6129 8.62083L6.70711 8.70401L10.5858 12.8235C11.3257 13.5634 12.5012 13.6023 13.287 12.9403L13.4142 12.8235L17.2929 8.70401C17.6834 8.31349 18.3166 8.31349 18.7071 8.70401C19.0676 9.0645 19.0953 9.63173 18.7903 10.024L18.7071 10.1182L14.8284 14.2377Z"
                    fill="#121826"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>
        <main className="md:m-7  p-5 md:p-0 overflow-y-auto h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
