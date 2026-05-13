# Demo 4 — VOC 성향 대쉬보드 (미리보기)

> **미리보기 데모** (2분). 본격 자동화는 Day 2 "나만의 Agent 만들기"에서.
> 본 데이터는 모두 **가상**입니다.

6개월간 고객 메일을 분석해 고객사별 성향 카드 자동 생성.

## 파일

| 파일 | 용도 |
|---|---|
| [customer_emails_6mo/](customer_emails_6mo/) | 입력 — 가상 메일 샘플 9통 (실제는 60통 가정) |
| [voc_profile.md](voc_profile.md) | 기대 출력 — 고객사별 VOC 카드 + 횡단 인사이트 |
| [prompts.md](prompts.md) | 강사 시연 스크립트 (2분 짧게) |

## 가상 데이터 구성

세 고객사의 서로 다른 톤·패턴이 드러나도록 설계:

| 고객사 | 톤 특성 | 자주 묻는 주제 |
|---|---|---|
| Customer X | Engineering, spec 정확성 | Datasheet 해석·characterization·FA |
| Customer Y | Sourcing, 일정 민감 | Allocation·lead time·pricing |
| Customer Z | PM, 장기 파트너십 | 로드맵·워크샵·LTA |

## 시연 시간
2분 (세미나 §3 데모 4 — 미리보기)

## 메시지 (시연 중)
> "신입이 바로 선배 수준 답장. 단, 본격 자동화는 Day 2 — 신규 메일 자동 분류·톤 매뉴얼 자동 매칭."

## Day 2에서 다룰 것
- 사내 메일 시스템 MCP 연결
- `/voc-classify` Skill (즉시 priority 분류)
- 자동 톤 매뉴얼 매칭 (Customer X 메일 → customer_x_tone.md)
- 회신 초안 자동 생성 (데모 2 패턴 자동화)

## 보안 주의
- 실 고객 메일 입력 금지
- 실 고객 부서명·담당자명 입력 금지
- 사내 메일 시스템 연결은 Day 2 본격 다룰 때 사내 보안팀 검토 필수
