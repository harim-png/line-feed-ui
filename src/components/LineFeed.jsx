import LiveUnitAnimated from './LiveUnitAnimated';

// Image assets from Figma
const imgGroup2085663863 = "https://www.figma.com/api/mcp/asset/6b099b98-1bc0-458e-8616-6abf9c59e236";
const imgRectangle1664144543 = "https://www.figma.com/api/mcp/asset/34739e32-b0d1-4e58-a349-41c49816ecbc";
const imgVector = "https://www.figma.com/api/mcp/asset/37c3d3d8-48a0-429f-a0b4-d2cf05fe17b1";
const imgGroup = "https://www.figma.com/api/mcp/asset/aed44f59-725f-4aa9-810e-cbdddbec07fb";
const imgImage = "https://www.figma.com/api/mcp/asset/3143be50-2fd5-40d5-a6d6-797228b14bd6";
const imgImage1 = "https://www.figma.com/api/mcp/asset/f4acef7e-9989-4992-bfa4-56e4030ce155";
const imgImage2 = "https://www.figma.com/api/mcp/asset/a5781313-910b-4ece-95be-6ad03166ba1b";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/7b4a14d9-0248-49ec-8aa6-90b3f3eed7d1";
const imgImage3 = "https://www.figma.com/api/mcp/asset/bca33b73-af7a-44f0-911b-1e42476f5268";
const imgImage4 = "https://www.figma.com/api/mcp/asset/6d6dcdc2-0343-4dc9-9968-0a480de1dac9";
const imgProfile = "https://www.figma.com/api/mcp/asset/ba9afd3c-21b9-4c77-96f5-3c5aaa0fb30e";
const imgChatroomRecordSend = "https://www.figma.com/api/mcp/asset/79b6008b-aa4a-48d9-8adb-02f2d6b64f19";
const imgFace = "https://www.figma.com/api/mcp/asset/5eeb4885-77b8-4e20-8506-d8904a82f3ac";
const imgText = "https://www.figma.com/api/mcp/asset/3c7af942-944d-420a-9f12-f086229e9f7e";
const imgCap = "https://www.figma.com/api/mcp/asset/6bdb531c-63a2-4aac-80c2-9dfb803999d8";
const imgWifi = "https://www.figma.com/api/mcp/asset/56426a73-ef43-4799-a9ac-04caad914a00";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/86f87897-87e7-492c-b83e-16276b4ab15a";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/036339c4-b0cd-4b54-81cd-4b7909f5ea6e";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/0a686665-04a4-41bd-9d9f-1da17cc93e4b";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/b5c03a9a-fba7-45d1-826c-ec1d88c9c380";
const imgStroke2 = "https://www.figma.com/api/mcp/asset/51cb2107-b353-415b-a415-f7b012043c2c";
const imgStroke3 = "https://www.figma.com/api/mcp/asset/0bc2e424-b5e0-4076-9c5f-a9cd6e7a1c07";
const imgEllipse2938 = "https://www.figma.com/api/mcp/asset/83eaa360-a62d-4760-a002-c24f30c89802";
const imgEllipse2944 = "https://www.figma.com/api/mcp/asset/7fe97a49-a126-45ec-b45b-bf31b888f450";
const imgRectangle1664126224 = "https://www.figma.com/api/mcp/asset/972c2cf3-a338-4187-8013-61279c37424f";
const imgRectangle1664126223 = "https://www.figma.com/api/mcp/asset/d5d46a79-7f4d-4ea1-8a59-c030e23cadca";
const imgVector64783 = "https://www.figma.com/api/mcp/asset/77d6733a-e273-4554-baae-fff3a51fd140";

function HomeIndicator({ className, deviceDirection = "Vertical", mode = "Light" }) {
  return (
    <div className={className || "h-[34px] relative w-[134px]"}>
      <div className="absolute inset-[61.76%_0_23.53%_0] overflow-clip">
        <div className="-translate-x-1/2 absolute bg-black bottom-0 h-[5px] left-1/2 rounded-[100px] w-[134px]" />
      </div>
    </div>
  );
}

