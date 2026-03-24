import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import { ReactNode } from "react";

export default function DemoLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      <main>{children}</main>
      <BottomBar />
    </div>
  );
}
