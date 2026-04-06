// Green wave effect images from Figma
const imgMaskGroup = "https://www.figma.com/api/mcp/asset/ee753e2f-32fe-4800-b199-4a5d052d0901";
const imgMaskGroup1 = "https://www.figma.com/api/mcp/asset/523cad7d-aeac-44c1-8114-572c8cc9442d";
const imgMaskGroup2 = "https://www.figma.com/api/mcp/asset/5886720b-d2fb-4cd6-bb07-4b896145bdd2";
const imgMaskGroup3 = "https://www.figma.com/api/mcp/asset/46a762f1-a6cc-4702-9be7-b54dbead0168";

export default function LiveConsentModal({ isOpen, onClose, onAgree }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative w-[375px] h-[812px] flex items-end justify-center">
        {/* Dim Background - covers entire mobile screen */}
        <div
          className="absolute inset-0 bg-black/70 z-0"
          onClick={onClose}
        />

        {/* Bottom Sheet Wrapper */}
        <div className="relative w-[375px] z-10">
        {/* Bottom Sheet Content */}
        <div className="relative bg-white rounded-t-[20px] pb-safe">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-6 h-6 flex items-center justify-center z-10"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Graphic Area with LIVE Badge */}
        <div className="relative h-[148px] w-full overflow-hidden">
          {/* Graphic area container - centered in modal */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[375px] h-[148px]">
            {/* Green wave effect - centered in bottomsheet (212.12px centered in 375px = 81.44px from left) */}
            <div className="absolute left-[81px] top-0 w-[214.992px]">
              <div className="absolute left-0 top-[18.22px]">
                {/* First wave with mask */}
                <div
                  className="absolute left-0 top-0 w-[214.992px] h-[214.992px]"
                  style={{
                    maskImage: `url('${imgMaskGroup}')`,
                    maskSize: '212.117px 143px',
                    maskPosition: '1.192px -18.223px',
                    maskRepeat: 'no-repeat',
                    WebkitMaskImage: `url('${imgMaskGroup}')`,
                    WebkitMaskSize: '212.117px 143px',
                    WebkitMaskPosition: '1.192px -18.223px',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                >
                  <img
                    src={imgMaskGroup1}
                    alt=""
                    className="absolute inset-[-1.8%] w-[calc(100%+3.6%)] h-[calc(100%+3.6%)]"
                  />
                </div>

                {/* Second wave with mask */}
                <div
                  className="absolute left-[27.35px] top-[22.58px] w-[160.417px] h-[160.417px]"
                  style={{
                    maskImage: `url('${imgMaskGroup}')`,
                    maskSize: '212.117px 143px',
                    maskPosition: '-26.157px -40.805px',
                    maskRepeat: 'no-repeat',
                    WebkitMaskImage: `url('${imgMaskGroup}')`,
                    WebkitMaskSize: '212.117px 143px',
                    WebkitMaskPosition: '-26.157px -40.805px',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                >
                  <img
                    src={imgMaskGroup2}
                    alt=""
                    className="absolute inset-[-1.21%] w-[calc(100%+2.42%)] h-[calc(100%+2.42%)]"
                  />
                </div>

                {/* Third wave with mask */}
                <div
                  className="absolute left-[43.17px] top-[36.6px] w-[129.214px] h-[129.214px]"
                  style={{
                    maskImage: `url('${imgMaskGroup}')`,
                    maskSize: '212.117px 143px',
                    maskPosition: '-41.978px -54.817px',
                    maskRepeat: 'no-repeat',
                    WebkitMaskImage: `url('${imgMaskGroup}')`,
                    WebkitMaskSize: '212.117px 143px',
                    WebkitMaskPosition: '-41.978px -54.817px',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                >
                  <img
                    src={imgMaskGroup3}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* White gradient above LIVE badge */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[88px] w-[62px] h-[37px] bg-gradient-to-b from-white/80 to-white/0 rounded-[25px]" />

            {/* LIVE Badge */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[88px] w-[62px] h-[37px] rounded-[130px] border-[3px] border-[#06c755] bg-white flex items-center justify-center">
              <span className="font-sf-pro-text font-black text-[#06c755] text-[17px] leading-none tracking-[-0.23px]">
                LIVE
              </span>
            </div>
          </div>
        </div>

        {/* Text Area */}
        <div className="px-10 pb-[5px] relative">
          <h2 className="font-sf-pro-text font-bold text-black text-[16px] text-center tracking-[-0.15px] leading-tight mb-[5px]">
            Agree to the collection of<br/>LINE LIVE viewer information
          </h2>
          <p className="font-sf-pro-text text-[#777] text-[13px] text-center leading-[16px] tracking-[-0.09px] max-w-[275px] mx-auto">
            About information collected during live videos for the purposes of improving our service, and your profile being shown when using the chat or like feature
          </p>
        </div>

        {/* Learn More Link */}
        <div className="py-4 relative">
          <button className="w-full font-sf-pro-text text-[#4d73ff] text-[13px] text-center tracking-[-0.28px]">
            Learn more
          </button>
        </div>

        {/* Agree Button */}
        <div className="px-4 pt-2 pb-2 relative">
          <button
            onClick={onAgree}
            className="w-full h-12 bg-[#06c755] rounded-[5px] flex items-center justify-center"
          >
            <span className="font-sf-pro-text font-bold text-white text-[15px] tracking-[-0.33px]">
              Agree and watch live video
            </span>
          </button>
        </div>

        {/* Home Indicator */}
        <div className="h-[34px] flex items-end justify-center pb-2">
          <div className="w-[134px] h-[5px] bg-black rounded-full" />
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
