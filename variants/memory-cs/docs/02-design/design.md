# Design — Claude Code 1시간 세미나 (메모리 CS팀용)

> **개발자**: 복부인 with Opus 4.7
> **BKIT PDCA Design 단계 산출물**
> Plan 문서: [../01-plan/plan.md](../01-plan/plan.md)
> 작성일: 2026-05-13

---

## 1. 일반 직장인용과의 차이 — 무엇을 어떻게 바꾸는가

| 항목 | 일반 직장인용 (기존) | 메모리 CS팀용 (본 자료) |
|---|---|---|
| 청중 | PM·기획·학생 | 메모리 반도체 회사 CS팀 |
| 도메인 | 일반 사무 | **반도체 메모리 (BER·lot·FA·VOC)** |
| 데모 수 | 2 (회의록·CSV) | **4 (메인 2 + 미리보기 2)** |
| 보안 강도 | 일반 | **NDA·고객 데이터 매우 민감** |
| Claude 사용 전제 | 청중 개인 판단 | **사내 공식 승인** |
| Day 2 로드맵 | 없음 | **있음 (나만의 Agent)** |
| 어휘 정책 | 전문어 금지 | **도메인 용어 허용** |
| 페르소나 | 지원·민준 | **박과장·이주임** |
| 비주얼 톤 | 기본 (seriph 테마) | **Brand Blue 기반** |

---

## 2. 커리큘럼 — 60분 + Q&A 10분

```
00:00 ┬─ §0 시작 (1분) — "복부인 with Opus 4.7" 인사
01:00 ┼─ §1 Claude Code란? + 회사 보안 전제 (5분)
06:00 ┼─ §2 첫 시도 라이브 (12분)
18:00 ┼─ §3 데모 1: 회의록 요약 (11분)
29:00 ┼─ §3 데모 2: 고객 회신 메일 자동화 (11분)
40:00 ┼─ §3 데모 3: 불량 지수 대쉬보드 미리보기 (2분)
42:00 ┼─ §3 데모 4: VOC 대쉬보드 미리보기 (2분)
44:00 ┼─ §4 누가 가장 빨리 좋아질까 (5분)
49:00 ┼─ §5 시작하기 + Day 2 예고 (11분)
60:00 ┼─ Q&A (10분)
70:00 ┴─ 종료
```

---

### §0 시작 슬라이드 (1분 · 00:00~01:00)

**프론트 슬라이드 구성** (Brand Blue 배경 + 화이트 텍스트):
```
# Claude Code 1시간

## 메모리 반도체 CS팀 — 사내 기초 교육

내 PC에서 안전하게 시작하기

— 복부인 with Opus 4.7 —

세미나용 슬라이드 · 60분 + Q&A 10분
```

**비주얼**:
- 배경: `#1428A0` (Brand Blue, 회사별 컬러로 변경 가능) 풀블리드 또는 좌측 70% 색면
- 제목: 흰색
- 부제: 흰색 80% 투명도
- 크레딧: 흰색 60% 투명도, 우하단 작게

**구두 시작 (30초)**:
- "이 자료는 복부인이 Opus 4.7과 함께 만들었습니다"
- "회사가 Claude Code 사용을 승인했다는 전제로 진행합니다"
- "사내 IT/보안 가이드라인이 우선이고, 본 자료는 보조입니다"

---

### §1 Claude Code란? + 회사 보안 전제 (5분 · 01:00~06:00)

**4슬라이드 구성**:

1. **한 줄 정의** (1분)
   > "내 사내 PC의 폴더를 직접 읽고 고쳐주는 AI 동료"

2. **사내 ChatGPT와 다른 점** (1.5분)
   | | 사내 ChatGPT | Claude Code |
   |---|---|---|
   | 어디서 답함 | 웹 채팅창 | **터미널 (내 폴더 안)** |
   | 파일 읽기 | 복붙 필요 | **직접 읽음** |
   | 파일 작성 | 복붙 필요 | **직접 저장** |
   | 결과물 | 텍스트 | **파일 (.md, .csv, .xlsx)** |
   | 명령 실행 | ❌ | ✅ |

