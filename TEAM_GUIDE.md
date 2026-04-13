# 팀 협업 가이드 🚀

## 프로젝트 구조

```
line-feed-ui/
├── src/
│   ├── components/          # 완성된 UI 컴포넌트 (건드리지 마세요!)
│   │   ├── LiveUnitAnimated.jsx
│   │   ├── LiveDetailViewer.jsx
│   │   └── LiveConsentModal.jsx
│   │
│   ├── pages/
│   │   ├── MainPage.jsx     # 메인 통합 페이지
│   │   └── test/            # 👈 여기서 각자 작업!
│   │       ├── TestMember1.jsx
│   │       ├── TestMember2.jsx
│   │       └── TestMember3.jsx
│   │
│   └── App.jsx              # 라우팅 설정
```

## 시작하기

### 1. 개발 서버 실행
```bash
npm run dev
```

### 2. 접속 URL
- 메인 페이지: http://localhost:5173/
- 팀원 1 테스트: http://localhost:5173/test/member1
- 팀원 2 테스트: http://localhost:5173/test/member2
- 팀원 3 테스트: http://localhost:5173/test/member3

### 3. 좌측 하단 네비게이션
개발 모드에서는 화면 좌측 하단에 페이지 전환 버튼이 보입니다.
- **Main**: 완성된 통합 페이지
- **M1, M2, M3**: 각 팀원의 테스트 페이지

## 작업 방법

### ✅ 해야 할 것
1. **자신의 테스트 페이지에서만 작업**
   - Member 1 → `src/pages/test/TestMember1.jsx`
   - Member 2 → `src/pages/test/TestMember2.jsx`
   - Member 3 → `src/pages/test/TestMember3.jsx`

2. **인터랙션 로직 개발**
   ```jsx
   const handleLiveUnitClick = () => {
     // 여기에 원하는 인터랙션 추가
     console.log('Live Unit clicked!');
     setShowDetailViewer(true);
   };
   ```

3. **테스트 버튼 활용**
   - 각 페이지 하단에 테스트 버튼이 있습니다
   - "Open Detail Viewer", "Show Modal", "Reset" 등

### ❌ 하지 말아야 할 것
1. **`src/components/` 폴더 수정 금지!**
   - UI 컴포넌트는 한 사람이 관리합니다
   - 수정이 필요하면 담당자에게 요청하세요

2. **다른 팀원의 테스트 페이지 수정 금지**
   - 각자 할당된 파일만 수정하세요

3. **`App.jsx`, `MainPage.jsx` 수정 주의**
   - 라우팅 구조를 변경하지 마세요

## 코드 예시

### 상태 관리
```jsx
const [showDetailViewer, setShowDetailViewer] = useState(false);
const [showConsentModal, setShowConsentModal] = useState(false);
```

### 이벤트 핸들러
```jsx
const handleLiveUnitClick = () => {
  setShowDetailViewer(true);
};

const handleCloseDetailViewer = () => {
  setShowDetailViewer(false);
  setShowConsentModal(false);
};
```

### 컴포넌트 렌더링
```jsx
{showDetailViewer && (
  <LiveDetailViewer
    isOpen={showDetailViewer}
    onClose={handleCloseDetailViewer}
    showConsent={showConsentModal}
    isClosing={false}
  />
)}
```

## Git 작업 플로우

### 브랜치 전략
```bash
# 자신의 브랜치 생성
git checkout -b feature/member1-interaction
git checkout -b feature/member2-interaction
git checkout -b feature/member3-interaction

# 작업 후 커밋
git add src/pages/test/TestMember1.jsx
git commit -m "Add interaction logic for member1"

# 푸시
git push origin feature/member1-interaction
```

### Pull Request
1. 자신의 브랜치에서 작업
2. PR 생성 시 **자신의 파일만 변경되었는지 확인**
3. 충돌 없이 머지 가능

## 배포

### Vercel 배포
```bash
# 로컬에서 프로덕션 빌드 테스트
npm run build
npm run preview

# Vercel 배포 (권한 있는 경우)
vercel --prod
```

### 배포된 URL
- 메인: https://line-feed-ui.vercel.app/
- 테스트 페이지:
  - https://line-feed-ui.vercel.app/test/member1
  - https://line-feed-ui.vercel.app/test/member2
  - https://line-feed-ui.vercel.app/test/member3

## 문제 해결

### 개발 서버가 안 켜져요
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### 다른 팀원과 충돌이 났어요
```bash
# main 브랜치 최신화
git checkout main
git pull origin main

# 자신의 브랜치로 돌아와서 리베이스
git checkout feature/your-branch
git rebase main

# 충돌 해결 후
git add .
git rebase --continue
```

### 컴포넌트가 안 보여요
1. 브라우저 콘솔(F12) 확인
2. 네트워크 탭에서 404 에러 확인
3. 파일 경로가 올바른지 확인

## 팀원 연락처

- UI 담당: [이름]
- Member 1: [이름]
- Member 2: [이름]
- Member 3: [이름]

## 참고 자료

- [React 공식 문서](https://react.dev)
- [React Router 문서](https://reactrouter.com)
- [Tailwind CSS 문서](https://tailwindcss.com)
- [Vercel 문서](https://vercel.com/docs)
