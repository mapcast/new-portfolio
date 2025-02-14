import { HSButton, HSDevider, HSParagraph, HSSimpleFrame, HSSimpleTitle } from "hs-next-components";
import { Do_Hyeon, Gugi } from "next/font/google";

import ts from "@/public/skill/typescript.png";
import js from "@/public/skill/javascript.png";
import rs from "@/public/skill/rust.png";
import htmlcss from "@/public/skill/htmlcss.png";
import tauri from "@/public/skill/tauri.svg";
import springboot from "@/public/skill/springboot.png";
import next from "@/public/skill/next.png";

const dohyeon = Do_Hyeon({
  subsets: ["latin"], 
  weight: ["400"],
});
const gugi = Gugi({
  subsets: ["latin"], 
  weight: ["400"],
});
export default function Project() {
  return (
    <div id="project" className={dohyeon.className} style={{width: '100%', background: '#FFF', padding: '20px 0 50px 0'}}>
      <div className={gugi.className} style={{display: 'flex', width: '100%', height: '47px', justifyContent: 'center', alignItems: 'center'}}>
        <HSSimpleTitle text="Projects" level={4} color={"#222"}/>
      </div>
      <div className="view-desktop element-to-center" style={{width: '100%'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 30, width: 930}}>
          <div>
            <HSSimpleFrame theme="monoton" width={450} height={'auto'} borderRadius={10}>
              <div style={{width: '100%', height: '100%'}}>
                <div style={{padding: '10px 20px'}}>
                  <h4 style={{color: '#444', fontSize: 22}}>hs-components</h4>
                </div>
                <HSDevider size={1} theme="seekers"/>
                <div style={{padding: 20, height: 165}}>
                  <HSParagraph color={'#666'} text="다양한 React용 Typescript UI 컴포넌트를 제공합니다."/>
                  <HSParagraph color={'#666'} text="이 포트폴리오에도 해당 라이브러리의 컴포넌트가 사용되었습니다."/>
                </div>
                <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
                  <img style={{height: 30}} src={ts.src}/>
                </div>
                <div style={{padding: 20, display: 'flex', gap: 10}}>
                  <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/hs-next-components")}/>
                  <HSButton theme="seekers" text="Document" onClick={() => window.open("https://mapcast.github.io/components-showroom/")}/>
                  <HSButton theme="seekers" text="Images" onClick={() => {}}/>
                </div>
              </div>
            </HSSimpleFrame>
          </div>
          <div>
            <HSSimpleFrame theme="monoton" width={450} height={'auto'} borderRadius={10}>
              <div style={{width: '100%', height: '100%'}}>
                <div style={{padding: '10px 20px'}}>
                  <h4 style={{color: '#444', fontSize: 22}}>파일 전송 시스템</h4>
                </div>
                <HSDevider size={1} theme="seekers"/>
                <div style={{padding: 20, height: 165}}>
                  <HSParagraph color={'#666'} text="TCP 파일 전송 프로그램입니다."/>
                  <HSParagraph color={'#666'} text="하나의 서버를 파일 전송 서버로 설정한 뒤 기동 시"/>
                  <HSParagraph color={'#666'} text="디렉토리를 탐색하고 파일을 업로드 할 수 있으며,"/>
                  <HSParagraph color={'#666'} text="저장된 파일은 더블클릭해서 다운로드가 가능합니다."/>
                </div>
                <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
                  <img style={{height: 30}} src={rs.src}/>
                  <img style={{height: 20}} src={tauri.src}/>
                  <img style={{height: 20}} src={htmlcss.src}/>
                </div>
                <div style={{padding: 20, display: 'flex', gap: 10}}>
                  <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/fs-viewer")}/>
                  <HSButton theme="seekers" text="Images" onClick={() => {}}/>
                </div>
              </div>
            </HSSimpleFrame>
          </div>
          <div>
            <HSSimpleFrame theme="monoton" width={450} height={'auto'} borderRadius={10}>
              <div style={{width: '100%', height: '100%'}}>
                <div style={{padding: '10px 20px'}}>
                  <h4 style={{color: '#444', fontSize: 22}}>Cucumber</h4>
                </div>
                <HSDevider size={1} theme="seekers"/>
                <div style={{padding: 20, height: 165}}>
                  <HSParagraph color={'#666'} text="Cucumber는 각종 경주 기록과 경주마의 정보 등을 열람 가능한 경마 데이터 베이스입니다."/>
                  <HSParagraph color={'#666'} text="번역 데이터를 제공받고 있으며, 이후 수집되는 데이터에도 번역 내용이 적용됩니다."/>
                </div>
                <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
                  <img style={{height: 30}} src={springboot.src}/>
                  <img style={{height: 30}} src={ts.src}/>
                  <img style={{height: 25}} src={next.src}/>
                </div>
                <div style={{padding: 20, display: 'flex', gap: 10}}>
                  <HSButton theme="seekers" text="Github(FE)" onClick={() => window.open("https://github.com/mapcast/cucumber")}/>
                  <HSButton theme="seekers" text="Github(BE)" onClick={() => window.open("https://github.com/mapcast/cucumber-rest")}/>
                  <HSButton theme="seekers" text="Images" onClick={() => {}}/>
                  <HSButton theme="seekers" text="Site" onClick={() => window.open("https://github.com/mapcast/hs-next-components")}/>
                </div>
              </div>
            </HSSimpleFrame>
          </div>
          <div>
            <HSSimpleFrame theme="monoton" width={450} height={'auto'} borderRadius={10}>
              <div style={{width: '100%', height: '100%'}}>
                <div style={{padding: '10px 20px'}}>
                  <h4 style={{color: '#444', fontSize: 22}}>Depassito</h4>
                </div>
                <HSDevider size={1} theme="seekers"/>
                <div style={{padding: 20, height: 165}}>
                  <HSParagraph color={'#666'} text="tauri 연습용으로 작성한 안전한 패스워드를 자동생성하고 관리하는 어플리케이션입니다."/>
                  <HSParagraph color={'#666'} text="생성된 패스워드 데이터는 암호화되어 저장됩니다."/>
                </div>
                <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
                  <img style={{height: 30}} src={ts.src}/>
                  <img style={{height: 20}} src={tauri.src}/>
                </div>
                <div style={{padding: 20, display: 'flex', gap: 10}}>
                  <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/depassito")}/>
                  <HSButton theme="seekers" text="Images" onClick={() => {}}/>
                  <HSButton theme="seekers" text="Download" onClick={() => window.open("https://odri0220.tistory.com/10")}/>
                </div>
              </div>
            </HSSimpleFrame>
          </div>
          <div>
            <HSSimpleFrame theme="monoton" width={450} height={'auto'} borderRadius={10}>
              <div style={{width: '100%', height: '100%'}}>
                <div style={{padding: '10px 20px'}}>
                  <h4 style={{color: '#444', fontSize: 22}}>Chain-CHO</h4>
                </div>
                <HSDevider size={1} theme="seekers"/>
                <div style={{padding: 20, height: 165}}>
                  <HSParagraph color={'#666'} text="rust 실습과 블록체인에 대한 이해를 위해 작성된 연습용 프로젝트로, nightly를 사용합니다."/>
                  <HSParagraph color={'#666'} text="블록 채굴 현황은 P2P 통신으로 공유하도록 되어 있습니다."/>
                  <HSParagraph color={'#666'} text="tower-web을 통한 rest api 기능을 지원하며, 이를 통해 채굴된 플록과 접속한 피어 등을 확인 가능합니다."/>
                </div>
                <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
                  <img style={{height: 30}} src={rs.src}/>
                </div>
                <div style={{padding: 20, display: 'flex', gap: 10}}>
                  <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/chain-cho-v1")}/>
                  <HSButton theme="seekers" text="Images" onClick={() => {}}/>
                </div>
              </div>
            </HSSimpleFrame>
          </div>
          <div>
            <HSSimpleFrame theme="monoton" width={450} height={'auto'} borderRadius={10}>
              <div style={{width: '100%', height: '100%'}}>
                <div style={{padding: '10px 20px'}}>
                  <h4 style={{color: '#444', fontSize: 22}}>과외커넥터</h4>
                </div>
                <HSDevider size={1} theme="seekers"/>
                <div style={{padding: 20, height: 165}}>
                  <HSParagraph color={'#666'} text="학원에서 작성한 팀 프로젝트로 과외 선생님 찾기를 도와주는 웹사이트입니다."/>
                  <HSParagraph color={'#666'} text="다양한 검색과 시각화를 지원하며 개인 프로필 열람과 1:1 채팅등의 기능이 지원됩니다."/>
                  <HSParagraph color={'#666'} text="웹 호스팅 서비스는 현재 지원이 종료되었습니다."/>
                </div>
                <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
                  <img style={{height: 20}} src={htmlcss.src}/>
                  <img style={{height: 30}} src={js.src}/>
                </div>
                <div style={{padding: 20, display: 'flex', gap: 10}}>
                  <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/tutorConnector")}/>
                  <HSButton theme="seekers" text="Images" onClick={() => {}}/>
                </div>
              </div>
            </HSSimpleFrame>
          </div>
        </div>
      </div>
      <div className="view-mobile">
        <HSSimpleFrame theme="monoton" width={'90vw'} height={'auto'} borderRadius={10}>
          <div style={{width: '100%', height: '100%'}}>
            <div style={{padding: '10px 20px'}}>
              <h4 style={{color: '#444', fontSize: 22}}>hs-components</h4>
            </div>
            <HSDevider size={1} theme="seekers"/>
            <div style={{padding: 20, height: 165}}>
              <HSParagraph color={'#666'} text="다양한 React용 Typescript UI 컴포넌트를 제공합니다."/>
              <HSParagraph color={'#666'} text="이 포트폴리오에도 해당 라이브러리의 컴포넌트가 사용되었습니다."/>
            </div>
            <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
              <img style={{height: 30}} src={ts.src}/>
            </div>
            <div style={{padding: 20, display: 'flex', gap: 10}}>
              <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/hs-next-components")}/>
              <HSButton theme="seekers" text="Document" onClick={() => window.open("https://mapcast.github.io/components-showroom/")}/>
              <HSButton theme="seekers" text="Images" onClick={() => {}}/>
            </div>
          </div>
        </HSSimpleFrame>
        <div style={{marginTop: 30}}/>
        <HSSimpleFrame theme="monoton" width={'90vw'} height={'auto'} borderRadius={10}>
          <div style={{width: '100%', height: '100%'}}>
            <div style={{padding: '10px 20px'}}>
              <h4 style={{color: '#444', fontSize: 22}}>파일 전송 시스템</h4>
            </div>
            <HSDevider size={1} theme="seekers"/>
            <div style={{padding: 20, height: 165}}>
              <HSParagraph color={'#666'} text="TCP 파일 전송 프로그램입니다."/>
              <HSParagraph color={'#666'} text="하나의 서버를 파일 전송 서버로 설정한 뒤 기동 시"/>
              <HSParagraph color={'#666'} text="디렉토리를 탐색하고 파일을 업로드 할 수 있으며,"/>
              <HSParagraph color={'#666'} text="저장된 파일은 더블클릭해서 다운로드가 가능합니다."/>
            </div>
            <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
              <img style={{height: 30}} src={rs.src}/>
              <img style={{height: 20}} src={tauri.src}/>
              <img style={{height: 20}} src={htmlcss.src}/>
            </div>
            <div style={{padding: 20, display: 'flex', gap: 10}}>
              <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/fs-viewer")}/>
              <HSButton theme="seekers" text="Images" onClick={() => {}}/>
            </div>
          </div>
        </HSSimpleFrame>
        <div style={{marginTop: 30}}/>
        <HSSimpleFrame theme="monoton" width={'90vw'} height={'auto'} borderRadius={10}>
          <div style={{width: '100%', height: '100%'}}>
            <div style={{padding: '10px 20px'}}>
              <h4 style={{color: '#444', fontSize: 22}}>Cucumber</h4>
            </div>
            <HSDevider size={1} theme="seekers"/>
            <div style={{padding: 20, height: 165}}>
              <HSParagraph color={'#666'} text="Cucumber는 각종 경주 기록과 경주마의 정보 등을 열람 가능한 경마 데이터 베이스입니다."/>
              <HSParagraph color={'#666'} text="번역 데이터를 제공받고 있으며, 이후 수집되는 데이터에도 번역 내용이 적용됩니다."/>
            </div>
            <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
              <img style={{height: 30}} src={springboot.src}/>
              <img style={{height: 30}} src={ts.src}/>
              <img style={{height: 25}} src={next.src}/>
            </div>
            <div style={{padding: 20, display: 'flex', gap: 10}}>
              <HSButton theme="seekers" text="Github(FE)" onClick={() => window.open("https://github.com/mapcast/cucumber")}/>
              <HSButton theme="seekers" text="Github(BE)" onClick={() => window.open("https://github.com/mapcast/cucumber-rest")}/>
              <HSButton theme="seekers" text="Images" onClick={() => {}}/>
              <HSButton theme="seekers" text="Site" onClick={() => window.open("https://github.com/mapcast/hs-next-components")}/>
            </div>
          </div>
        </HSSimpleFrame>
        <div style={{marginTop: 30}}/>
        <HSSimpleFrame theme="monoton" width={'90vw'} height={'auto'} borderRadius={10}>
          <div style={{width: '100%', height: '100%'}}>
            <div style={{padding: '10px 20px'}}>
              <h4 style={{color: '#444', fontSize: 22}}>Depassito</h4>
            </div>
            <HSDevider size={1} theme="seekers"/>
            <div style={{padding: 20, height: 165}}>
              <HSParagraph color={'#666'} text="tauri 연습용으로 작성한 안전한 패스워드를 자동생성하고 관리하는 어플리케이션입니다."/>
              <HSParagraph color={'#666'} text="생성된 패스워드 데이터는 암호화되어 저장됩니다."/>
            </div>
            <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
              <img style={{height: 30}} src={ts.src}/>
              <img style={{height: 20}} src={tauri.src}/>
            </div>
            <div style={{padding: 20, display: 'flex', gap: 10}}>
              <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/depassito")}/>
              <HSButton theme="seekers" text="Images" onClick={() => {}}/>
              <HSButton theme="seekers" text="Download" onClick={() => window.open("https://odri0220.tistory.com/10")}/>
            </div>
          </div>
        </HSSimpleFrame>
        <div style={{marginTop: 30}}/>
        <HSSimpleFrame theme="monoton" width={'90vw'} height={'auto'} borderRadius={10}>
          <div style={{width: '100%', height: '100%'}}>
            <div style={{padding: '10px 20px'}}>
              <h4 style={{color: '#444', fontSize: 22}}>Chain-CHO</h4>
            </div>
            <HSDevider size={1} theme="seekers"/>
            <div style={{padding: 20, height: 165}}>
              <HSParagraph color={'#666'} text="rust 실습과 블록체인에 대한 이해를 위해 작성된 연습용 프로젝트로, nightly를 사용합니다."/>
              <HSParagraph color={'#666'} text="블록 채굴 현황은 P2P 통신으로 공유하도록 되어 있습니다."/>
              <HSParagraph color={'#666'} text="tower-web을 통한 rest api 기능을 지원하며, 이를 통해 채굴된 플록과 접속한 피어 등을 확인 가능합니다."/>
            </div>
            <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
              <img style={{height: 30}} src={rs.src}/>
            </div>
            <div style={{padding: 20, display: 'flex', gap: 10}}>
              <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/chain-cho-v1")}/>
              <HSButton theme="seekers" text="Images" onClick={() => {}}/>
            </div>
          </div>
        </HSSimpleFrame>
        <div style={{marginTop: 30}}/>
        <HSSimpleFrame theme="monoton" width={'90vw'} height={'auto'} borderRadius={10}>
          <div style={{width: '100%', height: '100%'}}>
            <div style={{padding: '10px 20px'}}>
              <h4 style={{color: '#444', fontSize: 22}}>과외커넥터</h4>
            </div>
            <HSDevider size={1} theme="seekers"/>
            <div style={{padding: 20, height: 165}}>
              <HSParagraph color={'#666'} text="학원에서 작성한 팀 프로젝트로 과외 선생님 찾기를 도와주는 웹사이트입니다."/>
              <HSParagraph color={'#666'} text="다양한 검색과 시각화를 지원하며 개인 프로필 열람과 1:1 채팅등의 기능이 지원됩니다."/>
              <HSParagraph color={'#666'} text="웹 호스팅 서비스는 현재 지원이 종료되었습니다."/>
            </div>
            <div style={{height: 40, display: 'flex', gap: 20, padding: '0 20px', alignItems: 'center'}}>
              <img style={{height: 20}} src={htmlcss.src}/>
              <img style={{height: 30}} src={js.src}/>
            </div>
            <div style={{padding: 20, display: 'flex', gap: 10}}>
              <HSButton theme="seekers" text="Github" onClick={() => window.open("https://github.com/mapcast/tutorConnector")}/>
              <HSButton theme="seekers" text="Images" onClick={() => {}}/>
            </div>
          </div>
        </HSSimpleFrame>
      </div>
      
    </div>
  )
}