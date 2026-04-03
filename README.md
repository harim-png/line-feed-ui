# LINE Feed UI - Animated Live Unit

Figma 디자인을 기반으로 구현한 LINE 소셜 피드의 라이브 유닛 UI입니다.

**🌐 라이브 데모:** https://line-feed-ui.vercel.app

## 🎯 주요 기능

### 1. 애니메이션 전환
- 커버 이미지 표시 (2초)
- 라이브 프리뷰 영상으로 페이드 전환 (1초 duration)
- 부드러운 opacity 애니메이션

### 2. 실시간 뷰어 카운트
- 초기 카운팅 애니메이션 (1.5초)
- 5초마다 자동 업데이트
- 10~50명씩 랜덤 증가
- 1씩 증가하는 카운팅 모션 (0.5초)
- 일본식 숫자 포맷 (쉼표 구분)

### 3. 버튼 어포던스 효과
- 라이브 전환 시 버튼 색상 변경 (회색 → 초록색)
- Blur fill 효과로 중앙에서 퍼지는 애니메이션
- 700ms duration의 부드러운 transition

### 4. 픽셀 퍼펙트 디자인
- LIVE 배지: 41x25px
- Add friend 버튼: 76x28px, 12px 폰트
- 보더: rgba(255, 255, 255, 0.04)
- SF Pro Display/Text, Hiragino Sans 폰트 적용
- Figma 디자인 사양 정확히 반영

## 🛠 기술 스택

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구 및 개발 서버
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Custom Fonts** - SF Pro, Hiragino Sans

## 📦 설치 및 실행

### 사전 요구사항
- Node.js 18 이상

### 설치
```bash
# 저장소 클론
git clone https://github.com/harim-png/line-feed-ui.git
cd line-feed-ui

# 의존성 설치
yarn install
# 또는
npm install
```

### 개발 서버 실행
```bash
yarn dev
# 또는
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 프로덕션 빌드
```bash
yarn build
# 또는
npm run build
```

## 🌐 배포

Vercel을 통해 자동 배포됩니다.

코드 수정 후 GitHub에 push하면 자동으로 재배포됩니다:
```bash
git add .
git commit -m "Update UI"
git push
```

## 📁 프로젝트 구조

```
line-feed-ui/
├── src/
│   ├── components/
│   │   ├── LineFeed.jsx          # 메인 피드 컴포넌트
│   │   └── LiveUnitAnimated.jsx  # 애니메이션 라이브 유닛
│   ├── App.jsx
│   ├── index.css                  # 글로벌 스타일 & 폰트
│   └── main.jsx
├── public/
│   ├── cover-image.png            # 커버 이미지
│   └── live-preview.mov           # 라이브 프리뷰 영상
├── tailwind.config.js             # Tailwind 설정
└── package.json
```

## 🎨 디자인 사양

### 폰트
- **SF Pro Display** - 타이틀 및 제목
- **SF Pro Text** - 본문 텍스트
- **Hiragino Sans** - 일본어 텍스트

### 색상
- 배경: `#000000`
- 텍스트: `#FFFFFF`
- LIVE 배지: `#FF375F`
- Add friend (비활성): 회색
- Add friend (활성): `#06C755` (초록)
- 보더: `rgba(255, 255, 255, 0.04)`

### 애니메이션 타이밍
- 커버 → 라이브 전환: 2초 대기 + 1초 페이드
- 뷰어 카운트 업데이트: 5초 간격
- 카운팅 모션: 0.5초
- 버튼 색상 전환: 0.7초

## 🔧 커스터마이징

### 뷰어 카운트 설정
`LiveUnitAnimated.jsx`에서 수정:
```javascript
// 업데이트 간격 (밀리초)
setInterval(() => { ... }, 5000);  // 5초

// 증가 범위
const increase = Math.floor(Math.random() * 40) + 10; // 10~50
```

### 애니메이션 시간 조정
```javascript
// 라이브 전환 대기 시간
setTimeout(() => { setShowLive(true); }, 2000); // 2초

// 페이드 duration (Tailwind)
transition-opacity duration-1000  // 1초
```

## 📝 구현 과정

1. **Figma 디자인 분석** - 디자인 사양 추출 및 컴포넌트 구조 설계
2. **프로젝트 셋업** - React + Vite + Tailwind CSS 초기 설정
3. **정적 UI 구현** - LineFeed 컴포넌트로 기본 레이아웃 구성
4. **애니메이션 로직** - LiveUnitAnimated 컴포넌트로 동적 기능 추가
5. **폰트 통합** - SF Pro, Hiragino Sans 커스텀 폰트 적용
6. **픽셀 퍼펙트** - 모든 사이즈와 간격을 Figma와 정확히 맞춤
7. **카운팅 시스템** - 실시간 뷰어 수 업데이트 및 애니메이션
8. **어포던스 효과** - 버튼 blur fill 효과 구현
9. **버전 관리** - GitHub 저장소 설정 및 코드 관리
10. **배포** - Vercel을 통한 프로덕션 배포

## 🐛 주요 해결 과제

- **보더 투명도 이슈** - Tailwind 클래스 대신 인라인 스타일로 해결
- **폰트 구문 오류** - Figma 문법을 Tailwind 클래스로 변환
- **회사 내부 NPM 레지스트리** - `.npmrc`로 공개 registry 설정
- **숫자 애니메이션 최적화** - 불필요한 모션 제거, 1씩 증가하는 자연스러운 카운팅

## 디자인 출처

Figma: https://www.figma.com/design/5dq1rFAfclGMZsma9Y383U/Cursor-Test?node-id=0-3057

## 👤 제작

**Claude Code** (AI Pair Programmer)와 함께 제작되었습니다.
