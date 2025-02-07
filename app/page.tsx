'use client'
import { useState } from "react"

import {HSButton} from 'hs-next-components';
import {HSHeader} from "chs-components";
import { HSDevider } from "chs-components";
import { HSSimpleFrame } from "chs-components";
import { HSBigButton } from "chs-components";
import { HSCard } from "chs-components";
import { HSSimpleTitle } from "chs-components";
import { HSParagraph } from "chs-components";
import { HSAccordion } from "chs-components";
import { getColorTheme } from "@/function/common";
import { HSIconKeyValue } from "@/components/HSIconKeyValue";
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
export default function Home() {
  const [theme, setTheme] = useState('seekers');
  const colorset = getColorTheme(theme ? theme : '');
  return (
    <div style={{width: '100vw', height: '100vh', overflowY: 'scroll'}}>
      <HSHeader theme={theme} items={[
        {display: 'Security', onClick: () => {}},
        {display: 'Development', onClick: () => {}},
        {display: 'Qualify', onClick: () => {}}
      ]} 
      title={{display: 'Seekers Inc.', onClick: () => {}}}/>
      <div style={{width: '100%', minHeight: 400, backgroundPosition: 'center', padding: '60px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50, backgroundImage: 'url(https://www.seekerslab.com/resources/img/companyInfo/company_bg.jpg)'}}>
        <div style={{maxWidth: 1000, padding: 10}}>
          <HSSimpleTitle text="Lorem Ipsum Dolor Sit" level={1} color={"#222"}/>
          <HSParagraph text={lorem} color={"#222"}/>
          <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', height: 100}}>
            <HSIconKeyValue icon="phone" name="Tel." value="010-6851-7574"/>
          </div>
        </div>
      </div>
      <HSDevider size={1} theme={theme}/>
      <div style={{width: '100%', padding: '30px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50, rowGap: 30}}>

      </div>
      <HSDevider size={1} theme={theme}/>
      <div style={{width: '100%', padding: '30px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50, rowGap: 30, background: `rgb(${colorset.light.red},${colorset.light.green},${colorset.light.blue})`}}>
        <div>
          <HSSimpleFrame width={600} height={200} theme={theme}>
            <div className="element-to-center" style={{height: '100%'}}>
              <HSBigButton text="We Go Party Tonight" onClick={() => {}} theme={theme}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={600} height={200} theme={theme}>
            <div className="element-to-center" style={{height: '100%'}}>
              <HSCard width={250} height={150} onClick={() => {}} theme={theme}>
                we go party tonight
              </HSCard>
            </div>
          </HSSimpleFrame>
        </div>
      </div>
      <HSDevider size={1} theme={theme}/>
      <div style={{width: '100%', padding: '30px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50, background: `rgb(${colorset.normal.red},${colorset.normal.green},${colorset.normal.blue})`}}>
        <HSSimpleFrame width={600} height={300} theme="monoton">
          <div style={{display: 'grid', gridTemplateColumns: '200px 400px', width: '100%', height: '100%'}}>
            <div style={{borderRight: '1px groove rgba(0,0,0,0.03)'}}>
              <HSAccordion theme={"monoton"} items={[
                {title: 'Hello', content: 'How are you?'},
                {title: 'Son Heung-Min', content: 'How are you?'},
                {title: 'Mohamed Salah', content: 'How are you?'},
              ]} height={300} width={200} defaultSelected={0}/>
            </div>
          </div>
        </HSSimpleFrame>
      </div>
      <HSDevider size={1} theme={theme}/>
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
      <div style={{width: '100%', padding: '30px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50}}>
        <HSButton onClick={() => setTheme('seekers')} text="seekers" theme="seekers"/>
        <HSButton onClick={() => setTheme('monoton')} text="monoton" theme="monoton"/>
        <HSButton onClick={() => setTheme('purple')} text="purple" theme="purple"/>
        <HSButton onClick={() => setTheme('green')} text="green" theme="green"/>
        <HSButton onClick={() => setTheme('blue')} text="blue" theme="blue"/>
      </div>
    </div>
  )
}
