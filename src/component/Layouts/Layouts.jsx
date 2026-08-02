import React from "react";
import { Toaster } from "sonner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet, ScrollRestoration } from "react-router";

export default function Layouts() {
  return (
    <>
      <Toaster
        position="top-right"
        expand={false}
        toastOptions={{ style: { fontFamily: "YekanBakh", color: "#3D4349" } }}
      />
      <Header />
      <ScrollRestoration />
      <main className="flex-1 relative py-10 md:py-12 lg:py-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
