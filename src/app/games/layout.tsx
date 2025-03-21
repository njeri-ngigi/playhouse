import { Header } from "./header/Header";

export default function Games({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-kode">
      <Header />
      <div>{children}</div>
    </div>
  );
}
