---
theme: seriph
title: Claude Code 1시간 — 초급자용
info: |
  ## Claude Code 1시간 세미나 (초급자용)

  비개발자·PM·기획자·학생을 위한 입문 자료.

  원본 영감: [jhl-labs/claude-code-1hour](https://jhl-labs.github.io/claude-code-1hour/)

  MIT License.
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Pretendard, Noto Sans KR'
  mono: 'JetBrains Mono'
---

# Claude Code 1시간

## 초급자용 — 비개발자도 AI 동료와 일하기

<div class="pt-12">
  <span class="text-xl opacity-75">PM · 기획자 · 학생을 위한 입문 자료</span>
</div>

<div class="abs-br m-6 text-sm opacity-50">
  세미나용 슬라이드 · 60분 + Q&A 10분
</div>

---

# 오늘 1시간 후 가능해지는 것

<v-clicks>

- ✅ Claude Code가 **무엇인지** 자기 문장으로 설명
- ✅ 내 노트북에 **설치** 가능
- ✅ 첫 **프롬프트** 시도 ("내 폴더에 README 만들어줘")
- ✅ AI에게 **맥락 주는 법** 이해

</v-clicks>

<v-click>

<div class="mt-12 text-center text-2xl text-amber-500">
복붙이 아니라 위임 — 그게 핵심입니다
</div>

</v-click>

---

# 시간 배분

<div class="grid grid-cols-2 gap-4 mt-8">

<div>

| 구간 | 시간 | 내용 |
|---|---|---|
| §1 | 5분 | Claude Code란? |
| §2 | 15분 | 첫 시도 (라이브) |
| §3 데모 1 | 12분 | 회의록 정리 |
| §3 데모 2 | 13분 | 데이터 정리 |
| §4 | 5분 | 누가 좋아질까 |
| §5 | 10분 | 시작하기 |
| Q&A | 10분 | 자유 질문 |

</div>

<div class="text-sm opacity-75">

**관전 포인트 3가지**

1. AI가 **파일을 직접 읽는다**
2. AI가 **파일을 직접 고친다**
3. **검토는 사람의 몫**

</div>

</div>

---
layout: section
---

# §1 — Claude Code란?

5분

---

# 한 줄 정의

<div class="text-3xl mt-16 text-center font-bold text-blue-400">

내 컴퓨터의 파일을<br/>
직접 읽고 고쳐주는<br/>
**AI 동료**

</div>

---

# ChatGPT와 무엇이 다른가

<div class="mt-8">

|  | ChatGPT (웹) | Claude Code (터미널) |
|---|---|---|
| 어디서 답하나 | 웹 브라우저 | **내 노트북 폴더 안** |
| 내 파일을 보나? | ❌ (복붙 필요) | ✅ **직접 읽음** |
| 내 파일을 고치나? | ❌ (복붙 필요) | ✅ **직접 고침** |
| 명령 실행? | ❌ | ✅ (빌드·테스트·git) |
| 결과물 | 텍스트 답변 | **파일·실행 결과** |

</div>

<v-click>

<div class="mt-8 text-xl text-center text-amber-500">
"복붙"이 사라집니다
</div>

</v-click>

---
layout: section
---

# §2 — 첫 시도

15분 (라이브)

---

# 이제 강사가 라이브로 보여드립니다

<div class="text-lg mt-8">

1. 빈 폴더에서 `claude` 실행
2. 첫 프롬프트:
   > "이 폴더에 자기소개 markdown 파일 만들어줘.<br/>
   > 이름은 OOO, 직업은 OOO"

3. Claude가 `about.md`를 만드는 화면
4. "이모지 추가" "직업 수정" — 대화로 수정
5. 텍스트 에디터로 결과 확인

</div>

<v-click>

<div class="mt-8 text-xl text-amber-500 text-center">
같이 따라하실 분 → 옆 사람과 페어링
</div>

</v-click>

---

# 같이 따라하기 — 설치

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### macOS / Linux
```bash
npm install -g @anthropic-ai/claude-code
claude login
```

### Windows (PowerShell)
```powershell
npm install -g @anthropic-ai/claude-code
claude login
```

</div>

<div>

### Node.js 없으면?
1. [nodejs.org](https://nodejs.org) 접속
2. **LTS** 버전 다운로드
3. 설치 후 위 명령 다시

### 확인
```bash
node -v
claude --version
```

</div>

</div>

---

# 같이 따라하기 — 첫 실행

```bash {1|2|3|all}
mkdir ~/claude-test     # 1. 빈 폴더 만들기
cd ~/claude-test        # 2. 그 폴더로 이동
claude                  # 3. Claude 실행
```

<v-click>

프롬프트가 뜨면 입력:

> 이 폴더에 hello.md 파일 만들어줘.<br/>
> 인사말 한 줄, 이모지 포함.

</v-click>

<v-click>

<div class="mt-6">

Claude가 일하는 과정:
1. `Write(file_path="hello.md")` ← 도구 호출
2. 파일 생성됨
3. "만들었습니다 👋" 응답

</div>

</v-click>

---

# Claude 종료·관리

<div class="mt-8">

| 행동 | 명령 |
|---|---|
| 종료 | `exit` 또는 `Ctrl+C` |
| 대화 초기화 | `/clear` |
| 도움말 | `/help` |
| 권한 관리 | `/permissions` |
| 큰 변경 미리보기 | `Shift+Tab` (Plan mode) |
| 자동완성 | `Tab` |

</div>

<v-click>

<div class="mt-8 text-amber-500">
💡 처음엔 `/help`와 `/clear`만 알아도 충분합니다
</div>

</v-click>

---
layout: section
---

# §3 — 라이브 데모 2종

25분

---

# 데모 1 — 회의록 정리 (12분)

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

### 입력 (`before.txt`)
```text
2026-05-13 화 PM 2시 분기 기획 회의
참석: 김지원, 박민준, 이수아

- 검색 개선이 1번 (CS 30%)
- 결제 리팩토링 시급 (장애 2건)
- 일단 검색 먼저, 결제는 6월
- 지원: 검색 PRD 5/20까지
- 다음: 5/27 같은 시간
```

</div>

<div>

### 프롬프트
> 이 폴더의 before.txt는 회의 메모야.<br/>
> after.md로 회의록 정리해줘.<br/>
> 구조:<br/>
> - 회의 정보<br/>
> - 핵심 논의<br/>
> - 결정사항 (표)<br/>
> - 액션 (담당·기한 표)<br/>
> - 다음 회의

</div>

</div>

---

# 데모 1 — 출력 (`after.md`)

```markdown
# 분기 기획 회의
- **일시**: 2026-05-13 (화) 14:00
- **참석**: 김지원, 박민준, 이수아

## 결정사항
| # | 결정 | 비고 |
|---|------|------|
| 1 | 검색 개선 우선 (5월말 완료) | CS 30% |
| 2 | 결제 리팩토링 6월 이후 | 후속 분석 진행 |

## 액션 아이템
| 담당 | 작업 | 기한 |
|---|---|---|
| 김지원 | 검색 PRD 작성 | 2026-05-20 |
| 박민준 | 결제 모듈 후속 분석 | 별도 협의 |
```

<v-click>

<div class="mt-4 text-amber-500 text-center text-xl">
한 시간 → 1분. 게다가 형식까지 맞춰서.
</div>

</v-click>

---

# 데모 1 — ChatGPT랑 뭐가 달라요?

<div class="mt-8 text-lg">

### ChatGPT
1. 메모를 채팅창에 **복사**
2. 답변을 **복사**
3. 텍스트 에디터에 **붙여넣기**
4. 파일 저장

### Claude Code
1. 폴더에서 `claude`
2. "이 폴더의 before.txt를 정리해줘"
3. **끝** (after.md가 폴더에 생김)

</div>

<v-click>

<div class="mt-8 text-amber-500 text-center text-xl">
"복붙 3단계"가 사라집니다
</div>

</v-click>

---

# 데모 2 — 데이터 정리 (13분)

### 입력 (`messy.csv`) — 엉망인 명단

```csv
name,email,amount
홍길동,hong@example.com,15000
김철수, kimcs @example.com ,
이영희,younghee@exampl.com,25000
홍길동,hong@example.com,15000
박민수,minsoo@example,33000
,empty@example.com,12000
정수아,sua@example.com,abc
```

<v-click>

<div class="mt-4 text-sm opacity-75">

❓ 사람 눈으로 1분 안에 모든 오류를 찾을 수 있나요?

</div>

</v-click>

---

# 데모 2 — 2단계 프롬프트

### 1단계: 진단
> 이 폴더의 messy.csv를 읽고<br/>
> 각 행의 문제점을 표로 정리해줘.<br/>
> 확실하지 않은 건 "확인 필요" 표시.

<v-click>

### 2단계: 정리
> 발견한 문제를 정리해서 clean.csv와 changes.md 만들어줘.<br/>
> 원칙:<br/>
> - 공백·중복은 자동 처리<br/>
> - 도메인 오타는 보수적 수정 + "확인 필요" 표시<br/>
> - **금전 데이터는 자동 추측 절대 금지**<br/>
> - 처리 내역 changes.md에 표로

</v-click>

<v-click>

<div class="mt-6 text-amber-500 text-center">
2단계로 나누는 게 핵심 — 검토 가능
</div>

</v-click>

---

# 데모 2 — 출력

<div class="grid grid-cols-2 gap-4">

<div>

### `clean.csv`
```csv
name,email,amount
홍길동,hong@example.com,15000
김철수,kimcs@example.com,
이영희,younghee@example.com,25000
최영수,young@example.com,18000
한지민,jimin@example.com,22000
```

</div>

<div>

### `changes.md` 발췌
| 줄 | 처리 | 비고 |
|---|---|---|
| 3 | 공백 제거 | amount 빈칸 유지 |
| 4 | 도메인 수정 | **확인 필요** |
| 5,10 | 중복 제거 | |
| 6 | 제거 | TLD 추측 위험 |
| 7 | 제거 | name 빈칸 |
| 8 | 제거 | amount 'abc' |

</div>

</div>

<v-click>

<div class="mt-4 text-amber-500 text-center">
AI가 자기 한계를 알려줍니다 — 이게 좋은 프롬프트의 결과
</div>

</v-click>

---

# 좋은 프롬프트 5가지 원칙

<div class="text-lg mt-6">

<v-clicks>

1. **어디를 보라고 지목** — "이 폴더의 OO 파일"
2. **결과 형식 지정** — "markdown 표로" / "CSV로"
3. **가드레일 명시** — "OO 절대 추측 금지"
4. **한계 인정 유도** — "확실하지 않으면 '확인 필요' 표시"
5. **언어 고정** — "한국어로 답변"

</v-clicks>

</div>

<v-click>

<div class="mt-8 text-center text-amber-500">
프롬프트 = AI에게 주는 작업 명세서
</div>

</v-click>

---
layout: section
---

# §4 — 누가 가장 빨리 좋아질까

5분

---

# 역할별 활용

<div class="mt-8 text-lg">

### 📋 PM·기획자
회의록 · 요구사항 정리 · 주간 리포트 · 이메일 초안

### 🎓 학생·신입
강의노트 → 시험 요약 · 자기소개서 · 과제 마무리

### 💻 부트캠프 수강생
막힐 때 옆에 멘토 · 오답 빨리 알아챔 · 코드 설명

### 📊 분석 직군
CSV·로그 정리 · 보고서 자동 생성 · 데이터 검증

</div>

---

# 솔직한 한계

<div class="text-lg mt-6">

### 안 변하는 것
- ❌ AI는 가끔 **그럴듯한 거짓말** (환각)
- ❌ 중요한 결정은 **항상 사람**
- ❌ 회사 보안은 **별도 검토**
- ❌ 같은 질문에 답이 100% 같지 않음 (비결정성)

</div>

<v-click>

<div class="mt-8 text-center text-2xl text-amber-500">
"검토 시작점"을 0% → 70%로 올려줄 뿐
</div>

</v-click>

---
layout: section
---

# §5 — 시작하기

10분

---

# 오늘 끝나고 30분

<div class="text-lg mt-4">

### Step 1 (5분) — 설치
```bash
node -v                                # 18 이상 확인
npm install -g @anthropic-ai/claude-code
claude login
```

### Step 2 (5분) — 첫 실행
```bash
mkdir ~/claude-test && cd ~/claude-test
claude
```
> "이 폴더에 hello.md 만들어줘"

### Step 3 (20분) — 진짜 작업 1개
자기 일에서 **가장 귀찮은 텍스트 작업** 1개 시켜보기

</div>

---

# 내일까지 — CLAUDE.md 5줄

폴더에 `CLAUDE.md` 파일 만들고:

```markdown
# 내 작업 환경

- 직업: PM
- 자주 만드는 결과물: 회의록, 주간 리포트
- 좋아하는 톤: 간결, 표 위주
- 한국어로 답변
- 결정사항·액션 항상 분리
```

<v-click>

<div class="mt-6 text-amber-500">
✨ 이 파일이 있으면 매 대화마다 자동 적용됩니다
</div>

</v-click>

<v-click>

<div class="mt-2 text-sm opacity-75">
👀 신규 입사자에게 회사 규칙 한 번 가르치는 것과 같음
</div>

</v-click>

---

# 1주일 안 — 누군가에게 시연

<div class="text-lg mt-8">

<v-clicks>

- 옆 자리 동료에게 **5분 시연**
- **같이 따라하게** 하기
- 누군가에게 설명하면서 **본인이 더 잘 알게** 됩니다
- 우리 팀에 맞는 **CLAUDE.md** 만들기 → 공유

</v-clicks>

</div>

<v-click>

<div class="mt-8 text-center text-amber-500 text-xl">
혼자 쓰면 도구, 같이 쓰면 문화
</div>

</v-click>

---

# 자주 막히는 곳

| 증상 | 해결 |
|---|---|
| `claude: command not found` | Node.js 설치 확인 (`node -v`) |
| 답이 영어로 옴 | `CLAUDE.md`에 "한국어로 답변" 한 줄 |
| 파일 못 만듦 | `/permissions`에서 Write 허용 |
| 답이 엉뚱함 | `/clear` 후 다시 |
| 컨텍스트 너무 김 | 작업 쪼개기 + `/clear` |
| 비용 걱정 | Anthropic 콘솔에서 월 한도 설정 |

---

# 보안 체크리스트

<div class="text-lg mt-6">

<v-clicks>

- ❌ 비밀번호·API 키 **절대 입력 금지**
- ❌ 신용카드 정보 **절대 입력 금지**
- ❌ 회사 NDA 코드 **사내 정책 확인 전 금지**
- ✅ 첫 연습은 **가상 데이터로**
- ✅ 회사 도입 시 **엔터프라이즈 플랜** (학습 미사용 + 감사 로그)

</v-clicks>

</div>

---
layout: section
---

# Q&A

10분

---

# 자주 나오는 질문

<div class="text-lg mt-4">

<v-clicks>

1. **돈 들어요?** → 첫 사용 무료. 본격 사용은 월 USD 단위
2. **ChatGPT가 더 싸지 않아요?** → 파일 직접 처리 = 시간 시급으로 환산하면 쌈
3. **회사 자료 보안?** → 엔터프라이즈 플랜은 학습 미사용
4. **AI가 틀리면 어떻게 알아요?** → "확인 필요" 표시 + 사람 검토
5. **코딩 모르는데 진짜 돼요?** → 데모 1·2가 답
6. **다음 단계는?** → CLAUDE.md → Skill → MCP 순서

</v-clicks>

</div>

<v-click>

<div class="mt-6 text-center text-amber-500">
🙋 다른 질문 환영합니다
</div>

</v-click>

---
layout: center
class: text-center
---

# 핵심 메시지

<div class="text-3xl mt-12 text-amber-400">

복붙이 아니라 **위임**

</div>

<div class="text-xl mt-8 opacity-75">

오늘 끝나고 30분 안에<br/>
자기 노트북에서 1개만 시켜보세요

</div>

<div class="text-sm mt-16 opacity-50">
자료: github.com/.../claude-code-1hour-beginner · MIT
</div>

---
layout: end
---

# 감사합니다

[자료 GitHub](https://github.com/) · [상급자 자료](https://jhl-labs.github.io/claude-code-1hour/) · MIT License
