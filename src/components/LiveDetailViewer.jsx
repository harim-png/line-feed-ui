// Image assets from Figma
const imgProfileThumbnail = "https://www.figma.com/api/mcp/asset/4b17a849-aeae-44f1-8830-22c398f5fd35";
const imgLiveBadge = "https://www.figma.com/api/mcp/asset/f6cf6bcd-9e43-4a79-a656-6568bf39bf00";
const imgGroup = "https://www.figma.com/api/mcp/asset/c43c2461-5184-4a1a-bc31-60cb8a203233";
const imgHeaderInfoIconViewer = "https://www.figma.com/api/mcp/asset/185342f2-0d82-461c-b525-a47ffacd1e05";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/371e8666-aa54-4df4-ab99-2474f3facb24";
const imgDot = "https://www.figma.com/api/mcp/asset/202c6a55-10bc-4912-b258-1acd52950bb9";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/d0aa3a82-e480-4a82-8490-cb16756ea0bd";
const imgIconHeader2 = "https://www.figma.com/api/mcp/asset/5ef8c533-5066-448b-b0c3-8a14f86446ce";
const imgGeminiGeneratedImage = "https://www.figma.com/api/mcp/asset/3fb5a9a3-c6aa-4462-ab08-e5a6280025d2";
const imgNavigatingIconButton = "https://www.figma.com/api/mcp/asset/b255f3e3-b57b-46a4-833f-6325b94c77da";
const imgDfLVoom15Apng13 = "https://www.figma.com/api/mcp/asset/55f4edca-35f3-4232-99ff-e65eeeb10169";
const imgFunny1 = "https://www.figma.com/api/mcp/asset/921e994d-9a6c-4353-8433-1ac74468dd78";
const imgStar15 = "https://www.figma.com/api/mcp/asset/88833f90-b4c5-4117-b28f-ab67f08fd88c";
const imgStar16 = "https://www.figma.com/api/mcp/asset/bacd890d-465f-445f-80a8-8474e4ee6126";
const imgAnnouncement = "https://www.figma.com/api/mcp/asset/dae066af-73bd-4795-ad51-87629340b36b";
const imgChatElementBadgeGlpDialogBell = "https://www.figma.com/api/mcp/asset/235f7271-76cb-48dd-88e5-1dbcb41c391e";
const imgIosProfilePhoto = "https://www.figma.com/api/mcp/asset/0f0dc2d3-cf09-4985-8b93-a8e42aa30fad";
const imgIosProfilePhoto1 = "https://www.figma.com/api/mcp/asset/c631b410-138e-4b72-8972-aae294c93f1b";
const imgIosProfilePhoto2 = "https://www.figma.com/api/mcp/asset/fb3e2bcf-fba4-4e7a-a46c-02a7ac6d2534";
const imgIosProfilePhoto3 = "https://www.figma.com/api/mcp/asset/3a097333-0048-44eb-98ad-3456cae52709";
const imgIosProfilePhoto4 = "https://www.figma.com/api/mcp/asset/fe4cf5c3-d978-462b-8216-d64e2a66d55d";
const imgIosProfilePhoto5 = "https://www.figma.com/api/mcp/asset/720931bf-e564-49e9-94b5-0dc013b87e58";
const imgIosProfilePhoto6 = "https://www.figma.com/api/mcp/asset/e0ea844d-b40d-4d81-86c3-8dd7da5bbd17";
const imgIosProfilePhoto7 = "https://www.figma.com/api/mcp/asset/0e8497c2-22e6-47b0-8e08-9504dbbe25b4";
const imgIosProfilePhoto8 = "https://www.figma.com/api/mcp/asset/2f9390d9-99cd-4596-80b4-65defdfaab0c";

