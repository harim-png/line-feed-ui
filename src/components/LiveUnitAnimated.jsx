import { useState, useEffect } from 'react';

const imgGroup = "https://www.figma.com/api/mcp/asset/aed44f59-725f-4aa9-810e-cbdddbec07fb";
const imgImage = "https://www.figma.com/api/mcp/asset/3143be50-2fd5-40d5-a6d6-797228b14bd6";
const imgImagePreview = "https://www.figma.com/api/mcp/asset/6bafe117-e416-4348-8a34-ffe88afff760";
const imgChatroomRecordSend = "https://www.figma.com/api/mcp/asset/79b6008b-aa4a-48d9-8adb-02f2d6b64f19";
const imgRectangle1664144543 = "https://www.figma.com/api/mcp/asset/34739e32-b0d1-4e58-a349-41c49816ecbc";
const imgVector = "https://www.figma.com/api/mcp/asset/37c3d3d8-48a0-429f-a0b4-d2cf05fe17b1";

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

function Sound({ className }) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[50px]"}>
      <HomeFeedVideoSoundOn className="relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.3)] shrink-0 size-[18px]" />
    </div>
  );
}

function CountingNumber({ targetNumber, isActive }) {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      setDisplayCount(0);
      return;
    }

    // 초기 카운팅 애니메이션
    const duration = 1500; // 1.5초 동안 카운팅
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(targetNumber);
        setDisplayCount(targetNumber);
        clearInterval(timer);
      } else {
        const newCount = Math.floor(increment * currentStep);
        setCount(newCount);
        setDisplayCount(newCount);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetNumber, isActive]);

  // 5초마다 뷰 카운트 갱신
  useEffect(() => {
    if (!isActive || count === 0) return;

    const updateInterval = setInterval(() => {
      const increase = Math.floor(Math.random() * 40) + 10; // 10~50명 랜덤 증가
      const startCount = displayCount;

      setCount(prev => prev + increase);

      // 1씩 증가하는 카운팅 애니메이션 (0.5초)
      const animDuration = 500;
      const stepDuration = animDuration / increase; // 각 1 증가당 시간

      let step = 0;
      const animTimer = setInterval(() => {
        step++;
        if (step >= increase) {
          setDisplayCount(startCount + increase);
          clearInterval(animTimer);
        } else {
          setDisplayCount(startCount + step);
        }
      }, stepDuration);
    }, 5000); // 5초마다 갱신

    return () => clearInterval(updateInterval);
  }, [isActive, count, displayCount]);

  return displayCount.toLocaleString('ja-JP');
}