3. **우리 회사에선 어디까지 OK?** (1.5분, **핵심 슬라이드**)
   - ✅ 가공된 가상 데이터로 연습
   - ✅ 회의록 같은 내부 문서 (단, 외부 공개 자료 기준)
   - ✅ 영문 메일 초안 작성 (단, 실제 발송 전 검토)
   - ⚠️ 고객 lot/wafer ID — 사내 가이드 확인
   - ❌ Datasheet 원본 그대로 업로드 — NDA 위반
   - ❌ 미공개 spec·수율 데이터
   - 📋 **최우선**: [사내 보안 가이드 링크 placeholder]

4. **오늘 시연도 모두 가상 데이터** (1분)
   - 청중이 자기 데이터 입력 시도하면 강사가 즉시 제지
   - 데모 1~4 모두 가상 시나리오·가상 고객·가상 lot

---

### §2 첫 시도 라이브 (12분 · 06:00~18:00)

기존(일반 직장인용)에서 시나리오만 교체:

**시나리오 변경**:
- 기존: "자기소개 markdown 만들기"
- 신규: "팀 인사 markdown 만들기" — 같은 깊이, CS팀 친화 톤

**프롬프트 예**:
> 이 폴더에 team_intro.md 파일 만들어줘.
> 우리 팀: 메모리 CS팀.
> 주요 업무: 고객 escalation 대응, FA 리포트 작성, VOC 분석.
> 톤: 신입 환영용, 간결.

**같이 따라하기 안내**:
- 사내 PC 권한 가정 → `npm install` 안 되면 사내 IT 가이드 참조
- Windows PowerShell + macOS 분기 명시

---

### §3 데모 1 — 회의록 요약 (11분 · 18:00~29:00)

**상황**: FA 결과 공유 회의 (lot ABC-2025-K42, retention 이슈)

**입력 파일** (`demos/01-meeting-notes/before.txt`):
```
2026-05-13 화 PM 4시 FA 회의
참석: 박과장(CS), 이주임(CS), 김선임(FA Lab), 정책임(품질)

- lot ABC-2025-K42 (DDR5 8Gb) retention 이슈
- 고객사 X에서 1000시간 85C 후 BER 5e-7 보고
- datasheet spec: 1e-8 이하
- FA 분석: WL #1024~1056 영역 weak cell 집중
- 원인: ECC 알고리즘 보정 한계 추정
- 동일 lot의 다른 die 50% 추가 검증 예정
- 임시 대응: 고객사에 영향 ranges 통지 + 재고 hold
- 정식 대응: 다음 fab 출하본부터 ECC v2 적용

결정:
- lot ABC-2025-K42 출하 보류
- 고객사 X에 1차 회신 5/15까지
- ECC v2 적용 일정 6/1 fab 출하분부터

To do:
- 박과장: 고객 X 회신 메일 작성 (5/15)
- 이주임: 동일 lot 다른 die 검증 (5/20)
- 김선임: ECC v2 FA 리포트 작성 (5/25)
- 정책임: 재고 hold 시스템 등록 (즉시)

다음 회의: 5/27 같은 시간
```

**프롬프트**:
> 이 폴더의 before.txt는 FA 회의 메모야.
> after.md로 정리해줘. 구조:
> 1. 회의 정보 (일시·참석·주제)
> 2. 핵심 이슈 (lot·spec·BER 현황을 표로)
> 3. FA 분석 결과
> 4. 결정사항 (표)
> 5. 액션 아이템 (담당·작업·기한 표)
> 6. 다음 회의
>
> 고객 영향 ranges와 lot ID는 명시. spec 수치 정확히 인용.
> 한국어로.

**예상 출력 핵심**:
- 표가 잘 정리됨
- lot ID·BER 수치 정확
- 액션 기한 추출

**시연 흐름 (11분)**:
- 0~2분: 상황 + 입력 보여주기
- 2~5분: 프롬프트 실행
- 5~7분: 결과 검토
- 7~9분: 변형 — "이 회의록 기반으로 고객사 X 1차 회신 메일 골격도 잡아줘"
- 9~11분: "ChatGPT랑 다른 점" → 파일로 디스크에 저장됨, 슬랙에 바로 첨부

**메시지**: "FA 회의록 매주 1시간 → 5분"

---

### §3 데모 2 — 고객 회신 메일 자동화 (11분 · 29:00~40:00)

**상황**: 데모 1의 후속 — 박과장이 고객사 X에 1차 회신 작성

**입력 파일들** (`demos/02-customer-reply/`):

