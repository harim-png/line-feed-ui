import { useState } from 'react';
import LiveUnitAnimated from '../../components/LiveUnitAnimated';
import LiveDetailViewer from '../../components/LiveDetailViewer';
import LiveConsentModal from '../../components/LiveConsentModal';

/**
 * 팀원 1 - 인터랙션 테스트 페이지
 *
 * 여기서 자유롭게 인터랙션을 개발하고 테스트하세요!
 * - Live Unit 클릭 이벤트
 * - Detail Viewer 열기/닫기
 * - Modal 상태 관리
 * 등등...
 */
export default function TestMember1() {
  const [showDetailViewer, setShowDetailViewer] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);

  const handleLiveUnitClick = () => {
    console.log('Live Unit clicked!');
    // 여기에 원하는 인터랙션 로직을 추가하세요
    setShowDetailViewer(true);
  };

  const handleCloseDetailViewer = () => {
    console.log('Detail Viewer closed!');
    setShowDetailViewer(false);
    setShowConsentModal(false);
  };

  const handleCloseModal = () => {
    console.log('Modal closed!');
    setShowConsentModal(false);
  };

  const handleAgree = () => {
    console.log('User agreed!');
    setShowConsentModal(false);
  };

  return (
    <div className="bg-white relative size-full overflow-hidden">
      {/* 테스트용 안내 */}
      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-50">
        Member 1 Test
      </div>

      {/* 여기에 UI 컴포넌트를 배치하세요 */}
      <div className="absolute top-[100px] left-0 w-full">
        <LiveUnitAnimated onClick={handleLiveUnitClick} />
      </div>

      {/* Detail Viewer */}
      {showDetailViewer && (
        <LiveDetailViewer
          isOpen={showDetailViewer}
          onClose={handleCloseDetailViewer}
          showConsent={showConsentModal}
          isClosing={false}
        />
      )}

      {/* Consent Modal */}
      {showConsentModal && (
        <LiveConsentModal
          isOpen={showConsentModal}
          onClose={handleCloseModal}
          onAgree={handleAgree}
        />
      )}

      {/* 테스트용 컨트롤 버튼들 */}
      <div className="absolute bottom-20 left-4 right-4 flex flex-col gap-2 z-50">
        <button
          onClick={() => setShowDetailViewer(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Open Detail Viewer
        </button>
        <button
          onClick={() => setShowConsentModal(true)}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Show Modal
        </button>
        <button
          onClick={() => {
            setShowDetailViewer(false);
            setShowConsentModal(false);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset All
        </button>
      </div>
    </div>
  );
}
