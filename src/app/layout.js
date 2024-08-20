'use client'
import "./globals.css";
import Footer from "../components/shared/Footer.jsx"
import Navbar from "@/components/shared/Navbar";
import { usePathname } from 'next/navigation';
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


let persistor = persistStore(store);

export default function RootLayout({ children }) {
  const router = usePathname();
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar path={router}/>
              { children }
            <Footer/>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