`customer_email.txt` (고객이 보낸 메일):
```
Subject: [URGENT] Retention failure in lot ABC-2025-K42

Hi memory team,

We observed BER ~5e-7 on lot ABC-2025-K42 after 1000h at 85C
in our production environment. Per datasheet, spec is 1e-8 max.

This is blocking our Q2 release. Please advise:
1. Root cause
2. Affected lots
3. Replacement plan
4. Long-term fix

Regards,
Customer X Engineering
```

`fa_summary.md` (내부 FA 요약, 데모 1 산출물 활용):
- 이슈: WL #1024~1056 weak cell
- 원인 추정: ECC 알고리즘 한계
- 임시 대응: lot hold + 1차 회신
- 정식 대응: 6/1 fab 출하분부터 ECC v2

`customer_x_tone.md` (고객별 톤 매뉴얼):
- Customer X: 기술적 정확성 중시, spec 인용 필수, 추측 표현 금지, formal English
- 답장 길이: 적당 (단답 X, 장문 X)
- 인사: "Hi [name]" OK, "Dear" 과함

**프롬프트 1단계 (분석)**:
> 이 폴더의 customer_email.txt를 읽고,
> 고객이 요구하는 4가지에 대해 우리가 답할 수 있는 내용을
> fa_summary.md 기반으로 표로 정리해줘.
> 답할 수 없는 건 "사내 확인 필요" 표시.

**프롬프트 2단계 (작성)**:
> 위 분석을 바탕으로 영문 회신 메일 reply.md 작성해줘.
> customer_x_tone.md 매뉴얼 따라줘.
> 원칙:
> - spec 수치 정확히 인용
> - 추측 표현 절대 금지 ("might", "probably" 금지)
> - 미확정 사항은 "we are currently investigating" 식으로
> - 6/1 ECC v2 일정은 공유 OK
> - 회사명/팀명 placeholder: [TEAM]
>
> 한글 요약도 reply_summary_kr.md로 따로 만들어줘 (사내 공유용).

**예상 출력**:
- `reply.md`: 4섹션 영문 회신 (Root cause / Affected / Replacement / Long-term fix)
- `reply_summary_kr.md`: 핵심 결정사항·일정·고객 입장 정리

**시연 흐름 (11분)**:
- 0~2분: 상황 + 입력 3종 보여주기
- 2~4분: 1단계 분석
- 4~7분: 2단계 작성
- 7~9분: 결과 검토 — spec 수치·추측 표현 검증
- 9~11분: "절대 검토 없이 발송 금지" 강조 + 메시지

**메시지**: "매일 5통 회신 → 매일 1시간 절감, 단 검토는 사람 책임"

---

### §3 데모 3 — 불량 지수 대쉬보드 미리보기 (2분 · 40:00~42:00)

**보여줄 산출물 미리 준비**:
- 입력: 가상 defect log (CSV 3개월 분, 고객사 × lot × BER)
- 출력: `dashboard.md` (고객사별 표 + 추세 코멘트)

**시연**:
- 30초: "이런 식의 데이터가 있다고 칩시다" (CSV 한 화면)
- 30초: "이런 프롬프트 한 줄로" (프롬프트 보여주기)
- 60초: "이런 결과가 나옵니다" (대쉬보드 markdown — 고객사별 표, BER 추세, 이상 lot 강조)

**시연 프롬프트 (참고)**:
> defects_3mo.csv를 읽고 dashboard.md 만들어줘.
> - 고객사별 월별 BER 평균·최대 표
> - spec 초과 비율
> - 추세 코멘트 (개선/악화)
> - spec 초과한 lot 별도 강조

**메시지**: "본격 자동화는 Day 2 — 명령어 하나로 매주 자동 생성"

---

### §3 데모 4 — VOC 대쉬보드 미리보기 (2분 · 42:00~44:00)

**보여줄 산출물 미리 준비**:
- 입력: 가상 고객 메일 6개월 모음 (3개 고객사 × 20통 = 60통)
- 출력: `voc_profile.md` (고객사별 성향 카드)

**시연**:
- 30초: "고객 메일 6개월 분량이 있다면"
- 30초: "이런 분석 명령을 주면"
- 60초: 결과 카드 보여주기:
  > **Customer X**: 기술 정확성 중시, spec 인용 빈도 높음(80%), 평균 응답 기대 24h, 자주 묻는 질문 top 3 = retention·endurance·temperature spec
  >
  > **Customer Y**: 일정 민감, 회신 속도가 무엇보다 중요...

