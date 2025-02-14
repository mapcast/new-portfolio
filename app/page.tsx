'use client'
import { useRef, useState } from "react"

import {HSHeader, HSDevider, HSSimpleFrame, HSAccordion, HSIconKeyValue} from 'hs-next-components';
import { Gugi } from "next/font/google";


import Profile from "@/sections/Profile";
import Skill from "@/sections/Skill";
import Homepage from "@/sections/Homepage";
import Career from "@/sections/Career";
import Project from "@/sections/Project";

const gugi = Gugi({
  subsets: ["latin"], 
  weight: ["400"],
});
export default function Home() {
  const [theme, setTheme] = useState('seekers');
  const ref = useRef<HTMLDivElement | null>(null);

  function scrollToElementById(id: string) {
    const element = document.getElementById(id);
    if (element && ref.current) {
      ref.current.scrollTo({top: element.offsetTop - 50, behavior: 'smooth'})
    }
  }

  return (
    <div ref={ref} style={{width: '100vw', height: '100vh', overflowY: 'scroll'}} className="my-scroll">
      <HSHeader theme={theme} openedHeight={230} items={[
        {display: 'Profile', onClick: () => scrollToElementById('profile')},
        {display: 'Skills', onClick: () => scrollToElementById('skill')},
        {display: 'Homepage', onClick: () => scrollToElementById('homepage')},
        {display: 'Career', onClick: () => scrollToElementById('career')},
        {display: 'Projects', onClick: () => scrollToElementById('project')}
      ]} 
      title={{display: '조현승 포트폴리오', onClick: () => {}}}/>
      <Profile/>
      <HSDevider size={1} theme={theme}/>
      <div style={{width: '100%', padding: '30px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50, rowGap: 30, background: '#36454f'}}>
        <div style={{gridColumn: 'span 2', display: 'flex', gap: 20, flexWrap: 'wrap', padding: '0 10px'}} className={gugi.className}>
          <HSIconKeyValue icon="date" name="생년월일" value="1994-12-18" width={230} theme="seekers"/>
          <HSIconKeyValue icon="address" name="위치" value="인천광역시 부평구" width={230} theme="seekers"/>
          <HSIconKeyValue icon="phone" name="연락처" value="010-6851-7574" width={230} theme="seekers"/>
          <HSIconKeyValue icon="email" name="이메일" value="qlqldyd54321@gmail.com" width={230} theme="seekers"/>
        </div>
      </div>
      <HSDevider size={1} theme={theme}/>
      <Skill/>
      <HSDevider size={1} theme={theme}/>
      <Homepage/>
      <HSDevider size={1} theme={theme}/>
      <Career/>
      <HSDevider size={1} theme={theme}/>
      <Project/>
      <HSDevider size={1} theme={theme}/>
      {/* 
      <div style={{width: '100%', padding: '30px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50, background: '#FFF'}}>
        <div style={{width: 1230, height: 615, display: 'grid', rowGap: 15, columnGap: 30, gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr'}}>
          <HSSimpleFrame width={600} height={300} theme="monoton">
            <div style={{display: 'grid', gridTemplateColumns: '200px 400px', width: '100%', height: '100%'}}>
              <div style={{borderRight: '1px groove rgba(0,0,0,0.03)'}}>
                <HSAccordion theme={"seekers"} items={[
                  {title: 'Hello', content: 'How are you?'},
                  {title: 'Son Heung-Min', content: 'How are you?'},
                  {title: 'Mohamed Salah', content: 'How are you?'},
                ]} height={300} width={200} defaultSelected={0}/>
              </div>
            </div>
          </HSSimpleFrame>
          <HSSimpleFrame width={600} height={300} theme="monoton">
            <div style={{display: 'grid', gridTemplateColumns: '200px 400px', width: '100%', height: '100%'}}>
              <div style={{borderRight: '1px groove rgba(0,0,0,0.03)'}}>
                <HSAccordion theme={"seekers"} items={[
                  {title: 'Hello', content: 'How are you?'},
                  {title: 'Son Heung-Min', content: 'How are you?'},
                  {title: 'Mohamed Salah', content: 'How are you?'},
                ]} height={300} width={200} defaultSelected={0}/>
              </div>
            </div>
          </HSSimpleFrame>
          <HSSimpleFrame width={600} height={300} theme="monoton">
            <div style={{display: 'grid', gridTemplateColumns: '200px 400px', width: '100%', height: '100%'}}>
              <div style={{borderRight: '1px groove rgba(0,0,0,0.03)'}}>
                <HSAccordion theme={"seekers"} items={[
                  {title: 'Hello', content: 'How are you?'},
                  {title: 'Son Heung-Min', content: 'How are you?'},
                  {title: 'Mohamed Salah', content: 'How are you?'},
                ]} height={300} width={200} defaultSelected={0}/>
              </div>
            </div>
          </HSSimpleFrame>
          <HSSimpleFrame width={600} height={300} theme="monoton">
            <div style={{display: 'grid', gridTemplateColumns: '200px 400px', width: '100%', height: '100%'}}>
              <div style={{borderRight: '1px groove rgba(0,0,0,0.03)'}}>
                <HSAccordion theme={"seekers"} items={[
                  {title: 'Hello', content: 'How are you?'},
                  {title: 'Son Heung-Min', content: 'How are you?'},
                  {title: 'Mohamed Salah', content: 'How are you?'},
                ]} height={300} width={200} defaultSelected={0}/>
              </div>
            </div>
          </HSSimpleFrame>
        </div>
        
      </div>
      */}
    </div>
  )
}
