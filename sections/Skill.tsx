import { HSSimpleFrame, HSSimpleTitle } from "chs-components";
import java from "@/public/skill/java.png";
import js from "@/public/skill/javascript.png";
import ts from "@/public/skill/typescript.png";
import rs from "@/public/skill/rust.png";
import htmlcss from "@/public/skill/htmlcss.png";
import python from "@/public/skill/python.png";

import jquery from "@/public/skill/jquery.png";
import thyme from "@/public/skill/thymeleaf.png";
import react from "@/public/skill/reactredux.png";
import next from "@/public/skill/next.png";
import springboot from "@/public/skill/springboot.png";
import tauri from "@/public/skill/tauri.svg";

import postgre from "@/public/skill/psql.png";
import elastic from "@/public/skill/elasticsearch.png";
import mysql from "@/public/skill/mysql.png";
import sqlserver from "@/public/skill/mssql.png";
import mongo from "@/public/skill/mongo.png";
import redis from "@/public/skill/redis.png";

import kafka from "@/public/skill/kafka.png";
import docker from "@/public/skill/docker.png";
import aws from "@/public/skill/aws.png";
import azure from "@/public/skill/azure.png";
import { Gugi } from "next/font/google";

const gugi = Gugi({
  subsets: ["latin"], 
  weight: ["400"],
});

export default function Skill() {
  return (
    <div id="skill" className={`${gugi.className}`} style={{width: '100%', padding: '30px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', columnGap: 50, background: `rgb(186,220,0)`}}>
      <div className="view-desktop">
        <HSSimpleFrame width={1000} height={350} theme="monoton" borderRadius={10}>
          <div>
            <div style={{display: 'flex', width: '100%', height: '60px', justifyContent: 'center', alignItems: 'center'}}>
              <HSSimpleTitle text="S" level={4} color={"#222"}/>
              <HSSimpleTitle text="kills" level={4} color={"#badc00"}/>
            </div>
            <div style={{padding: '0 50px'}}>
              <div style={{display: 'grid', gridTemplateColumns: '100px 1fr', height: 50}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{borderLeft: '2px solid rgb(186,220,0)', display: 'flex', alignItems: 'center', paddingLeft: 15, height: 30}}>
                    <h5>Languages</h5>
                  </div>
                </div>
                <div style={{display: 'flex', gap: 20}}>
                  <img style={{height: 50}} src={java.src}/>
                  <img style={{height: 50}} src={js.src}/>
                  <img style={{height: 50}} src={ts.src}/>
                  <img style={{height: 50}} src={htmlcss.src}/>
                  <img style={{height: 50}} src={python.src}/>
                  <img style={{height: 50}} src={rs.src}/>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '100px 1fr', height: 50, marginTop: 20}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{borderLeft: '2px solid rgb(186,220,0)', display: 'flex', alignItems: 'center', paddingLeft: 15, height: 30}}>
                    <h5>Frameworks</h5>
                  </div>
                </div>
                <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
                  <img style={{height: 50, marginLeft: 10}} src={springboot.src}/>
                  <img style={{height: 40}} src={react.src}/>
                  <img style={{height: 30}} src={next.src}/>
                  <img style={{height: 30}} src={tauri.src}/>
                  <img style={{height: 30}} src={jquery.src}/>
                  <img style={{height: 40}} src={thyme.src}/>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '100px 1fr', height: 50, marginTop: 20}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{borderLeft: '2px solid rgb(186,220,0)', display: 'flex', alignItems: 'center', paddingLeft: 15, height: 30}}>
                    <h5>Archiving</h5>
                  </div>
                </div>
                <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
                  <img style={{height: 40, marginLeft: 10}} src={postgre.src}/>
                  <img style={{height: 40}} src={elastic.src}/>
                  <img style={{height: 50}} src={mysql.src}/>
                  <img style={{height: 50}} src={sqlserver.src}/>
                  <img style={{height: 50}} src={mongo.src}/>
                  <img style={{height: 50}} src={redis.src}/>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '100px 1fr', height: 50, marginTop: 20}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{borderLeft: '2px solid rgb(186,220,0)', display: 'flex', alignItems: 'center', paddingLeft: 15, height: 30}}>
                    <h5>Etc.</h5>
                  </div>
                </div>
                <div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
                  <img style={{height: 40, marginLeft: 10}} src={kafka.src}/>
                  <img style={{height: 30}} src={docker.src}/>
                  <img style={{height: 40}} src={aws.src}/>
                  <img style={{height: 40}} src={azure.src}/>
                </div>
              </div>
            </div>
          </div>
        </HSSimpleFrame>
      </div>
      <div className="view-mobile">
        <HSSimpleFrame width={400} height={630} theme="monoton" borderRadius={10}>
          <div>
            <div style={{display: 'flex', width: '100%', height: '60px', justifyContent: 'center', alignItems: 'center'}}>
              <HSSimpleTitle text="S" level={4} color={"#222"}/>
              <HSSimpleTitle text="kills" level={4} color={"#badc00"}/>
            </div>
            <div style={{padding: '0 10px'}}>
              <div style={{display: 'grid', gridTemplateColumns: '100px 1fr', height: 100}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{borderLeft: '2px solid rgb(186,220,0)', display: 'flex', alignItems: 'center', paddingLeft: 15, height: 30}}>
                    <h5>Languages</h5>
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap'}}>
                  <img style={{height: 50}} src={java.src}/>
                  <img style={{height: 50}} src={js.src}/>
                  <img style={{height: 50}} src={ts.src}/>
                  <img style={{height: 50}} src={htmlcss.src}/>
                  <img style={{height: 50}} src={python.src}/>
                  <img style={{height: 50}} src={rs.src}/>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '100px 1fr', height: 150, marginTop: 40}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{borderLeft: '2px solid rgb(186,220,0)', display: 'flex', alignItems: 'center', paddingLeft: 15, height: 30}}>
                    <h5>Frameworks</h5>
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: 15, flexWrap: 'wrap'}}>
                  <img style={{height: 50, marginLeft: 10}} src={springboot.src}/>
                  <img style={{height: 40}} src={react.src}/>
                  <img style={{height: 30}} src={next.src}/>
                  <img style={{height: 30}} src={tauri.src}/>
                  <img style={{height: 30}} src={jquery.src}/>
                  <img style={{height: 40}} src={thyme.src}/>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '100px 1fr', height: 100, marginTop: 30}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{borderLeft: '2px solid rgb(186,220,0)', display: 'flex', alignItems: 'center', paddingLeft: 15, height: 30}}>
                    <h5>Archiving</h5>
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap'}}>
                  <img style={{height: 40, marginLeft: 10}} src={postgre.src}/>
                  <img style={{height: 30}} src={elastic.src}/>
                  <img style={{height: 50}} src={mysql.src}/>
                  <img style={{height: 50}} src={sqlserver.src}/>
                  <img style={{height: 50}} src={mongo.src}/>
                  <img style={{height: 50}} src={redis.src}/>
                </div>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '100px 1fr', height: 100, marginTop: 30}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{borderLeft: '2px solid rgb(186,220,0)', display: 'flex', alignItems: 'center', paddingLeft: 15, height: 30}}>
                    <h5>Etc.</h5>
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap'}}>
                  <img style={{height: 40, marginLeft: 10}} src={kafka.src}/>
                  <img style={{height: 30}} src={docker.src}/>
                  <img style={{height: 40}} src={aws.src}/>
                  <img style={{height: 40}} src={azure.src}/>
                </div>
              </div>
            </div>
          </div>
        </HSSimpleFrame>
      </div>
    </div>
  )
}