export default function LiveDetailViewer({ isOpen, onClose, showConsent, isClosing }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div
        className="relative w-[375px] h-[812px] bg-black overflow-hidden"
        style={{
          animation: isClosing ? 'slideDown 0.4s ease-out' : 'slideUp 0.4s ease-out'
        }}
      >
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-[38px]">
          <div className="absolute inset-[31.82%_3.99%_27.27%_5.32%] overflow-hidden">
            {/* Time */}
            <div className="absolute inset-[0_84.16%_0_0] overflow-hidden">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[21px]">
                <p className="absolute left-0 right-0 top-1/2 -translate-y-1/2 font-sf-pro-text font-semibold text-[15px] text-center text-white tracking-[-0.3px]">
                  9:41
                </p>
              </div>
            </div>

            {/* Battery */}
            <div className="absolute right-[0.34px] top-[3.33px]">
              <div className="absolute border border-solid border-white h-[11.333px] opacity-35 right-[2.67px] rounded-[2.667px] top-0 w-[22px]" />
              <div className="absolute h-[4px] right-0 top-[4px] w-[1.328px] opacity-40">
                <svg width="1.328" height="4" viewBox="0 0 2 4" fill="white">
                  <path d="M0 2C0 0.895 0.448 0 1 0C1.552 0 2 0.895 2 2C2 3.105 1.552 4 1 4C0.448 4 0 3.105 0 2Z" fill="white"/>
                </svg>
              </div>
              <div className="absolute bg-white h-[7.333px] right-[4.67px] rounded-[1.333px] top-[2px] w-[18px]" />
            </div>

            {/* WiFi */}
            <div className="absolute right-[43.67px] top-[3.33px] w-[15.333px] h-[11px]">
              <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                <path d="M7.66668 9.66667C8.21896 9.66667 8.66668 9.21895 8.66668 8.66667C8.66668 8.11438 8.21896 7.66667 7.66668 7.66667C7.11439 7.66667 6.66668 8.11438 6.66668 8.66667C6.66668 9.21895 7.11439 9.66667 7.66668 9.66667Z" fill="white"/>
                <path d="M10.3867 6.94667C9.70001 6.26 8.72001 5.86667 7.66668 5.86667C6.61334 5.86667 5.63334 6.26 4.94668 6.94667L4 6C5.00668 4.99333 6.28668 4.46667 7.66668 4.46667C9.04668 4.46667 10.3267 4.99333 11.3333 6L10.3867 6.94667Z" fill="white"/>
                <path d="M13.28 4.05333C11.9467 2.72 10.1733 2 7.66666 2C5.15999 2 3.38666 2.72 2.05333 4.05333L1.10666 3.10667C2.71999 1.49333 4.87999 0.666667 7.66666 0.666667C10.4533 0.666667 12.6133 1.49333 14.2267 3.10667L13.28 4.05333Z" fill="white"/>
              </svg>
            </div>

            {/* Cellular Connection */}
            <div className="absolute right-[64px] top-[3.67px] w-[17px] h-[10.667px]">
              <svg width="17" height="11" viewBox="0 0 17 11" fill="white">
                <path d="M0 9.33333V10.6667H1.33333V9.33333H0ZM2.66667 8V10.6667H4V8H2.66667ZM5.33333 6V10.6667H6.66667V6H5.33333ZM8 4V10.6667H9.33333V4H8ZM10.6667 1.33333V10.6667H12V1.33333H10.6667ZM13.3333 0V10.6667H14.6667V0H13.3333ZM16 0V10.6667H17.3333V0H16Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Live Preview Video Area */}
        <div className="absolute top-[122px] left-0 right-0 h-[211px] flex items-center justify-center">
          <video
            src="/live-preview.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header - @Component / 2. Header / Profile */}
        <div className="absolute inset-[4.68%_0_89.73%_0]">
          {/* Buttons on the right */}
          <div className="absolute h-[26px] overflow-hidden right-[16px] top-[15px] w-[102px]">
            {/* Share Button */}
            <div className="absolute right-[38px] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.5)] size-[26px] top-0">
              <img alt="" className="absolute block max-w-none size-full" src={imgIconHeader2} />
            </div>
            {/* Close Button - Icon / Header 3 */}
            <button
              onClick={onClose}
              className="absolute right-0 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.5)] size-[26px] top-0"
            >
              <div className="absolute inset-0 opacity-41" />
              <div className="absolute inset-[21.02%]">
                <div className="absolute inset-[-3.75%]">
                  <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                </div>
              </div>
            </button>
          </div>

          {/* Profile Section */}
          <div className="absolute content-stretch flex gap-[10px] items-center left-[20px] top-[12px]">
            {/* Profile Image */}
            <div className="relative shrink-0 size-[32px]">
              <img alt="" className="absolute block max-w-none size-full" height="32" src={imgProfileThumbnail} width="32" />
            </div>
            {/* Profile Info */}
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
              <p className="font-sf-pro-text font-bold leading-[normal] not-italic relative shrink-0 text-[18px] text-shadow-[0px_0px_1px_rgba(0,0,0,0.2)] text-white whitespace-nowrap">
                TGC2023
              </p>
              <div className="relative shrink-0 size-[3px]">
                <img alt="" className="absolute block max-w-none size-full" src={imgDot} />
              </div>
              <p className="font-sf-pro-text font-bold leading-[16px] not-italic relative shrink-0 text-[#06c755] text-[13px] text-shadow-[0px_0px_1px_rgba(0,0,0,0.2)] tracking-[-0.09px] whitespace-nowrap">
                Follow
              </p>
            </div>
          </div>

          {/* Live Info Section */}
          <div className="absolute content-stretch flex gap-[10px] items-center left-[20px] top-[52px]">
            {/* LIVE Badge */}
            <div className="h-[20px] relative rounded-[99px] shrink-0 w-[32px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgLiveBadge} />
            </div>
            {/* Info */}
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                {/* Timer */}
                <div className="flex flex-col font-sf-pro-text font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-shadow-[0px_0px_1px_rgba(0,0,0,0.2)] text-white whitespace-nowrap">
                  <p className="leading-[10px]">00:01:34</p>
                </div>
                {/* Viewers */}
                <div className="content-stretch flex gap-[3px] items-center relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.2)] shrink-0">
                  <div className="relative shrink-0 size-[11px]">
                    <div className="absolute contents inset-0">
                      <div className="absolute contents inset-0">
                        <div className="absolute bg-white inset-0 opacity-0" />
                        <div className="absolute bg-white inset-[8.33%] opacity-0" />
                      </div>
                      <div className="absolute inset-[21.82%_10.64%_21.82%_10.55%]">
                        <div className="absolute inset-[-9.68%_-7.69%]">
                          <img alt="" className="block max-w-none size-full" src={imgGroup} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-sf-pro-text font-bold leading-[10px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                    43,504
                  </p>
                </div>
                {/* Likes */}
                <div className="content-stretch flex gap-[3px] items-center relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.2)] shrink-0">
                  <div className="relative shrink-0 size-[11px]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgHeaderInfoIconViewer} />
                  </div>
                  <p className="font-sf-pro-text font-bold leading-[10px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                    87
                  </p>
                </div>
                {/* Shares */}
                <div className="content-stretch flex gap-[3px] items-center relative shadow-[0px_0px_1px_0px_rgba(0,0,0,0.2)] shrink-0">
                  <div className="relative shrink-0 size-[11px]">
                    <div className="absolute inset-[2.27%_4.55%_2.27%_0]">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                  <p className="font-sf-pro-text font-bold leading-[10px] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                    483
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Chat Area - @Component / 5. Chat / W375 / S */}
        <div className="absolute bottom-[173px] left-0 w-[307px] h-[205px]">
          {/* Chat Messages with mask */}
          <div
            className="absolute bottom-[42px] left-[20px] flex flex-col gap-[10px] items-start"
            style={{
              maskImage: `url('${imgAnnouncement}')`,
              maskSize: '307px 196px',
              maskPosition: '-20px 133px',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: `url('${imgAnnouncement}')`,
              WebkitMaskSize: '307px 196px',
              WebkitMaskPosition: '-20px 133px',
              WebkitMaskRepeat: 'no-repeat',
            }}
          >
            {/* Chat 1 */}
            <div className="flex gap-2 text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] w-[287px]">
              <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] tracking-[-0.07px] whitespace-nowrap">Nickname</span>
              <span className="font-sf-pro-text text-white tracking-[-0.065px] flex-1">WWWWWWWWWWWWWWW</span>
            </div>

            {/* Chat 2 */}
            <div className="flex gap-2 text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] w-[287px]">
              <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] tracking-[-0.07px] whitespace-nowrap">Nickname</span>
              <span className="font-sf-pro-text text-white tracking-[-0.065px] flex-1">WWWWWWWWWWWWWWW</span>
            </div>

            {/* Chat 3 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Chloe</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">Does anyone know her Insta?</span>
            </div>

            {/* Chat 4 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto1} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Chloe</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">AWW</span>
            </div>

            {/* Chat 5 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto2} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Jay</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">Nice pattern</span>
            </div>

            {/* Chat 6 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto3} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Jay</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">Cool</span>
            </div>

            {/* Chat 7 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto4} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Chloe</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">Who is she?</span>
            </div>

            {/* Chat 8 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto5} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Mina</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">I like this brand</span>
            </div>

            {/* Chat 9 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto6} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Marco</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">Cooool</span>
            </div>

            {/* Chat 10 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto7} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Jay</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">Good</span>
            </div>

            {/* Chat 11 - with profile */}
            <div className="flex gap-2 w-[287px]">
              <div className="flex items-center gap-1">
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block max-w-none size-full" src={imgIosProfilePhoto8} />
                </div>
                <span className="font-sf-pro-text font-semibold text-[rgba(255,255,255,0.55)] text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.07px] whitespace-nowrap">Mina</span>
              </div>
              <span className="font-sf-pro-text text-white text-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] tracking-[-0.065px] flex-1">Hi!</span>
            </div>
          </div>

          {/* Announcement Banner with mask - at bottom */}
          <div
            className="absolute h-[32px] left-[20px] top-[172px] w-[287px]"
            style={{
              maskImage: `url('${imgAnnouncement}')`,
              maskSize: '307px 196px',
              maskPosition: '-20px -164px',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: `url('${imgAnnouncement}')`,
              WebkitMaskSize: '307px 196px',
              WebkitMaskPosition: '-20px -164px',
              WebkitMaskRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-[#2a2a2a] border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[8px] opacity-80" />
            <div className="absolute flex items-center px-[10px] gap-[7px] inset-0">
              <div className="relative shrink-0 size-[14px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                <img alt="" className="block max-w-none size-full" src={imgChatElementBadgeGlpDialogBell} />
              </div>
              <p className="font-sf-pro-text text-white text-[12px] leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap w-[229px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>

        {/* Banner Area - NewJeans */}
        <div className="absolute bottom-[104px] left-5 right-5">
          {/* Banner - NewJeans */}
          <div className="h-[60px] w-full bg-[rgba(42,42,42,0.8)] border-[0.5px] border-[rgba(255,255,255,0.05)] rounded-[8px] flex items-center px-3 gap-[14px]">
            <div className="flex items-center gap-[9px] flex-1">
              <div className="relative shrink-0 size-[38px] overflow-hidden rounded-[4px]">
                <img
                  alt=""
                  className="absolute w-[124.89%] h-[131.58%] left-[-9.81%] top-[-15.79%] object-cover"
                  src={imgGeminiGeneratedImage}
                />
              </div>
              <div className="flex flex-col justify-center text-[12px] text-shadow-[0_0_0.5px_rgba(0,0,0,0.25)] tracking-[0.06px]">
                <p className="font-sf-pro-text font-bold text-white leading-[16px] w-[236px]">
                  [MMA2023] NewJeans - Ditto
                </p>
                <p className="font-sf-pro-text text-[rgba(255,255,255,0.8)] leading-[16px] w-[236px]">
                  #CoolWithYou #GetUp #ASAP #MMA23
                </p>
              </div>
            </div>
            <div className="relative shrink-0 size-[12px]">
              <img alt="" className="absolute inset-[8.18%_14.23%_8.18%_2.13%] max-w-none" src={imgNavigatingIconButton} />
            </div>
          </div>
        </div>

        {/* Bottom Input - @Component / 7. Bottom / 5btn */}
        <div className="absolute bottom-[34px] left-0 right-0 h-[70px] px-5 flex items-center gap-1">
          <div className="flex-1 h-11 bg-white/10 border border-white/[0.04] rounded-lg px-4 py-3.5 flex items-center">
            <span className="font-sf-pro-text text-[#c8c8c8] text-[14px]">Enter a message</span>
          </div>
          <div className="w-11 h-11 bg-white/10 border border-white/[0.04] rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M10 6V14M6 10H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Home Indicator - 006 Home Indicator / Dark / Vertical */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[34px] flex items-end justify-center pb-2">
          <div className="w-[134px] h-[5px] bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}
