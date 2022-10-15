import Head from "next/head";
import { useEffect, useState } from "react";
import { AppBar, Header, Sidebar } from "../../layout";

export default function DashboardLayout(props: {
  main: any;
  pageName: string;
  icon: string;
  arrowBack?: boolean;
}) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== undefined) {
      const width_layar = window.innerWidth;
      if (width_layar < 600) {
        setOpen(false);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>{props.pageName}</title>
      </Head>
      <Sidebar fullWidth={open} setFullWidth={() => setOpen(false)} />
      <div className={`${open ? "ml-72" : "ml-0"} transition-all`}>
        <AppBar fullWidth={open} setFullWidth={() => setOpen(true)} />
        <Header
          arrowBack={props.arrowBack || false}
          icon={props.icon}
          pageName={props.pageName}
        />
        <main className="py-2 pb-10 px-3">{props.main}</main>
      </div>
    </>
  );
}
