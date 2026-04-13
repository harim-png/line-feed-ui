import { useState } from 'react';
import LiveUnitAnimated from '../../components/LiveUnitAnimated';
import LiveDetailViewer from '../../components/LiveDetailViewer';
import LiveConsentModal from '../../components/LiveConsentModal';

/**
 * 팀원 2 - 인터랙션 테스트 페이지
 *
 * 여기서 자유롭게 인터랙션을 개발하고 테스트하세요!
 */
export default function TestMember2() {
  const [showDetailViewer, setShowDetailViewer] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);

  // 여기에 인터랙션 로직을 추가하세요
  const handleLiveUnitClick = () => {
    console.log('[Member 2] Live Unit clicked!');
    setShowDetailViewer(true);
  };

  const handleCloseDetailViewer = () => {
    console.log('[Member 2] Detail Viewer closed!');
    setShowDetailViewer(false);
    setShowConsentModal(false);
  };

  const handleCloseModal = () => {
    setShowConsentModal(false);
  };

  const handleAgree = () => {
    setShowConsentModal(false);
  };

  return (
    <div className="bg-white relative size-full overflow-hidden">
      {/* 테스트용 안내 */}
      <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded z-50">
        Member 2 Test
      </div>

      {/* 여기에 원하는 UI를 배치하세요 */}
      <div className="absolute top-[100px] left-0 w-full">
        <LiveUnitAnimated onClick={handleLiveUnitClick} />
      </div>

      {showDetailViewer && (
        <LiveDetailViewer
          isOpen={showDetailViewer}
          onClose={handleCloseDetailViewer}
          showConsent={showConsentModal}
          isClosing={false}
        />
      )}

      {showConsentModal && (
        <LiveConsentModal
          isOpen={showConsentModal}
          onClose={handleCloseModal}
          onAgree={handleAgree}
        />
      )}

      {/* 테스트용 컨트롤 */}
      <div className="absolute bottom-20 left-4 right-4 flex flex-col gap-2 z-50">
        <button
          onClick={() => setShowDetailViewer(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Open Detail Viewer
        </button>
        <button
          onClick={() => setShowConsentModal(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Show Modal
        </button>
        <button
          onClick={() => {
            setShowDetailViewer(false);
            setShowConsentModal(false);
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