export default function LiveUnitAnimated({ onClick }) {
  const [showLive, setShowLive] = useState(false);

  useEffect(() => {
    // 4초 후 cover image 사라지고 live preview로 전환
    const timer = setTimeout(() => {
      setShowLive(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={onClick}
      className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full cursor-pointer"
    >
      {/* Profile Header */}
      <div className="h-[32px] relative shrink-0 w-[375px]">
        <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center left-[16px] top-0">
          <div className="relative shrink-0 size-[32px]">
            <div className="absolute inset-0 overflow-clip">
              <img alt="" className="absolute block max-w-none size-full" height="32" src={imgGroup} width="32" />
            </div>
          </div>
          <p className="font-sf-pro font-[590] leading-[normal] relative shrink-0 text-[#111] text-[14px] tracking-[-0.56px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Tokyo Fashion week
          </p>
          <div className="border border-[#efefef] border-solid flex h-[28px] w-[76px] items-center justify-center relative rounded-[14px] shrink-0">
            <p className="font-sf-pro-text font-medium leading-[1] not-italic relative shrink-0 text-[#111] text-[12px] tracking-[-0.3px] whitespace-nowrap">
              Add friend
            </p>
          </div>
        </div>
        <div className="absolute content-stretch flex h-[20px] items-center justify-center left-[339px] top-[6px]">
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
            <div className="relative shrink-0 size-[20px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgChatroomRecordSend} />
            </div>
          </div>
        </div>
      </div>

      {/* Live Card with Animation */}
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[343px]">
        <div className="h-[457px] overflow-clip relative rounded-[10px] shrink-0 w-full" style={{ border: '1px solid rgba(255, 255, 255, 0.04)' }}>
          {/* Cover or Preview */}
          <div
            className="absolute h-[457px] left-[-1px] overflow-clip top-[-1px] w-[343px] transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: showLive ? 0 : 1,
              pointerEvents: showLive ? 'none' : 'auto'
            }}
          >
            {/* Cover Image */}
            <div className="absolute h-[458px] left-0 top-0 w-[343px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-full left-[-35.34%] max-w-none top-[-0.02%] w-[200.29%]"
                  src={imgImage}
                />
              </div>
            </div>
            <div className="absolute bg-gradient-to-b from-[35.011%] from-[rgba(0,0,0,0)] h-[457px] left-0 to-[rgba(0,0,0,0.8)] top-0 w-[343px]" />
          </div>

          {/* Live Preview - fades in */}
          <div
            className="absolute h-[457px] left-[-1px] overflow-clip top-[-1px] w-[343px] transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: showLive ? 1 : 0,
              pointerEvents: showLive ? 'auto' : 'none'
            }}
          >
            <div className="absolute bg-black h-[457px] left-0 top-0 w-[343px]" />
            <div className="-translate-x-1/2 absolute h-[193px] left-1/2 top-0 w-[343px]">
              <div className="absolute inset-0 overflow-hidden">
                <video
                  className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/live-preview.mov"
                  onError={(e) => {
                    // Fallback to image if video fails to load
                    e.target.style.display = 'none';
                    const img = document.createElement('img');
                    img.src = imgImagePreview;
                    img.className = 'absolute h-full left-0 max-w-none top-0 w-full object-cover';
                    e.target.parentNode.appendChild(img);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Sound Button */}
          <Sound className="absolute bg-[rgba(255,255,255,0.15)] bottom-[9px] content-stretch flex items-center justify-center overflow-clip p-[4px] right-[9px] rounded-[50px] z-10" />

          {/* Live Info + Button */}
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[18px] items-center left-1/2 top-[222px] z-10">
            <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0">
              {/* LIVE Badge */}
              <div className="bg-[rgba(0,0,0,0.4)] backdrop-blur-sm border-[#06c755] border-[1.5px] border-solid flex h-[25px] w-[41px] items-center justify-center overflow-clip relative rounded-[12.5px] shrink-0">
                <p className="font-sf-pro-text font-extrabold leading-[1] not-italic relative shrink-0 text-[#06c755] text-[12px] text-center tracking-[-0.23px] whitespace-nowrap">
                  LIVE
                </p>
              </div>

              {/* Title and Subtitle */}
              <div className="content-stretch flex flex-col gap-[5px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center text-shadow-[0px_0px_1px_rgba(0,0,0,0.5)] text-white">
                <div className="font-sf-pro-display font-extrabold overflow-hidden relative shrink-0 text-[24px] text-ellipsis w-[273px]">
                  <p className="leading-[normal] mb-0">Tokyo Fashion Week</p>
                  <p className="leading-[normal]">LIVE 2026</p>
                </div>
                <div className="flex flex-col font-sf-pro-text font-normal justify-end opacity-80 overflow-hidden relative shrink-0 text-[15px] text-ellipsis tracking-[-0.24px] w-[273px] whitespace-nowrap">
                  <p className="leading-[20px] overflow-hidden text-ellipsis transition-opacity duration-500">
                    {showLive ? (
                      <>
                        <CountingNumber targetNumber={30832} isActive={showLive} />
                        人が視聴中
                      </>
                    ) : (
                      '他の視聴者とチャットを始めよう'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Join Button with Color Transition Blur Fill */}
            <div className="content-stretch flex flex-col h-[44px] items-center justify-center overflow-hidden px-[20px] relative rounded-[56px] shrink-0 cursor-pointer">
              {/* Base Background */}
              <div
                className="absolute inset-0 rounded-[56px]"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                }}
              />

              {/* Green Blur Fill Effect - appears when showLive becomes true */}
              <div
                className="absolute inset-0 rounded-[56px] pointer-events-none transition-all duration-700 ease-out"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 240, 100, 0.9) 0%, rgba(6, 199, 85, 0.8) 100%)',
                  filter: 'blur(16px)',
                  transform: showLive ? 'scale(1.2)' : 'scale(0)',
                  opacity: showLive ? 1 : 0,
                }}
              />

              {/* Solid Green Background - fades in after blur */}
              <div
                className="absolute inset-0 rounded-[56px] transition-opacity duration-500 delay-300"
                style={{
                  backgroundColor: '#06c755',
                  opacity: showLive ? 1 : 0,
                }}
              />

              <div className="content-stretch flex items-center justify-center relative shrink-0 z-10">
                <p className="font-hiragino font-semibold leading-[17px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
                  ライブ配信に参加
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