function IosLightIconNaviBottomNewsOff({ className }) {
  return (
    <div className={className || "h-[69px] relative w-[64px]"}>
      <div className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[24px] top-[26px]">
        <div className="absolute contents inset-[13.96%_18.12%_13.96%_18.13%]">
          <div className="absolute border-[1.7px] border-black border-solid inset-[13.96%_18.12%_13.96%_18.13%] rounded-[2.5px]" />
          <div className="absolute inset-[36.06%_37.5%]">
            <div className="absolute inset-[-12.7%_0]">
              <img alt="" className="block max-w-none size-full" src={imgGroup2085663863} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeFeedVideoSoundOn({ className }) {
  return (
    <div className={className || "relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.3)] size-[18px]"}>
      <div className="absolute h-[10.938px] left-[3.38px] top-[3.53px] w-[7.031px]">
        <div className="absolute inset-[-0.96%_-6.22%]">
          <img alt="" className="block max-w-none size-full" src={imgRectangle1664144543} />
        </div>
      </div>
      <div className="absolute h-[7.188px] left-[12.31px] top-[5.41px] w-[3.029px]">
        <div className="absolute inset-[-5.9%_-19.81%_-5.9%_-14.01%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}

function Sound({ className, property1 = "on" }) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[50px]"}>
      <HomeFeedVideoSoundOn className="relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.3)] shrink-0 size-[18px]" />
    </div>
  );
}

export default function LineFeed() {
  return (
    <div className="bg-white relative size-full">
      {/* Status Bar */}
      <div className="absolute bg-white h-[44px] left-0 top-0 w-[375px]">
        <div className="absolute contents right-[14.34px] top-[17.33px]">
          <div className="absolute contents right-[14.34px] top-[17.33px]">
            <div className="absolute border border-black border-solid h-[11.333px] opacity-35 right-[16.67px] rounded-[2.667px] top-[17.33px] w-[22px]" />
            <div className="absolute h-[4px] right-[14.34px] top-[21px] w-[1.328px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgCap} />
            </div>
            <div className="absolute bg-black h-[7.333px] right-[18.67px] rounded-[1.333px] top-[19.33px] w-[18px]" />
          </div>
          <div className="absolute h-[11px] right-[43.67px] top-[17.33px] w-[15.333px]">
            <img alt="" className="absolute block max-w-none size-full" src={imgWifi} />
          </div>
          <div className="absolute h-[10.667px] right-[64px] top-[17.67px] w-[17px]">
            <img alt="" className="absolute block max-w-none size-full" src={imgCellularConnection} />
          </div>
        </div>
        <div className="absolute h-[21px] left-[20px] top-[11px] w-[54px]">
          <p className="-translate-x-1/2 absolute font-sf-pro-text font-semibold leading-[normal] left-[27px] not-italic text-[15px] text-black text-center top-[calc(50%-7.5px)] tracking-[-0.3px] w-[54px]">
            9:41
          </p>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="absolute bg-white h-[44px] left-0 top-[44px] w-[375px]">
        <div className="absolute bg-white inset-0" />
        <div className="absolute content-stretch flex gap-[13px] items-center justify-end left-[261px] top-[10px]">
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-[18.75%]">
              <div className="absolute inset-[-5.67%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-[14.58%_16%_10.42%_16%]">
              <div className="absolute inset-[-4.72%_-4.31%_0_-4.31%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup3} />
              </div>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[11.46%_13.83%_11.46%_13.85%]">
              <div className="absolute inset-[-4.59%_-4.9%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup4} />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-full absolute flex flex-col font-sf-pro-text font-extrabold justify-end leading-[0] left-[56px] not-italic text-[16px] text-black top-[32px] w-[144px]">
          <p className="leading-[20px]">Naomi</p>
        </div>
        <div className="absolute inset-[6.82%_86.4%_6.82%_3.47%]">
          <div className="-translate-y-1/2 absolute left-[3px] size-[32px] top-1/2">
            <img alt="" className="absolute block max-w-none size-full" height="32" src={imgProfile} width="32" />
          </div>
        </div>
      </div>

      {/* Feed Content */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[22px] items-start left-1/2 top-[99px] w-[375px]">
        {/* LIVE Unit with Animation */}
        <LiveUnitAnimated />

        {/* Image Post 16:9 */}
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex h-[32px] items-start justify-between pb-[10px] px-[16px] relative shrink-0 w-[375px]">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[32px]">
                  <img alt="" className="absolute block max-w-none size-full" height="32" src={imgImage1} width="32" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start not-italic relative shrink-0">
                <p className="font-sf-pro-text font-semibold leading-[19px] relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">
                  Nikkan Sports
                </p>
                <div className="flex flex-col font-sf-pro-text font-normal justify-end leading-[0] min-w-full relative shrink-0 text-[#909090] text-[11px] w-[min-content]">
                  <p className="leading-[normal]">LINE News</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[343px]">
            <div className="border border-[rgba(0,0,0,0.04)] border-solid h-[193px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-[343px]">
              <div className="absolute contents left-[-1px] top-[-1px]">
                <div className="absolute border border-[rgba(0,0,0,0.04)] border-solid h-[193px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[343px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
                    <img alt="" className="absolute h-[185.1%] left-0 max-w-none top-[-13.53%] w-full" src={imgImage2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-[#efefef] border-b border-l border-r border-solid content-stretch flex flex-col gap-[14px] items-start pb-[12px] pt-[14px] px-[16px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 w-[343px]">
              <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
                    <div className="col-1 font-sf-pro-text font-normal ml-0 mt-0 not-italic overflow-hidden relative row-1 text-[#111] text-[15px] text-ellipsis w-[311px] whitespace-pre-wrap">
                      <p className="leading-[normal] mb-0">Rumors are intensifying that Japanese slugger Kazuma Okamoto could join the Pittsburgh Pirates on a multi-year</p>
                      <p className="leading-[normal]">{` contract this offseason, with several teams vying for his signature.`}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[311px]">
                  <p className="font-sf-pro-text font-normal leading-[normal] not-italic relative shrink-0 text-[#909090] text-[13px] whitespace-nowrap">
                    5 minutes ago
                  </p>
                  <div className="border border-[#efefef] border-solid content-stretch flex gap-[4.5px] h-[32px] items-center justify-end px-[8px] py-[6px] relative rounded-[16px] shrink-0">
                    <div className="content-stretch flex gap-[2.5px] items-center justify-end relative shrink-0">
                      <div className="relative shrink-0 size-[18px]">
                        <img alt="" className="absolute block max-w-none size-full" src={imgFace} />
                      </div>
                      <div className="h-[18px] relative shrink-0 w-[16px]">
                        <img alt="" className="absolute block max-w-none size-full" src={imgText} />
                      </div>
                    </div>
                    <p className="font-sf-pro font-[590] leading-[18px] relative shrink-0 text-[#111] text-[12px] text-right tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      1,238,891
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big Visual Unit */}
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex h-[32px] items-start justify-between pb-[10px] px-[16px] relative shrink-0 w-[375px]">
            <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[32px]">
                <div className="absolute inset-0 overflow-clip">
                  <img alt="" className="absolute block max-w-none size-full" height="32" src={imgGroup1} width="32" />
                </div>
              </div>
              <p className="font-sf-pro-text font-semibold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px] tracking-[-0.3px] whitespace-nowrap">
                Trendletter
              </p>
              <div className="border border-[#efefef] border-solid flex h-[28px] w-[76px] items-center justify-center relative rounded-[14px] shrink-0">
                <p className="font-sf-pro-text font-medium leading-[1] not-italic relative shrink-0 text-[#111] text-[12px] tracking-[-0.3px] whitespace-nowrap">
                  Add friend
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[555px] items-start relative shrink-0 w-[343px]">
            <div className="bg-gradient-to-b from-[#f2f2f2] h-[42px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 to-white w-full">
              <div className="-translate-y-1/2 absolute flex flex-col font-sf-pro-text font-semibold justify-center leading-[0] left-[16px] not-italic text-[#111] text-[12px] top-[16px] whitespace-nowrap">
                <p className="leading-[normal]">Trending 'NewJeans Comeback'</p>
              </div>
            </div>
            <div className="absolute h-[513px] left-0 overflow-clip top-[32px] w-[343px]">
              <div className="absolute border-[rgba(0,0,0,0.04)] border-b border-l border-r border-solid content-stretch flex h-[56px] items-center justify-between left-0 px-[16px] rounded-bl-[10px] rounded-br-[10px] top-[457px] w-[343px]">
                <div className="h-[32px] overflow-clip relative shrink-0 w-[204px]">
                  <p className="absolute font-sf-pro-text font-normal leading-[0] left-0 not-italic overflow-hidden text-[#909090] text-[12px] text-ellipsis top-[5px] w-[204px]">
                    <span className="leading-[normal] text-[13px]">5</span>
                    <span className="font-hiragino font-light leading-[normal]">分前</span>
                  </p>
                </div>
                <div className="border border-[#efefef] border-solid content-stretch flex gap-[4.5px] h-[32px] items-center justify-end px-[8px] py-[6px] relative rounded-[16px] shrink-0">
                  <div className="content-stretch flex gap-[2.5px] items-center justify-end relative shrink-0">
                    <div className="relative shrink-0 size-[18px]">
                      <img alt="" className="absolute block max-w-none size-full" src={imgFace} />
                    </div>
                    <div className="h-[18px] relative shrink-0 w-[16px]">
                      <img alt="" className="absolute block max-w-none size-full" src={imgText} />
                    </div>
                  </div>
                  <p className="font-sf-pro font-[590] leading-[18px] relative shrink-0 text-[#111] text-[12px] text-right tracking-[-0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    9,876万
                  </p>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.04)] border-solid h-[457px] left-0 overflow-clip rounded-tl-[10px] rounded-tr-[10px] top-0 w-[343px]">
                <div className="absolute contents left-[-1px] top-[-1px]">
                  <div className="absolute h-[457px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[343px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
                      <img alt="" className="absolute h-full left-[-26.63%] max-w-none top-0 w-[199.46%]" src={imgImage3} />
                    </div>
                  </div>
                  <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.05)] h-[90px] left-0 to-[rgba(0,0,0,0)] top-0 w-[343px]" />
                  <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[200px] left-0 to-[rgba(0,0,0,0.4)] top-[257px] w-[343px]" />
                </div>
                <div className="absolute bottom-[21px] content-stretch flex flex-col gap-[15px] items-start left-[25px] w-[291px]">
                  <div className="border-[1.5px] border-solid border-white h-[54px] relative rounded-[5px] shrink-0 w-[72px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgImage4} />
                  </div>
                  <p className="font-sf-pro-text font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[17px] text-shadow-[0px_0px_30px_rgba(0,0,0,0.4)] text-white tracking-[-0.3px] w-[min-content]">
                    ADOR Confirms End of NewJean's Activities Conflicting Paths for Hanni and Danielle Spark Massive...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 contents left-0">
        <div className="absolute bg-white bottom-0 h-[84px] left-0 overflow-clip shadow-[0px_-3px_5px_0px_rgba(0,0,0,0.05)] w-[375px]">
          <div className="absolute contents left-0 top-[-20px]">
            <div className="absolute bg-white h-[69px] left-0 opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute h-[69px] left-[5.5px] top-[-20px] w-[64px]">
              <p className="absolute font-sf-pro-text font-normal inset-[73.91%_18.75%_10.14%_18.75%] leading-[normal] not-italic text-[#111] text-[9px] text-center">
                Home
              </p>
              <div className="absolute inset-[37.68%_31.25%_27.54%_31.25%] overflow-clip">
                <div className="absolute contents left-0 top-0">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.7px] left-1/2 top-[calc(50%-0.15px)] w-[16.399px]">
                    <div className="absolute inset-[-2.23%_-5.18%_-5.09%_-5.18%]">
                      <img alt="" className="block max-w-none size-full" src={imgStroke3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[69px] left-[69.5px] opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute bg-white h-[69px] left-[75px] opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute h-[69px] left-[80.5px] top-[-20px] w-[64px]">
              <p className="absolute font-sf-pro-text font-normal inset-[73.91%_18.75%_10.14%_18.75%] leading-[normal] not-italic text-[#111] text-[9px] text-center">
                Chats
              </p>
              <div className="absolute inset-[37.68%_31.25%_27.54%_31.25%]">
                <div className="absolute contents left-[3.25px] top-[3px]">
                  <div className="absolute h-[18.05px] left-[3.25px] top-[3px] w-[17.5px]">
                    <div className="absolute inset-[-4.71%_-4.86%_-2.58%_-4.86%]">
                      <img alt="" className="block max-w-none size-full" src={imgEllipse2938} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[69px] left-[144.5px] opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute bg-white h-[69px] left-[150px] opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute inset-[-23.81%_21.47%_41.67%_61.47%]">
              <p className="absolute font-sf-pro-text font-normal inset-[73.91%_31.25%_10.14%_31.25%] leading-[normal] not-italic text-[#111] text-[9px] text-center whitespace-nowrap">
                News
              </p>
              <div className="-translate-x-1/2 absolute left-1/2 overflow-clip size-[24px] top-[26px]">
                <div className="absolute contents inset-[13.96%_18.12%_13.96%_18.13%]">
                  <div className="absolute border-[1.7px] border-black border-solid inset-[13.96%_18.12%_13.96%_18.13%] rounded-[2.5px]" />
                  <div className="absolute inset-[36.06%_37.5%]">
                    <div className="absolute inset-[-12.7%_0]">
                      <img alt="" className="block max-w-none size-full" src={imgGroup2085663863} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[69px] left-[219.5px] opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute bg-white h-[69px] left-[225px] opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute h-[69px] left-[155.5px] top-[-20px] w-[64px]">
              <p className="absolute font-sf-pro-text font-normal inset-[73.91%_17.19%_10.14%_18.75%] leading-[normal] not-italic text-[#111] text-[9px] text-center whitespace-nowrap">
                Shopping
              </p>
              <div className="absolute inset-[37.68%_31.25%_27.54%_31.25%]">
                <div className="absolute contents left-[4.75px] top-[2.35px]">
                  <div className="absolute h-[14.2px] left-[4.75px] top-[5.95px] w-[14.5px]">
                    <div className="absolute inset-[-5.99%_-5.86%]">
                      <img alt="" className="block max-w-none size-full" src={imgRectangle1664126224} />
                    </div>
                  </div>
                  <div className="-translate-x-1/2 absolute h-[4px] left-1/2 top-[2.35px] w-[5.5px]">
                    <div className="absolute inset-[-21.25%_-15.45%_0_-15.45%]">
                      <img alt="" className="block max-w-none size-full" src={imgRectangle1664126223} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[69px] left-[294.5px] opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute bg-white h-[69px] left-[300px] opacity-0 top-[-20px] w-[5.5px]" />
            <div className="absolute h-[69px] left-[305.5px] top-[-20px] w-[64px]">
              <p className="absolute font-sf-pro-text font-normal inset-[73.91%_18.75%_10.14%_18.75%] leading-[normal] not-italic text-[#111] text-[9px] text-center">
                Place
              </p>
              <div className="absolute inset-[37.68%_31.25%_27.54%_31.25%]">
                <div className="absolute h-[17px] left-[5px] top-[3.25px] w-[14.5px]">
                  <div className="absolute inset-[-5%_-4.34%_-5%_-5.86%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector64783} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[69px] left-[369.5px] opacity-0 top-[-20px] w-[5.5px]" />
          </div>
        </div>
        <HomeIndicator className="absolute bottom-0 h-[34px] left-[120px] w-[134px]" />
      </div>
    </div>
  );
}
