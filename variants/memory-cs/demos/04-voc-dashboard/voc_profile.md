# 고객사별 VOC 성향 카드 (2025-11 ~ 2026-04, 6개월)

> **데이터**: `customer_emails_6mo/` 폴더 (가상 메일 60통, 본 데모는 9통 샘플)
> **목적**: 고객별 응대 톤·우선순위·예상 질문 자동 추출
> **자동 생성**: Claude Code

---

## Customer X — 엔지니어링 중심 / spec 인용 강조

### 기본 프로필

| 항목 | 값 |
|---|---|
| 주 컨택 부서 | Engineering Team |
| 메일 빈도 | 평균 4통/월 |
| 평균 응답 기대 | 24~48 시간 (urgent 케이스는 즉시) |
| 평균 메일 길이 | 250~400 단어 (구체적) |
| 톤 | Formal English, 기술 정확성 최우선 |

### 자주 묻는 Top 3
1. **Datasheet spec 해석** (28% — 가장 빈번)
   - "Is this worst-case or typical?"
   - "What is the guaranteed range under X conditions?"
2. **Characterization data 요청** (22%)
   - 신뢰성·내구성·온도 sensitivity
3. **Spec 초과 / FA 요청** (18%)
   - 양산 일정에 직접 영향 → 긴급도 가장 높음

### 톤 특성
- ✅ 선호: spec 수치 인용, 구체적 일정, "we are currently investigating" 같은 진행상태 명시
- ❌ 비선호: 추측 표현 (might/probably), 단답, 책임 회피

### 자동 추천 응대 가이드
- 1차 회신은 24h 안에 (단순 확인이라도)
- Spec 인용은 반드시 datasheet revision 명시 ("per rev 1.3, section 4.2.1")
- 미확정 사항은 "to be confirmed by [date]" 식으로 일정 약속
- Customer X 이메일에는 **항상** customer_x_tone.md 매뉴얼 참조

### 최근 핫이슈
- lot ABC-2025-K42 retention failure (4/12 ~ 진행 중)
- 다음 마일스톤: 5/15 1차 회신, 5/20 추가 검증 결과

---

## Customer Y — 일정 민감 / 속도 최우선

### 기본 프로필

| 항목 | 값 |
|---|---|
| 주 컨택 부서 | Sourcing |
| 메일 빈도 | 평균 6통/월 (변동 큼) |
| 평균 응답 기대 | **당일 (COB 전)** |
| 평균 메일 길이 | 80~150 단어 (간결) |
| 톤 | Casual professional, 본론 우선 |

### 자주 묻는 Top 3
1. **Allocation / 수량** (35% — 가장 빈번)
   - Q단위 forecast, 월별 PO
2. **Lead time / 배송** (28%)
   - 출하 일정·delay·expedited 옵션
3. **Pricing / 계약 조건** (15%)
   - 분기별 가격 협상

### 톤 특성
- ✅ 선호: 빠른 답·옵션 제시·"speed > detail"
- ❌ 비선호: 장문 분석, 회의 잡고 토론 (그냥 답을 원함)
- "Please advise ASAP" / "by COB" / "by EOD" 자주 등장

### 자동 추천 응대 가이드
- **속도 최우선** — 정확하지 않더라도 "검토 중, X시간 내 회신" 1차 답이라도
- 옵션 제시 (1·2·3) 선호
- 회의 제안보다 짧은 메일 답 선호
- "no urgency" 표현 거의 없음 (있으면 진짜 여유 있는 것)

### 최근 핫이슈
- Q2 allocation 협의 (2/9 ~ 종결)
- 4/3 shipment 5일 delay → 옵션 3개 회신 후 종결

---

## Customer Z — 장기 파트너십 / 협력적

### 기본 프로필

| 항목 | 값 |
|---|---|
| 주 컨택 부서 | Product Management |
| 메일 빈도 | 평균 2통/월 (낮음) |
| 평균 응답 기대 | 1주일 (긴급도 낮음) |
| 평균 메일 길이 | 200~350 단어 (관계 중시) |
| 톤 | Warm professional, 협력적 |

### 자주 묻는 Top 3
1. **로드맵 / 장기 계획** (40% — 가장 빈번)
   - 신제품 일정·기술 방향·다음 세대
2. **워크샵 / 협력** (25%)
   - Joint test, validation kit, 컨퍼런스
3. **상호 피드백** (15%)
   - 이번 분기 어땠는지, 다음에 개선할 점

### 톤 특성
- ✅ 선호: 깊은 토론·워크샵·문서화된 자료
- ✅ 선호: "appreciated", "looking forward", 감사 표현
- ❌ 비선호: 사무적 단답·일방적 통보

### 자동 추천 응대 가이드
- 답은 천천히 (이틀~1주일 안), 단 **깊이 있게**
- 로드맵 관련은 사내 사전 align 후 답 (혼자 결정 X)
- 워크샵·콜 적극 수용 가능
- 분기별 정기 동기화 미팅 권장
- 메일 끝에 감사·기대 표현 자연스럽게

### 최근 핫이슈
- 2026 로드맵 워크샵 (2/28 종료, 피드백 우수)
- Q2 follow-up 4건 (24Gb 샘플·validation kit·LTA·pricing) — 5~6월 일정 잡을 예정

---

## 횡단 인사이트

### 응답 우선순위 자동 분류
1. 🔴 즉시 (당일): Customer Y 메일 + "ASAP/COB/EOD" 포함
2. 🟡 24시간: Customer X 메일 + "urgent" 키워드
3. 🟢 1주일: Customer Z 메일 (urgency 키워드 없음)

### 응답 톤 자동 매칭
- Customer X → customer_x_tone.md 매뉴얼
- Customer Y → customer_y_tone.md 매뉴얼 (작성 예정)
- Customer Z → customer_z_tone.md 매뉴얼 (작성 예정)

### 다음 분기 예상 주제
- Customer X: lot K42 후속, ECC v2 양산 검증 데이터
- Customer Y: Q3 allocation 협의 (6~7월 예상)
- Customer Z: 24Gb 샘플 일정, LTA 협의

---

> 본 VOC 카드는 **미리보기**입니다. Day 2 "나만의 Agent 만들기" 세션에서:
> - 실시간 자동 분류 Skill 만들기 (신규 메일 들어오면 자동 priority 분류)
> - 사내 메일 시스템 MCP 연결
> - 매주 VOC 카드 갱신
> - 응대 톤 매뉴얼 자동 적용 (Customer X 메일이면 customer_x_tone.md 자동 참조)
