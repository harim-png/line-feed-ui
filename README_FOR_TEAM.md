# LINE Feed UI - 인터랙션 테스트 프로젝트 🎨

디자이너분들을 위한 초간단 가이드입니다!

## 🚀 시작하기 (3분 완료)

### 1단계: 프로젝트 복사하기
1. GitHub 레포 페이지로 이동: https://github.com/harim-png/line-feed-ui
2. 초록색 **"Use this template"** 버튼 클릭
3. Repository name 입력 (예: `line-feed-ui-jiwon`)
4. **Create repository** 클릭

### 2단계: Claude Code에서 열기
Claude Code(VS Code)를 열고, 채팅창에 이렇게 입력하세요:

```
https://github.com/[내레포주소] 클론하고 설치하고 dev 서버 실행해줘
```

예시:
```
https://github.com/jiwon/line-feed-ui-jiwon 클론하고 설치하고 dev 서버 실행해줘
```

**끝!** 🎉 브라우저가 자동으로 열립니다.

---

## 📱 테스트 페이지 확인하기

브라우저에서 자동으로 열리는 주소:
- http://localhost:5173/

**좌측 하단 버튼으로 페이지 이동:**
- **Main**: 완성된 통합 화면
- **M1, M2, M3**: 각자 테스트 페이지

또는 URL 직접 입력:
- http://localhost:5173/test/member1
- http://localhost:5173/test/member2
- http://localhost:5173/test/member3

---

## 🎯 작업 방법

### 내가 수정할 파일 (1개만!)

팀원 1이라면:
```
src/pages/test/TestMember1.jsx
```

팀원 2라면:
```
src/pages/test/TestMember2.jsx
```

팀원 3이라면:
```
src/pages/test/TestMember3.jsx
```

### Claude Code에게 요청하기

**예시 1: 클릭 이벤트 추가**
```
TestMember1.jsx에서 Live Unit을 클릭하면 
3초 후에 Detail Viewer가 열리게 해줘
```

**예시 2: 애니메이션 추가**
```
Modal이 나타날 때 페이드인 효과 추가해줘
```

**예시 3: 버튼 추가**
```
화면 우측 상단에 "공유하기" 버튼 추가해줘
```

Claude Code가 자동으로 코드를 수정하고 브라우저가 새로고침됩니다!

---

## 🧪 테스트 버튼 사용하기

각 테스트 페이지 **하단**에 버튼들이 있어요:

- **Open Detail Viewer**: Detail Viewer 강제로 열기
- **Show Modal**: Modal 강제로 보기
- **Reset**: 모든 상태 초기화

이 버튼들로 원하는 상태를 바로 테스트할 수 있어요!

---

## ❌ 주의사항

### 절대 수정하지 마세요!
```
src/components/          ← UI 컴포넌트 (UI 담당자만)
src/App.jsx             ← 라우팅 설정
src/pages/MainPage.jsx  ← 메인 페이지
```

### 다른 팀원 파일도 수정 금지!
- Member 1 → TestMember1.jsx만
- Member 2 → TestMember2.jsx만  
- Member 3 → TestMember3.jsx만

---

## 🆘 문제 해결

### 화면이 안 떠요
Claude Code에게 말하세요:
```
dev 서버 재시작해줘
```

### 에러가 나요
Claude Code에게 에러 메시지를 보여주세요:
```
이 에러 고쳐줘: [에러 메시지 복사]
```

### 브라우저가 안 열려요
수동으로 열기: http://localhost:5173

---

## 💾 작업 저장하기

### 수시로 저장
Claude Code가 자동으로 파일을 저장하지만, 확실하게:
```
지금까지 작업한 내용 커밋해줘
```

### GitHub에 올리기
```
변경사항 커밋하고 푸시해줘
```

---

## 🎓 더 알아보기

### React 기초
- 버튼 클릭: `onClick={() => ...}`
- 상태 변경: `useState`
- 시간 지연: `setTimeout`

### 예시 코드
```jsx
// 3초 후 실행
setTimeout(() => {
  setShowDetailViewer(true);
}, 3000);

// 버튼 클릭
<button onClick={() => alert('클릭!')}>
  클릭하세요
</button>
```

하지만 **Claude Code가 다 알아서 해줍니다!**
자연어로 요청하면 돼요 😊

---

## 📞 도움이 필요하면

- UI 담당자: [이름]
- 팀 슬랙: [채널]
- 이슈 등록: https://github.com/harim-png/line-feed-ui/issues

---

## ⚡️ 빠른 참고

| 하고 싶은 것 | Claude에게 말하기 |
|------------|----------------|
| 서버 시작 | `dev 서버 실행해줘` |
| 클릭 이벤트 | `버튼 클릭하면 ~하게 해줘` |
| 애니메이션 | `~할 때 페이드인 효과 추가해줘` |
| 시간 지연 | `3초 후에 ~하게 해줘` |
| 저장 | `작업 커밋해줘` |
| 업로드 | `GitHub에 푸시해줘` |

---

**Happy Coding! 🚀**