**메시지**: "고객별 맞춤 응대 = Day 2 본격 — 신입이 바로 선배 수준 답장"

---

### §4 누가 가장 빨리 좋아질까 (5분 · 44:00~49:00)

3슬라이드:

1. **역할별 임팩트** (2분)
   - **CS 시니어**: 매일 메일 5통 자동화 → 시간 1h/일 확보 → 분석에 투자
   - **CS 주니어**: 영문 메일 부담 ↓, 선배 톤 학습 가속
   - **CS 팀장**: VOC·불량 대쉬보드로 분기 리뷰 자동화

2. **솔직한 한계** (2분)
   - ❌ AI는 가끔 그럴듯한 거짓말 (특히 수치)
   - ❌ Spec 인용은 반드시 검증 (datasheet 원본 대조)
   - ❌ 고객별 톤은 매뉴얼 있어야 효과 큼
   - ❌ NDA·민감 데이터는 절대 금지

3. **"검토 시작점" 가치** (1분)
   - 회신 메일: 백지 → 70% 완성본
   - 대쉬보드: 1주일 작업 → 1분
   - 회의록: 정리 1시간 → 5분
   - 단, 검토 시간은 줄지 않음 — 사람의 가치는 거기에

---

### §5 시작하기 + Day 2 예고 (11분 · 49:00~60:00)

5슬라이드:

1. **오늘 끝나고 30분** (3분)
   - 사내 IT 가이드 확인 → 설치 권한 확보
   - 빈 폴더에서 `claude` 실행
   - 핸드아웃의 "첫 작업 5종" 중 1개 시도

2. **내일까지 — CLAUDE.md** (2분)
   ```markdown
   # 내 작업 환경 (메모리 CS)
   - 직무: 메모리 CS, 5년차
   - 자주 만드는 결과물: FA 회의록, 고객 회신 메일(영문), VOC 정리
   - 톤: formal, spec 인용 정확, 추측 금지
   - 한글 요약은 별도 파일로 항상 작성
   - 고객별 톤 매뉴얼: customer_tone/[고객명].md 참조
   ```

3. **1주일 안 — 팀에 공유** (2분)
   - 옆자리 동료 5분 시연
   - 팀 슬랙에 자기 CLAUDE.md 공유
   - 우리 팀 공통 CLAUDE.md 초안 만들기

4. **Day 2 예고 — 나만의 Agent 만들기** (3분, **핵심 미끼**)
   ```
   Day 2 (별도 일정)

   "나만의 CS Agent 만들기"

   - Skill: /회의록, /고객회신, /대쉬보드 명령어 1개로
   - CLAUDE.md 고도화: 팀 표준·고객별 톤 모두 자동 적용
   - MCP: 사내 이슈 트래커·메일 시스템과 연결
   - 본격: 데모 3·4의 대쉬보드 완전 자동화

   대상: 오늘 1차 수강한 CS팀원
   소요: 90분 · 신청: [링크]
   ```

5. **자주 막히는 곳 + 보안 체크리스트** (1분)
   - 영어 답변 → CLAUDE.md "한글로"
   - NDA 데이터 의심 → 즉시 중단, IT 보안팀 문의
   - 비용 한도 → 사내 청구 코드 안내

---

### Q&A (10분 · 60:00~70:00)

**예상 질문 6 (CS팀 특화)**:
1. **고객 lot 정보 진짜 넣어도 돼요?** → 사내 가이드 확인, 본 자료는 가상 데이터만
2. **영문 메일이 너무 formal해서 부자연스러우면?** → customer_tone 매뉴얼 보강
3. **Spec 수치를 AI가 틀리면?** → 반드시 datasheet 대조, AI는 보조
4. **사내 시스템(Jira·메일)에 연결 가능?** → Day 2 MCP 영역
5. **회사 비용은 어떻게?** → 사내 청구 코드 안내, 부서 예산 협의
6. **Day 2는 언제·어떻게 신청?** → [신청 링크/QR]

---

## 3. 슬라이드 매핑 — 총 32장 (1장당 평균 1.875분)

