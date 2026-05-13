# Claude Code 1시간 세미나 — 초급자용

> **비개발자도 1시간 안에 AI 동료와 일하기**
> PM·기획자·학생을 위한 Claude Code 입문 자료

---

## 누구를 위한 자료인가

- **PM/기획자**: 매일 회의록·요구사항·CSV 정리에 시간 쓰는 분
- **학생/부트캠프 수강생**: 코딩은 시작했지만 AI 도구는 처음인 분
- **비개발자**: ChatGPT는 쓰지만 "복붙"에서 못 벗어나는 분

상급자(시니어 개발자·임베디드 엔지니어)는 원본 자료를 권장합니다:
[jhl-labs/claude-code-1hour](https://jhl-labs.github.io/claude-code-1hour/)

## 1시간 후 무엇이 가능해지나

1. Claude Code가 무엇인지 자기 문장으로 설명
2. 자기 노트북에 설치
3. 첫 프롬프트 시도 ("내 폴더에 README 만들어줘")
4. AI에게 "맥락 주는 법" 이해

## 빠른 시작

```bash
# 1) 설치 (Node.js 필요)
npm install -g @anthropic-ai/claude-code

# 2) 로그인
claude login

# 3) 폴더에 들어가서 실행
cd ~/my-folder
claude
```

처음이라면 → [핸드아웃](handout/cheatsheet.md)부터

## 자료 구조

```
.
├── slides/        # Slidev 슬라이드 (라이브 세미나용)
├── demos/         # 라이브 데모 자산 (회의록·CSV 정리)
├── handout/       # 청중 배포용 핸드아웃
└── docs/          # BKIT 설계 문서 (Plan/Design)
```

## 배포

GitHub Pages 자동 배포 (구성 예정).
라이브 슬라이드 URL: `https://<user>.github.io/claude-code-1hour-beginner/`

## 라이선스

MIT — 자유롭게 fork해서 우리 회사·우리 팀용으로 수정하세요.

## 크레딧

- 원본 영감: [jhl-labs/claude-code-1hour](https://jhl-labs.github.io/claude-code-1hour/) (상급자용)
- 설계 방법론: [BKIT Vibecoding Kit](https://github.com/) (PDCA 기반)
