import { HSIconKeyValue } from "@/components/HSIconKeyValue";
import { HSCard, HSParagraph, HSSimpleTitle } from "chs-components";
import { Do_Hyeon, Gugi } from "next/font/google";
const dohyeon = Do_Hyeon({
  subsets: ["latin"], 
  weight: ["400"],
});
const gugi = Gugi({
  subsets: ["latin"], 
  weight: ["400"],
});
export default function Homepage() {
  return (
    <div id="homepage" className={gugi.className} style={{width: '100%', padding: '10px 0 20px 0', background: '#222'}}>
      <div style={{display: 'flex', width: '100%', height: '47px', justifyContent: 'center', alignItems: 'center'}}>
        <HSSimpleTitle text="Home" level={4} color={"#badc00"}/>
        <HSSimpleTitle text="Page" level={4} color={"#FFF"}/>
      </div>
      <div style={{display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '0 10px'}} className="mb-420 dt-210">
        <HSCard width={400} height={200} onClick={() => window.open("https://odri0220.tistory.com/")} theme="seekers">
          <div>
            <div style={{height: 50, marginTop: 20}}>
              <HSIconKeyValue icon="home" name="티스토리" value="개발기록블로그" width={230} theme="seekers"/>
            </div>
            <div style={{textAlign: 'left', marginTop: 20}} className={dohyeon.className}>
              <HSParagraph color="#fff" text="공부 기록 및 개발 일기 작성용 블로그"/>
            </div>
          </div>
        </HSCard>
        <HSCard width={400} height={200} onClick={() => window.open("https://github.com/mapcast")} theme="seekers">
          <div>
            <div style={{height: 50, marginTop: 20}}>
              <HSIconKeyValue icon="github" name="Github" value="mapcast" width={230} theme="seekers"/>
            </div>
            <div style={{textAlign: 'left', marginTop: 20}} className={dohyeon.className}>
              <HSParagraph color="#fff" text="사이드 프로젝트 소스코드 저장소"/>
            </div>
          </div>
        </HSCard>
      </div>
    </div>
  )
}