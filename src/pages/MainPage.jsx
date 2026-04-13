import { useState, useEffect } from 'react';
import LiveUnitAnimated from '../components/LiveUnitAnimated';
import LiveConsentModal from '../components/LiveConsentModal';
import LiveDetailViewer from '../components/LiveDetailViewer';

// Image assets from Figma
const imgGroup2085663863 = "https://www.figma.com/api/mcp/asset/a51b69e4-cab2-485c-bdc1-1b028c590c95";
const imgRectangle1664144543 = "https://www.figma.com/api/mcp/asset/bd9be7dd-fa9c-4142-a71c-4500e98f84a7";
const imgVector = "https://www.figma.com/api/mcp/asset/454f8a23-9cbb-4e61-b785-a391dbe4df30";
const imgGroup = "https://www.figma.com/api/mcp/asset/127b1a18-88c7-430b-bff8-3f7aef6bb793";
const imgImage = "https://www.figma.com/api/mcp/asset/b2492edf-da1f-4f70-94a5-13b9f90545dd";
const imgImage1 = "https://www.figma.com/api/mcp/asset/45cfd353-eef9-495b-9133-4025e58967d1";
const imgImage2 = "https://www.figma.com/api/mcp/asset/ddce3a18-ed91-4f9e-8dc8-778264b3a557";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/037e0289-45bb-4d75-8218-f44efbda2cb2";
const imgImage3 = "https://www.figma.com/api/mcp/asset/8aa92df2-bb9f-44da-a4cc-8a45e740de43";
const imgImage4 = "https://www.figma.com/api/mcp/asset/ce93fea3-de42-49d5-8838-d58d259fce05";
const imgProfile = "https://www.figma.com/api/mcp/asset/9523e6ac-36dc-4498-8c4b-a9f5b222646d";
const imgChatroomRecordSend = "https://www.figma.com/api/mcp/asset/aa60ab82-5ac0-4c88-834c-3603084046a7";
const imgFace = "https://www.figma.com/api/mcp/asset/1a4861ce-5e27-49ef-84be-0f264c711fb3";
const imgText = "https://www.figma.com/api/mcp/asset/67673d4a-c4c2-47cc-964c-165eabd6f89c";
const imgCap = "https://www.figma.com/api/mcp/asset/ac5094f4-0353-4259-af0f-1702d325304e";
const imgWifi = "https://www.figma.com/api/mcp/asset/dad93c1b-f637-46ef-804d-a8b57cf68289";
const imgCellularConnection = "https://www.figma.com/api/mcp/asset/126c190d-e25b-4325-a5df-3b94eae6f6ca";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/2ec11f2d-7fa2-402b-9f07-2115e309caaf";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/656f81ae-8ab4-41ca-8ea6-c91fe3739461";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/6c10728a-5957-40cc-9f17-b80eea29ae17";
const imgStroke2 = "https://www.figma.com/api/mcp/asset/b1ad30a7-7cf8-43e2-9177-7e4a1f67b89e";
const imgStroke3 = "https://www.figma.com/api/mcp/asset/7289dce3-a538-4882-8c4b-fc7fe7f7a6dc";
const imgEllipse2938 = "https://www.figma.com/api/mcp/asset/8cdc6ba0-6467-47f2-b328-41d20900c15e";
const imgEllipse2944 = "https://www.figma.com/api/mcp/asset/261c500e-6ed3-40a7-a240-113b7296d065";
const imgRectangle1664126224 = "https://www.figma.com/api/mcp/asset/349abe7a-8f11-4582-83ee-e4781405877a";
const imgRectangle1664126223 = "https://www.figma.com/api/mcp/asset/855f17fb-d6b8-4401-9d47-99173e7c3323";
const imgVector64783 = "https://www.figma.com/api/mcp/asset/a6b11fee-0387-4725-9649-b0763a082206";

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

export default function MainPage() {
  const [showDetailViewer, setShowDetailViewer] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleLiveUnitClick = () => {
    setShowDetailViewer(true);
  };

  // DetailViewer 슬라이드업 완료 후 팝업 표시
  useEffect(() => {
    if (showDetailViewer && !isClosing) {
      const timer = setTimeout(() => {
        setShowConsentModal(true);
      }, 400); // 0.4초 후 팝업 표시

      return () => clearTimeout(timer);
    }
  }, [showDetailViewer, isClosing]);

  const handleCloseDetailViewer = () => {
    setShowConsentModal(false);
    setIsClosing(true);

    // 슬라이드 다운 애니메이션 후 제거
    setTimeout(() => {
      setShowDetailViewer(false);
      setIsClosing(false);
    }, 400); // 0.4초 후 제거
  };

  const handleCloseModal = () => {
    // modal만 닫고 detail viewer는 유지
    setShowConsentModal(false);
  };

  const handleAgree = () => {
    setShowConsentModal(false);
    // detail viewer는 계속 열린 상태로 라이브 재생
  };

  return (
    <div className="bg-white relative size-full overflow-hidden">
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
        <LiveUnitAnimated onClick={handleLiveUnitClick} />

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

      {/* Live Detail Viewer */}
      <LiveDetailViewer
        isOpen={showDetailViewer}
        onClose={handleCloseDetailViewer}
        isClosing={isClosing}
      />

      {/* Live Consent Modal */}
      <LiveConsentModal
        isOpen={showConsentModal}
        onClose={handleCloseModal}
        onAgree={handleAgree}
      />
    </div>
  );
}