| § | 슬라이드 수 | 내용 |
|---|---|---|
| §0 | 1 | 프론트 (복부인 with Opus 4.7) |
| §1 | 4 | 정의·비교·보안 OK 범위·가상 데이터 약속 |
| §2 | 5 | 같이 따라하기 (설치·실행·명령·종료) |
| §3 데모1 | 4 | 입력·프롬프트·출력·메시지 |
| §3 데모2 | 5 | 입력 3종·1단계·2단계·결과·메시지 |
| §3 데모3 | 2 | 입력 미리보기·결과 미리보기 |
| §3 데모4 | 2 | 입력 미리보기·결과 미리보기 |
| §4 | 3 | 역할별·한계·검토 시작점 |
| §5 | 5 | 30분·내일·1주일·Day 2 예고·자주 막힘 |
| Q&A | 1 | 자주 묻는 6질문 |
| END | — | 핵심 메시지 + 크레딧 |

---

## 4. 보안 강화 — 가상 데이터 설계 원칙

### 4-1. 데이터 익명화
- 고객사명: "Customer X / Y / Z" (실 고객사 절대 X)
- Lot ID: "ABC-2025-K42" 같은 가공된 패턴 (실 lot 패턴과 닮으면 안 됨)
- Part Number: 가공된 패턴 ("DDR5 8Gb" 같은 일반 표기까지만)
- 수치: spec과 직관적으로 다른 가짜 수치 (5e-7, 1e-8 같은 예시 수치)

### 4-2. 데모 데이터 생성 원칙
- 실 회사 양식 흉내 NO
- 도메인 신뢰성은 유지, 구체 데이터는 가공
- 청중이 "어, 이거 우리 회사 양식 아닌데?"라고 느낄 정도면 OK
- README에 "본 데이터는 모두 가상" 명시

---

## 5. 비주얼 디자인 — Brand Blue 톤

### 5-1. 컬러 팔레트

| 토큰 | Hex | RGB | 용도 |
|---|---|---|---|
| `--brand-blue` | `#1428A0` | 20·40·160 | **Primary** — 헤더 배경, 강조, 액션 |
| `--brand-blue-dark` | `#0E1A6E` | 14·26·110 | 호버·active, 그라데이션 다크 끝 |
| `--brand-blue-light` | `#5577FF` | 85·119·255 | Accent — 링크, 하이라이트 |
| `--brand-blue-tint` | `#E8EDFA` | 232·237·250 | 배경 컬러 블록·인용 |
| `--brand-text` | `#0A0A14` | 10·10·20 | 본문 텍스트 (다크) |
| `--brand-text-muted` | `#5A5A6E` | 90·90·110 | 보조 텍스트 |
| `--brand-surface` | `#FFFFFF` | 255·255·255 | 카드·표 배경 |
| `--brand-divider` | `#D6D8E8` | 214·216·232 | 표 경계선·구분선 |
| `--brand-warn` | `#D97706` | 217·119·6 | 경고 (NDA 주의 슬라이드) |
| `--brand-error` | `#DC2626` | 220·38·38 | 금지 항목 (❌ 표시) |
| `--brand-success` | `#16A34A` | 22·163·74 | 허용 항목 (✅ 표시) |

### 5-2. 슬라이드 레이아웃 컬러 규칙

| 슬라이드 유형 | 배경 | 텍스트 | 강조 |
|---|---|---|---|
| **프론트/섹션 표지** | `brand-blue` 풀블리드 | 흰색 | 흰색 80% |
| 일반 콘텐츠 | 흰색 | `brand-text` | `brand-blue` |
| 비교 표 | 흰색 + 헤더 행 `brand-blue` | 본문 다크 / 헤더 흰색 | — |
| 보안 슬라이드 | `brand-blue-tint` 카드 | 다크 | 카테고리별 색 (✅🟢/⚠️🟡/❌🔴) |
| 코드 블록 | `#0E1A6E` (다크) | 흰색·monokai 변형 | `brand-blue-light` (강조 라인) |
| END 슬라이드 | `brand-blue` 풀블리드 | 흰색 | — |

### 5-3. 타이포그래피

| 용도 | 폰트 | 비고 |
|---|---|---|
| 본문 (한글) | **Pretendard** | 회사 공식 폰트 라이선스 문제 시 Pretendard(오픈소스)로 대체 |
| 본문 (영문) | **Inter** | Pretendard와 잘 어울리는 산세리프 |
| 코드·모노 | **JetBrains Mono** | 가독성 우선 |
| 제목 (대형) | Pretendard Bold | 700 weight |
| 제목 (소형) | Pretendard SemiBold | 600 weight |

