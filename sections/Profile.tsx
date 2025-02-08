import { HSParagraph, HSSimpleTitle } from "chs-components";
import { Do_Hyeon } from "next/font/google";
import profile from '../public/hs5.jpg';
const dohyeon = Do_Hyeon({
  subsets: ["latin"], 
  weight: ["400"],
});
export default function Profile() {
  return (
    <div id="profile" style={{width: '100%', height: 400, backgroundPosition: 'center', paddingTop: 60, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50, backgroundImage: 'url(https://www.seekerslab.com/resources/img/companyInfo/company_bg.jpg)'}}>
      <div className="view-desktop">
        <div style={{display: 'grid', gridTemplateColumns: '420px 200px', columnGap: 50}}>
          <div className={dohyeon.className}>
            <div style={{display: 'flex', gap: 5}}>
              <HSSimpleTitle text="조" level={1} color={"#222"}/>
              <HSSimpleTitle text="현승" level={1} color={"#badc00"}/>
            </div>
            <HSParagraph text={'2013-03 ~ 2019-02 - 동의대학교 정보통신공학과 졸업'} color={"#222"} fontSize={18}/>
            <HSParagraph text={'2020-02 ~ 2020-08 - 부산IT교육센터 Java 과정 수료'} color={"#222"} fontSize={18}/>
            <HSParagraph text={'2020-08 ~ 현재 - Seekers Inc. 재직중'} color={"#222"} fontSize={18}/>
          </div>
          <div className="element-to-center">
            <img src={profile.src} style={{width: 180, aspectRatio: '1/1', borderRadius: '50%', border: '0.5rem solid rgba(186, 220, 0, 0.1)'}} alt=""/>
          </div>
        </div>
      </div>
      <div className="view-mobile">
        <div className={dohyeon.className}>
          <div style={{display: 'flex', gap: 5}}>
            <HSSimpleTitle text="조" level={1} color={"#222"}/>
            <HSSimpleTitle text="현승" level={1} color={"#badc00"}/>
          </div>
          <HSParagraph text={'2013-03 ~ 2019-02 - 동의대학교 정보통신공학과 졸업'} color={"#222"} fontSize={18}/>
          <HSParagraph text={'2020-02 ~ 2020-08 - 부산IT교육센터 Java 과정 수료'} color={"#222"} fontSize={18}/>
          <HSParagraph text={'2020-08 ~ 현재 - Seekers Inc. 재직중'} color={"#222"} fontSize={18}/>
        </div>
      </div>
    </div>
  )
}