---
theme: seriph
title: Claude Code 1시간 — 메모리 CS팀 사내 교육
info: |
  ## Claude Code 1시간 (메모리 CS팀용)

  복부인 with Opus 4.7 · 사내 직원 교육용

  원본 영감: [jhl-labs/claude-code-1hour](https://jhl-labs.github.io/claude-code-1hour/)

  MIT License (사내 교육용).
class: brand-cover text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Pretendard, Noto Sans KR, Inter'
  mono: 'JetBrains Mono'
---

<div class="absolute top-6 left-8 text-sm opacity-80">
복부인 with Opus 4.7
</div>

# Claude Code 1시간

## 메모리 반도체 CS팀 — 사내 기초 교육

<div class="text-xl opacity-80 mt-6">
내 PC에서 안전하게 시작하기
</div>

<div class="credit-bottom-right">
복부인 with Opus 4.7 · 60분 + Q&A 10분
</div>

---

# 오늘 1시간 후 가능해지는 것

<v-clicks>

- ✅ Claude Code가 사내 ChatGPT와 **어떻게 다른지** 설명
- ✅ 회사 보안 정책 안에서 **어디까지 OK인지** 분간
- ✅ 자기 사내 PC에 **설치 시도**
- ✅ FA 회의록 + 고객 회신 메일을 AI에게 **위임 시도**
- ✅ Day 2 ("나만의 Agent 만들기") **신청 의향 확보**

</v-clicks>

<div class="key-message mt-12">
복붙이 아니라 위임
</div>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 시간 배분

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

| § | 시간 | 내용 |
|---|---|---|
| §0 | 1분 | 시작 |
| §1 | 5분 | Claude Code란? + 보안 전제 |
| §2 | 12분 | 첫 시도 (라이브) |
| §3 데모 1 | 11분 | FA 회의록 요약 |
| §3 데모 2 | 11분 | 고객 회신 메일 |
| §3 데모 3 | 2분 | 불량 대쉬보드 (미리보기) |
| §3 데모 4 | 2분 | VOC 대쉬보드 (미리보기) |
| §4 | 5분 | 누가 좋아질까 |
| §5 | 11분 | 시작하기 + Day 2 |
| Q&A | 10분 | |

</div>

<div class="text-sm opacity-75">

**오늘 관전 포인트 3가지**

1. AI가 **파일을 직접 처리한다**
2. **회사 보안 정책 안에서** 사용 가능
3. **검토는 사람의 몫** — AI는 70%까지

</div>

</div>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---
layout: section
class: brand-cover
---

# §1 — Claude Code란?

5분 · 사내 ChatGPT와 다른 점 + 보안 전제

---

# 한 줄 정의

<div class="key-message mt-16">
내 사내 PC의 폴더를<br/>
직접 읽고 고쳐주는<br/>
<strong>AI 동료</strong>
</div>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 사내 ChatGPT와 다른 점

<div class="mt-6">

| | 사내 ChatGPT | Claude Code |
|---|---|---|
| 어디서 답함 | 웹 채팅창 | **터미널 (내 폴더 안)** |
| 내 파일을 봄? | ❌ (복붙) | ✅ **직접 읽음** |
| 내 파일을 고침? | ❌ (복붙) | ✅ **직접 저장** |
| 결과물 | 텍스트 답변 | **파일 (.md, .csv, .xlsx)** |
| 명령 실행? | ❌ | ✅ |

</div>

<v-click>

<div class="key-message mt-6">
"복붙 3단계"가 사라집니다
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 🛡️ 우리 회사에서 어디까지 OK?

<div class="text-base mt-2 grid grid-cols-1 gap-2">

<div class="security-ok">
<strong>✅ 가능</strong> — 가공된 가상 데이터, 외부 공유 가능한 내부 문서, 영문 메일 초안(검토 후 발송)
</div>

<div class="security-warn">
<strong>⚠️ 사내 가이드 확인</strong> — 고객 lot/wafer ID, 사내 미공개 spec, 신규 제품 일정
</div>

<div class="security-forbid">
<strong>❌ 절대 금지</strong> — Datasheet 원본 그대로 업로드(NDA 위반), 미공개 spec·수율·재무, 비밀번호·API 키
</div>

</div>

<div class="text-center mt-4 text-amber-600 font-bold">
📋 최우선: 사내 보안 가이드 [링크 placeholder]
</div>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 오늘 시연은 모두 가상 데이터

<div class="text-lg mt-8">

<v-clicks>

- 가상 lot: `ABC-2025-K42` (실 lot 패턴 아님)
- 가상 고객: `Customer X / Y / Z` (실 고객명 아님)
- 가상 수치: 5e-7, 1e-8 등 예시
- 가상 영문 메일: 실 고객 메일에서 따온 것 아님
- 가상 부서명·담당자명

</v-clicks>

</div>

<v-click>

<div class="security-warn mt-6">
<strong>⚠️ 청중 주의</strong>: 자기 업무 시도 시 <strong>실 lot ID·고객명·미공개 spec 절대 입력 금지</strong>. 의심스러우면 사내 IT/보안팀 문의.
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---
layout: section
class: brand-cover
---

# §2 — 첫 시도

12분 · 라이브

---

# 강사가 라이브로 보여드립니다

<div class="text-lg mt-4">

1. 빈 폴더에서 `claude` 실행
2. 첫 프롬프트:
   > 이 폴더에 team_intro.md 파일 만들어줘.<br/>
   > 우리 팀: 메모리 CS팀.<br/>
   > 주요 업무: 고객 escalation 대응, FA 리포트 작성, VOC 분석.<br/>
   > 톤: 신입 환영용, 간결.

3. Claude가 `team_intro.md`를 만드는 화면
4. "이모지 추가" "FA 설명 1줄 더" — 대화로 수정
5. 텍스트 에디터로 결과 확인

</div>

<v-click>

<div class="text-center mt-4 text-lg" style="color: var(--brand-blue)">
같이 따라하실 분 → 옆 사람과 페어링
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 같이 따라하기 — 설치

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

### Windows (PowerShell)
```powershell
node -v   # 18+ 확인
npm install -g @anthropic-ai/claude-code
claude login
```

### macOS / Linux
```bash
node -v
npm install -g @anthropic-ai/claude-code
claude login
```

</div>

<div>

### Node.js 없으면?
- 사내 IT팀 설치 요청
- 권한 없으면 사내 가이드 따라

### 사내 프록시 / 방화벽
- npm config proxy 설정 (사내 가이드)
- Anthropic API 도메인 허용 확인

### 확인
```bash
claude --version
```

</div>

</div>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 같이 따라하기 — 첫 실행

```bash {1|2|3|all}
mkdir ~/cs-test         # 1. 빈 폴더 만들기
cd ~/cs-test            # 2. 그 폴더로 이동
claude                  # 3. Claude 실행
```

<v-click>

프롬프트가 뜨면 입력:

> 이 폴더에 hello.md 만들어줘.<br/>
> 메모리 CS팀 신입 환영 메시지 한 줄, 이모지 1개 포함.

</v-click>

<v-click>

<div class="mt-4 text-sm opacity-80">

Claude가 일하는 과정:
1. `Write(file_path="hello.md")` ← 도구 호출
2. 파일 생성됨
3. "만들었습니다 👋" 응답

</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# Claude 종료 · 관리

<div class="mt-6">

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

<div class="mt-6 text-center text-lg" style="color: var(--brand-blue)">
💡 처음엔 `/help`와 `/clear`만 알아도 충분
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---
layout: section
class: brand-cover
---

# §3 — 라이브 데모 4종

26분 · 메인 2 + 미리보기 2

---

# 데모 1 — FA 회의록 요약 (11분)

### 입력 (`before.txt`)
```text
2026-05-13 화 PM 4시 FA 회의
참석: 박과장(CS), 이주임(CS), 김선임(FA Lab), 정책임(품질)

- lot ABC-2025-K42 (DDR5 8Gb) retention 이슈
- 고객사 X에서 1000h 85C 후 BER 5e-7 보고
- datasheet spec: 1e-8 max
- FA 분석: WL #1024~1056 weak cell
- 원인: ECC 알고리즘 보정 한계 추정
- 임시: lot hold + 고객 회신 5/15까지
- 정식: ECC v2 6/1 fab 출하분부터
...
```

<div class="text-sm opacity-70 mt-2">→ 다음 슬라이드: 프롬프트</div>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 1 — 프롬프트

> 이 폴더의 before.txt는 FA 회의 메모야.<br/>
> after.md로 정리해줘. 구조:<br/>
> 1. 회의 정보<br/>
> 2. 핵심 이슈 (lot·spec·BER 표)<br/>
> 3. FA 분석 결과<br/>
> 4. 결정사항 (표)<br/>
> 5. 액션 (담당·작업·기한 표)<br/>
> 6. 고객사 X 1차 회신 포함 항목<br/>
> 7. 다음 회의
>
> 한국어. spec 수치 정확히 인용. 추측 금지.

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 1 — 출력 (`after.md` 발췌)

```markdown
## 핵심 이슈

| 항목 | 현황 | 비고 |
|---|---|---|
| Lot ID | ABC-2025-K42 | DDR5 8Gb |
| 보고 BER | 5e-7 | 1000h, 85°C |
| Spec | 1e-8 max | 초과 |
| 고객 영향 | Customer X Q2 양산 | 긴급도 高 |

## 액션 아이템
| 담당 | 작업 | 기한 |
|---|---|---|
| 박과장 | 고객사 X 1차 회신 메일 | 5/15 |
| 이주임 | 다른 die 추가 검증 | 5/20 |
| 김선임 | ECC v2 FA 리포트 | 5/25 |
```

<v-click>

<div class="key-message mt-4">
FA 회의록 매주 1시간 → 5분
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 1 — 변형 프롬프트

회의록이 있는 상태에서:

> 이 회의록 기반으로 고객사 X 1차 회신 메일 골격도 잡아줘.<br/>
> reply_skeleton.md로 저장. 영문, formal 톤.<br/>
> 단, 실제 회신은 데모 2에서 다룰 예정.

<v-click>

<div class="brand-quote mt-6">
"FA 회의록이 다음 데모(고객 회신)의 입력이 됩니다 — 자연스럽게 연결되죠."
</div>

</v-click>

<v-click>

<div class="text-center mt-4 text-amber-600">
⚠️ AI 결과는 반드시 검토 — 특히 lot ID·spec 수치
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 2 — 고객 회신 메일 자동화 (11분)

### 입력 3종

<div class="text-base mt-4">

| 파일 | 내용 |
|---|---|
| `customer_email.txt` | 고객사 X가 보낸 영문 escalation |
| `fa_summary.md` | 사내 FA 요약 (데모 1 산출물 활용) |
| `customer_x_tone.md` | Customer X 톤 매뉴얼 (사내 자료) |

</div>

<v-click>

<div class="brand-quote mt-6">
3가지를 합쳐서 회신 작성 — 톤 매뉴얼의 가치
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 2 — 2단계 프롬프트

### 1단계: 분석
> 위 3 파일 읽고, 고객 4가지 질문에 답할 수 있는지 표로:<br/>
> 답변 가능 / 부분 가능 / 사내 확인 필요

<v-click>

### 2단계: 작성
> 영문 회신 reply.md 작성.<br/>
> 원칙: spec 정확 인용, 추측 표현(might/probably) 금지,<br/>
> 미확정은 "to be confirmed by [date]"<br/>
> tone 매뉴얼 엄격 준수, 250~350 단어, 4섹션 구조
>
> 한글 사내 공유용 요약도 reply_summary_kr.md로

</v-click>

<v-click>

<div class="text-center mt-4 text-amber-600">
가드레일 명시 = AI가 위험한 가정 안 함
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 2 — 출력 (`reply.md` 발췌)

```markdown
Subject: Re: [URGENT] Retention failure on lot ABC-2025-K42

Hi team,

Thank you for the detailed test report on lot ABC-2025-K42.
Here is our preliminary response. A more complete update will
follow by 5/20.

**1. Root cause (investigation in progress)**

Our FA team has confirmed weak-cell concentration in the WL
#1024–1056 region. Our current hypothesis is a limitation in
the ECC correction algorithm; we are currently investigating
with additional die-level sampling, to be completed by 5/20.
...
```

<v-click>

<div class="key-message mt-2 text-base">
매일 5통 회신 = 매일 1시간 절감
</div>

</v-click>

<v-click>

<div class="security-warn mt-2">
⚠️ <strong>절대 검토 없이 발송 금지</strong> — spec 수치 datasheet 원본 대조 + 시니어 검토 필수
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 2 — 한글 요약도 자동

`reply_summary_kr.md`:

```markdown
## 회신 요점

1. 원인 — ECC 한계 추정, 조사 중
2. 영향 lot — K42 확정, 인접 lot 5/20 결과 후
3. RMA — 5/27 사내 회의 결정 후
4. 장기 대응 — ECC v2 6/1 적용

## 발송 전 체크리스트
- [ ] Spec 수치 datasheet 대조
- [ ] "might/probably" 단어 제거 확인
- [ ] 시니어 검토 (필수)
- [ ] 발송 (5/15 전)
```

<v-click>

<div class="brand-quote mt-4">
영문 회신 + 한글 사내 공유용 = 한 번에
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 3 — 불량 지수 대쉬보드 (2분 미리보기)

### 입력 (`defects_3mo.csv`)

```csv
date,customer,lot_id,part_number,stress_condition,ber,sample_count,status
2026-02-03,Customer X,ABC-2025-J11,DDR5-8Gb,1000h@85C,3.2e-9,240,pass
2026-03-02,Customer X,ABC-2025-K05,DDR5-8Gb,1000h@85C,1.4e-8,240,fail
2026-04-12,Customer X,ABC-2025-K42,DDR5-8Gb,1000h@85C,5.0e-7,240,fail
...
```

3개월·28건 reliability test 결과

<v-click>

<div class="text-sm mt-2 opacity-80">

> defects_3mo.csv 읽고 dashboard.md 만들어줘.<br/>
> 고객사별 월별 BER 평균·spec 초과 lot·추세 코멘트 포함.

</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 3 — 출력 (`dashboard.md` 발췌)

<div class="text-sm">

| 고객사 | 2월 | 3월 | 4월 | 추세 |
|---|---|---|---|---|
| Customer X | 5.8e-9 | 1.5e-8 ⚠️ | **1.0e-7 🔴** | **악화** |
| Customer Y | 8.1e-9 | 9.0e-9 | 8.8e-9 | 안정 |
| Customer Z | 5.4e-9 | 6.2e-9 | 6.9e-9 | 안정 |

</div>

<div class="text-sm mt-4">

**Spec 초과 lot (Customer X 집중)**:
- K05 (1.4e-8) → K11 (1.8e-8) → K28 (2.2e-8) → **K42 (5.0e-7, 🔴 50×)**
- 원인: ECC 알고리즘 한계, 대응: ECC v2 6/1 적용

</div>

<v-click>

<div class="key-message mt-4 text-base">
Excel pivot 30분 → AI 1분<br/>
<span class="text-sm opacity-70">본격 자동화는 Day 2 (다음 슬라이드 §5에서)</span>
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 데모 4 — VOC 성향 대쉬보드 (2분 미리보기)

### 입력
`customer_emails_6mo/` — 가상 메일 60통 (3개 고객사 × 20통)

<v-click>

### 출력 발췌 — `voc_profile.md`

</v-click>

<v-clicks>

<div class="text-sm mt-2">

**Customer X** — Engineering, spec 정확성<br/>
Top 3: ① Datasheet 해석 (28%) ② Characterization (22%) ③ FA (18%)<br/>
응대: 24h 안에 spec 인용 정확히

**Customer Y** — Sourcing, 일정 민감<br/>
Top 3: ① Allocation (35%) ② Lead time (28%) ③ Pricing (15%)<br/>
응대: **당일 (COB 전)**, 옵션 1·2·3 제시

**Customer Z** — PM, 장기 파트너십<br/>
Top 3: ① 로드맵 (40%) ② 워크샵 (25%) ③ 피드백 (15%)<br/>
응대: 깊이 있게, 1주일 안

</div>

</v-clicks>

<v-click>

<div class="key-message mt-2 text-base">
신입이 바로 선배 수준 답장 — Day 2에서 자동 분류·매뉴얼 매칭
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---
layout: section
class: brand-cover
---

# §4 — 누가 가장 빨리 좋아질까

5분

---

# 역할별 임팩트

<div class="text-lg mt-4">

<v-clicks>

### 🔧 CS 시니어
매일 메일 5통 자동화 → 시간 1h/일 확보<br/>
→ 시니어의 역할: **분석·판단·고객 관계**에 투자

### 🌱 CS 주니어
영문 메일 부담 ↓, 선배 톤 학습 가속<br/>
→ "복붙으로 끝나던 일"이 사라지면서 본업에 집중

### 👔 CS 팀장
VOC·불량 대쉬보드로 분기 리뷰 자동화<br/>
→ 보고서 만들 시간 절약 → 의사결정에 투자

</v-clicks>

</div>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 솔직한 한계

<div class="text-lg mt-4">

<v-clicks>

- ❌ AI는 가끔 **그럴듯한 거짓말** (특히 수치)
- ❌ **Spec 인용은 반드시 검증** — datasheet 원본 대조
- ❌ **고객별 톤은 매뉴얼이 있어야** 효과 큼
- ❌ NDA·민감 데이터는 **절대 금지** (사내 가이드)
- ❌ 같은 질문에 답이 100% 같지 않음 (비결정성)

</v-clicks>

</div>

<v-click>

<div class="key-message mt-6">
검토 시작점 0% → 70%<br/>
<span class="text-sm opacity-70">검토 자체는 사람의 가치 — AI는 보조</span>
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---
layout: section
class: brand-cover
---

# §5 — 시작하기 + Day 2 예고

11분

---

# 오늘 끝나고 30분

<div class="text-base mt-4">

### Step 1 (5분) — 설치
사내 IT 가이드 확인 → 설치 권한 → `claude login`

### Step 2 (5분) — 첫 실행
```bash
mkdir ~/cs-test && cd ~/cs-test
claude
```
> "이 폴더에 hello.md 만들어줘"

### Step 3 (20분) — 진짜 작업 1개 (**가상 데이터로**)
| 직무 | 추천 |
|---|---|
| 회의록 자주 함 | 가상 FA 메모 → 회의록 |
| 영문 회신 많음 | 가상 고객 메일 → 회신 + 한글 요약 |
| 데이터 분석 | 가상 CSV → 표 |
| VOC 정리 | 가상 메일 3통 → 성향 카드 |

</div>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 내일까지 — CLAUDE.md 5줄

폴더에 `CLAUDE.md`:

```markdown
# 내 작업 환경 (메모리 CS)

- 직무: 메모리 CS, [N]년차
- 자주 만드는 결과물: FA 회의록·고객 회신·VOC
- 톤: formal, spec 인용 정확, 추측 금지
- 한글 요약 별도 파일로 항상 생성
- 도메인 용어: BER·lot·WL·ECC 영문 원문 유지
- 고객별 톤 매뉴얼: customer_tone/[고객명].md 참조
```

<v-click>

<div class="key-message mt-4 text-base">
이 파일이 있으면 매 대화마다 자동 적용
</div>

</v-click>

<v-click>

<div class="text-center text-sm opacity-70 mt-2">
신규 입사자에게 회사 규칙 한 번 가르치는 것과 같음
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 1주일 안 — 팀에 공유

<div class="text-lg mt-6">

<v-clicks>

- 옆자리 동료에게 **5분 시연**
- 팀 슬랙에 자기 **CLAUDE.md 공유**
- 우리 CS팀 **공통 CLAUDE.md** 초안 만들기
- 자주 응대하는 **고객 1사 톤 매뉴얼** 작성

</v-clicks>

</div>

<v-click>

<div class="key-message mt-8">
혼자 쓰면 도구, 같이 쓰면 문화
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 🚀 Day 2 — 나만의 CS Agent 만들기

<div class="text-base mt-2">

오늘은 1차 — **도구 사용법**.<br/>
Day 2는 — **나만의 자동화**.

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div>

### Day 2 내용 (90분)

- **Skill 만들기**: `/회의록`, `/고객회신`, `/대쉬보드` 명령어 한 줄
- **CLAUDE.md 고도화**: 팀 표준·고객별 톤 모두 자동 적용
- **MCP**: 사내 이슈 트래커·메일 시스템 연결
- **본격**: 데모 3·4의 대쉬보드 완전 자동화 (매주 자동 갱신)

</div>

<div>

### 신청

- 대상: 오늘 1차 수강자
- 인원: 소그룹 (8~12명)
- 본인 노트북 필수 (Day 1 설치 완료 상태)

📋 신청: [QR / 링크 placeholder]

</div>

</div>

<v-click>

<div class="text-center mt-4" style="color: var(--brand-blue); font-weight: 700">
"매주 1시간 절감"에서 "매일 2시간 절감"으로
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---

# 자주 막히는 곳

| 증상 | 해결 |
|---|---|
| `claude: command not found` | Node.js 설치 확인 + 사내 IT |
| 답이 영어로 옴 | `CLAUDE.md`에 "한국어로 답변" |
| 파일 못 만듦 | `/permissions`에서 Write 허용 |
| 답이 엉뚱함 | `/clear` 후 다시, 또는 더 구체적으로 |
| spec 수치 틀림 | **반드시 datasheet 원본 대조** |
| 회사 가이드 충돌 | 사내 IT/보안팀 즉시 문의 (임의 판단 X) |
| 비용 의문 | 사내 청구 코드 확인 |

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---
layout: section
class: brand-cover
---

# Q&A

10분

---

# 자주 나오는 질문

<div class="text-base mt-4">

<v-clicks>

1. **고객 lot ID 진짜 입력해도 돼요?** → 사내 가이드 확인, 가상 데이터만
2. **Datasheet 원본은요?** → ❌ NDA 위반, spec 일반 표기까지만
3. **사내 ChatGPT랑 뭐가 달라요?** → 파일 직접 처리, 복붙 없음
4. **영문 메일이 부자연스러우면?** → customer_tone 매뉴얼 보강
5. **Spec 틀리면 어떻게 알아요?** → datasheet 대조 + 시니어 검토
6. **Day 2 언제 신청해요?** → [QR / 링크 placeholder]

</v-clicks>

</div>

<v-click>

<div class="text-center mt-6" style="color: var(--brand-blue)">
🙋 다른 질문 환영합니다
</div>

</v-click>

<div class="credit-bottom-right">복부인 with Opus 4.7</div>

---
layout: center
class: brand-cover text-center
---

# 핵심 메시지

<div class="text-3xl mt-12 opacity-90">
복붙이 아니라 <strong>위임</strong>
</div>

<div class="text-xl mt-8 opacity-80">
오늘 끝나고 30분 안에<br/>
가상 데이터로 첫 작업 1개만
</div>

<div class="text-base mt-12 opacity-70">
복부인 with Opus 4.7 · 메모리 반도체 CS팀 사내 교육 템플릿<br/>
MIT License · 가상 데이터만 사용
</div>

---
layout: end
class: brand-cover
---

# 감사합니다

<div class="text-xl opacity-80 mt-6">
Day 2 신청 → [QR / 링크 placeholder]
</div>

<div class="text-sm opacity-60 mt-12">
복부인 with Opus 4.7 · 사내 교육용
</div>