> **주의**: 회사 공식 브랜드 폰트는 외부 GitHub 배포에 라이선스 제약이 흔함. Pretendard(오픈소스, 한글 가독성 우수)로 안전한 시작.

### 5-4. 컴포넌트 스타일

#### 인용·강조 박스
```
┌─ ◆ brand-blue 좌측 4px 보더
│  내용 텍스트
│  배경 brand-blue-tint
└─
```

#### 보안 체크리스트 (§1 핵심 슬라이드)
```
✅ 허용 항목       — brand-success 좌측 보더, 흰색 배경
⚠️ 사내 가이드 확인 — brand-warn 좌측 보더, 옅은 노랑 배경
❌ 금지 항목       — brand-error 좌측 보더, 옅은 빨강 배경
```

#### 표 (비교·결정사항)
- 헤더: `brand-blue` 배경, 흰색 텍스트, bold
- 본문: 흰색 배경, `brand-text`
- 짝수 행: `brand-blue-tint` 약하게
- 보더: `brand-divider`

#### 프론트 슬라이드 — Brand Blue 풀블리드 예시
```
┌──────────────────────────────────────────┐
│                                          │
│   Claude Code 1시간                      │  ← 흰색, 64px bold
│                                          │
│   메모리 반도체 CS팀 — 사내 기초 교육    │  ← 흰색 80%, 28px
│                                          │
│   내 PC에서 안전하게 시작하기            │  ← 흰색 70%, 22px
│                                          │
│                                          │
│                   복부인 with Opus 4.7   │  ← 흰색 60%, 14px, 우하단
└──────────────────────────────────────────┘
   배경 전체: #1428A0 (brand-blue)
```

### 5-5. Slidev 구현 방법

#### 옵션 A: 기본 테마 (seriph) + 커스텀 CSS (권장)
- `slides/style.css`에 CSS 변수 정의
- 슬라이드 frontmatter에 `colorSchema: light`
- 개별 슬라이드는 `<div class="bg-brand-blue text-white">` 식 클래스 사용

#### 옵션 B: 커스텀 테마 (`theme: ./theme`)
- 가장 강력하지만 작업량 큼 (D5에서 다루기 어려움)
- 향후 Day 2 자료에서 고려

→ **본 1차 자료는 옵션 A 채택**.

### 5-6. 외부 공개·재사용 시 가이드라인
- **사내 교육용**: Brand Blue 풀 사용 OK (자기 회사 브랜드 컬러로 변경)
- **외부 fork·GitHub 공개**: 컬러 변수만 두고 README에 "회사별 브랜드 컬러로 변경" 안내
- **다른 회사 청중에게 시연**: 풀블리드 표지만 중립색으로 교체 (`--brand-blue` 변수만 바꾸면 됨)
- 본 자료의 컬러 팔레트는 **시각 톤 템플릿**이며, 어떤 회사 공식 브랜드 가이드도 대체하지 않음

---

## 6. 디렉토리 구조 (variant 부분만)

```
variants/memory-cs/
├── slides/
│   └── slides.md                # Slidev 슬라이드 (32장)
├── demos/
│   ├── 01-meeting-notes/        # 데모 1: 회의록
│   │   ├── before.txt
│   │   ├── after.md
│   │   ├── prompts.md
│   │   └── README.md
│   ├── 02-customer-reply/       # 데모 2: 고객 회신
│   │   ├── customer_email.txt
│   │   ├── fa_summary.md
│   │   ├── customer_x_tone.md
│   │   ├── reply.md
│   │   ├── reply_summary_kr.md
│   │   ├── prompts.md
│   │   └── README.md
│   ├── 03-defect-dashboard/     # 데모 3: 미리보기
│   │   ├── defects_3mo.csv
│   │   ├── dashboard.md
│   │   ├── prompts.md
│   │   └── README.md
│   └── 04-voc-dashboard/        # 데모 4: 미리보기
│       ├── customer_emails_6mo/  # 가상 메일 60통
│       ├── voc_profile.md
│       ├── prompts.md
│       └── README.md
├── handout/
│   ├── cheatsheet.md            # CS팀 컨텍스트
│   ├── homework.md              # 30분/내일/1주일
│   └── faq.md                   # 보안 강화 14문답
└── docs/
    ├── 01-plan/plan.md          # (작성됨)
    └── 02-design/design.md      # (본 문서)
```

---

## 7. 빌드·배포 — 별도 base path

