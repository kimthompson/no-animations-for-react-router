import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import TestGSAP from '../components/TestGSAP'

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
    <>
      {/* <div  */}
      {/*   className="w-40 h-40 bg-pink-500" */}
      {/*   onClick={() => console.log('clicked')} */}
      {/* ></div> */}
      <TestGSAP />
    </>
  );
}
