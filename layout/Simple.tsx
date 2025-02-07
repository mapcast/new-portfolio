'use client';
import {HSDrawer, HSButton, HSLink} from "hs-next-components";

import { Roboto } from 'next/font/google';
import { useRouter } from "next/navigation";
const font = Roboto({ subsets: ["latin"], weight: "400" });

type WrapperProp = {
  theme: string,
  setTheme: (theme: string) => void,
  background: string,
  setBackground: (background: string) => void,
  children: JSX.Element
}
export default function Simple({theme, setTheme, background, setBackground, children}: WrapperProp) {
  const router = useRouter();
  return (
    <div style={{width: '100vw', height: '100vh', background, minWidth: '100vw', minHeight: '100vh', overflow: 'auto'}} className={font.className}>
      <div style={{position: 'fixed', left: 10, top: 10, display: 'flex', gap: 10}}>
        <HSButton theme={theme} text="default" onClick={() => setTheme("default")}/>
        <HSButton theme={theme} text="green" onClick={() => setTheme("green")}/>
        <HSButton theme={theme} text="blue" onClick={() => setTheme("blue")}/>
      </div>
      <div style={{position: 'fixed', left: '50%', top: 15}}>
        <HSLink theme={theme} text="to home" cooldown={0} onClick={() => router.push('/')}/>
      </div>
      <div style={{position: 'fixed', right: 10, top: 10, display: 'flex', gap: 10}}>
        <HSButton theme={theme} text="day" onClick={() => setBackground("#FFF")}/>
        <HSButton theme={theme} text="night" onClick={() => setBackground("#111")}/>
      </div>
      <HSDrawer theme={theme} items={[
        {text: "Home", sub: [
          {text: 'home', onClick: () => router.push('/')},
        ]},
        {text: "Items", sub: [
          {text: 'Buttons', onClick: () => router.push('/button')},
          {text: 'Inputs', onClick: () => router.push('/selector')},
          {text: 'Selector', onClick: () => router.push('/selector')},
          {text: 'Switch', onClick: () => router.push('/switch')},
          {text: 'Radio', onClick: () => router.push('/radio')},
          {text: 'Toggler', onClick: () => router.push('/toggler')},
          {text: 'Select Box', onClick: () => router.push('/select')},
          {text: 'Progress Bar', onClick: () => router.push('/progress')},
          {text: 'Loading', onClick: () => router.push('/loading')},
          {text: 'Drawer', onClick: () => router.push('/drawer')},
          {text: 'Table', onClick: () => router.push('/table')},
          {text: 'Pagination', onClick: () => router.push('/pagination')},
          {text: 'Devider', onClick: () => router.push('/devider')},
        ]},
        {text: "Main Shelf", sub: [
          {text: 'Sub Shelf 1', onClick: () => alert("sub 1!")},
          {text: 'Sub Shelf 2', onClick: () => alert("sub 2!")}
        ]},
      ]}/>
      <div style={{padding: '50px 10px 10px 10px', height: '100vh'}} className={`${font.className}`}>
        {children}
      </div>
    </div>
  );
}