### 6-1. package.json 스크립트 추가
```json
{
  "scripts": {
    "build:memory-cs": "slidev build variants/memory-cs/slides/slides.md --base /claude-code-1hour-beginner/memory-cs/ --out variants/memory-cs/dist"
  }
}
```

### 6-2. GitHub Actions 추가
기존 deploy.yml에 step 추가:
- 메인 빌드: `npm run build` → `slides/dist/`
- 변형 빌드: `npm run build:memory-cs` → `variants/memory-cs/dist/`
- 두 출력을 하나의 Pages 아티팩트로 병합:
  ```
  /index.html              ← 메인 (일반)
  /memory-cs/index.html    ← 변형
  ```

### 6-3. 청중 접근
- 일반: `https://<user>.github.io/claude-code-1hour-beginner/`
- 메모리 CS: `https://<user>.github.io/claude-code-1hour-beginner/memory-cs/`

---

## 8. WBS (작업 분해 — 변형판만)

| Day | 작업 | 산출물 | 검증 |
|---|---|---|---|
| D1 | 데모 1 자산 (회의록) | before.txt·after.md·prompts | 실제 시연 1회 |
| D2 | 데모 2 자산 (고객 회신) | 메일·FA·톤·reply 3종 | 영문 검수 |
| D3 | 데모 3·4 자산 (대쉬보드 미리보기) | CSV·메일 60통·산출물 | 시각 확인 |
| D4 | 슬라이드 32장 작성 | slides.md | 60분 페이싱 |
| D5 | 핸드아웃 3종 변환 | cheatsheet/homework/faq | 인쇄 테스트 |
| D6 | 빌드·base path·CI 수정 | dist/memory-cs | 로컬 빌드 OK |
| D7 | 리허설·녹화 백업·Q&A 보강 | 90초 영상·QR 코드 | 외부 1명 시연 |

**총 7일 (1인 작업)**

---

## 9. 리스크 매트릭스

| 리스크 | 영향 | 가능성 | 완화 |
|---|---|---|---|
| NDA·실데이터 시연 사고 | 🔴 매우 큼 | 中 | 가상 데이터 strict + 청중 발화 통제 |
| 사내 IT 보안 가이드와 충돌 | 🔴 큼 | 中 | 본 자료는 보조라고 명시 + 가이드 우선 |
| 청중 도메인 친화도 편차 | 🟡 중간 | 高 | 박과장·이주임 양쪽 페르소나 |
| Day 2 신청 적음 | 🟡 중간 | 中 | 데모 3·4가 강력한 미끼·핸드아웃에 QR |
| 라이브 데모 실패 | 🟡 중간 | 中 | 90초 녹화 백업 |
| 영문 메일 출력 품질 편차 | 🟡 중간 | 中 | customer_tone 매뉴얼 풍부히 |
| 사내 PC Node.js 설치 권한 | 🟡 중간 | 中 | 사전 IT 협의 안내 슬라이드 |

---

## 10. Out of Scope (본 변형판에서 안 함)

- ❌ Day 2 본 자료 (별도 프로젝트)
- ❌ 실데이터 처리 가이드 (사내 위키 영역)
- ❌ 영어판 (한국어 우선)
- ❌ MCP 서버 실제 구축 (Day 2)
- ❌ Skill·Subagent 작성 (Day 2)
- ❌ LMS 통합·인증서

---

## 11. 다음 단계 — Do 단계 진입 시 순서

본 Design 승인 후:

1. **Step 1**: 데모 1 자산 (회의록 — before.txt, after.md, prompts.md, README.md)
2. **Step 2**: 데모 2 자산 (고객 회신 5파일 + prompts.md, README.md)
3. **Step 3**: 데모 3 자산 (defects_3mo.csv + dashboard.md + prompts.md)
4. **Step 4**: 데모 4 자산 (가상 메일 60통 + voc_profile.md)
5. **Step 5**: 핸드아웃 3종 (cheatsheet, homework, faq)
6. **Step 6**: 슬라이드 32장 (slides.md)
7. **Step 7**: package.json `build:memory-cs` 추가 + CI 갱신
8. **Step 8**: 로컬 빌드 검증 + PDF 추출
9. **Step 9**: 사용자 검토 → 필요 시 수정
10. **Step 10**: GitHub 원격 푸시 결정

→ 본 Design 승인 후 Step 1부터 순차 진행
