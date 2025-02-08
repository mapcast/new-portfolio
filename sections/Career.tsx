import { HSDevider, HSParagraph, HSSimpleTitle } from "chs-components";
import { Do_Hyeon } from "next/font/google";
import seekers from '../public/seekers.png';
import { HSBigKeyValues } from "@/components/HSBigKeyValues";
const dohyeon = Do_Hyeon({
  subsets: ["latin"], 
  weight: ["400"],
});
export default function Career() {
  return (
    <div id="career" className={dohyeon.className} style={{width: '100%', backgroundPosition: 'center', padding: '20px 0', backgroundImage: 'url(https://www.seekerslab.com/resources/img/product/friim/section_1.png)'}}>
      <div style={{display: 'flex', width: '100%', height: '47px', justifyContent: 'center', alignItems: 'center'}}>
        <HSSimpleTitle text="C" level={4} color={"#badc00"}/>
        <HSSimpleTitle text="areer" level={4} color={"#FFF"}/>
      </div>
      <div className="element-to-center">
        <div style={{display: 'grid', gridTemplateColumns: '160px 300px'}}>
          <div className="element-to-center">
            <img src={seekers.src} style={{width: 150}}/>
          </div>
          <div style={{borderLeft: '1px groove rgb(255,255,255,0.2)', paddingLeft: 30}}>
            <HSSimpleTitle level={4} color="#badc00" text="Seekers Inc."/>
            <div style={{display: 'flex', gap: 7, height: 20}}>
              <HSParagraph color={'#FFF'} text="2020-08 ~ 재직 중"/>
              <HSDevider size={1} horizontal theme="purple"/>
              <HSParagraph color={'rgb(255,255,255,0.7)'} text="보안 솔루션, 풀스택"/>
            </div>
            <div style={{marginTop: 20, paddingBottom: 10}}>
              <HSBigKeyValues name="Cxray (2024.08 ~ 진행 중)" values={["Docker 이미지 검사 서비스","풀스택 개발 및 유지보수"]} width={250} theme="seekers"/>
              <div style={{marginTop: 10}}/>
              <HSBigKeyValues name="Xitm (2023.03 ~ 진행 중)" values={["로그 분석 및 위험 탐지 서비스","풀스택 개발 및 유지보수"]} width={250} theme="seekers"/>
              <div style={{marginTop: 10}}/>
              <HSBigKeyValues name="Friim (2021.06 ~ 2022.06)" values={["클라우드 통합보안 솔루션","풀스택 개발"]} width={250} theme="seekers"/>
              <div style={{marginTop: 10}}/>
              <HSBigKeyValues name="Seekeye (2020.08 ~ 2021.06)" values={["개인정보보호 솔루션","풀스택 개발, GS 인증 1등급 취득"]} width={250} theme="seekers"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}