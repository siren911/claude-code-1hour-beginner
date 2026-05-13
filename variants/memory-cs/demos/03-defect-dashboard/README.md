# Demo 3 — 불량 지수 대쉬보드 (미리보기)

> **미리보기 데모** (2분). 본격 자동화는 Day 2 "나만의 Agent 만들기"에서.
> 본 데이터는 모두 **가상**.

3개월 reliability test 결과 CSV → 고객사별 BER 대쉬보드 markdown 자동 생성.

## 파일

| 파일 | 용도 |
|---|---|
| [defects_3mo.csv](defects_3mo.csv) | 입력 — 28건 reliability test 결과 (가상) |
| [dashboard.md](dashboard.md) | 기대 출력 — 고객사별 대쉬보드 |
| [prompts.md](prompts.md) | 강사 시연 스크립트 (2분 짧게) |

## 가상 데이터 구성

- 기간: 2026-02 ~ 2026-04 (3개월)
- 고객사: Customer X / Y / Z (가공명)
- 제품: DDR5-8Gb / DDR5-16Gb / LPDDR5-12Gb
- 28개 측정 건 중 4건 spec 초과 (Customer X에 집중)
- 데모 1·2의 K42 시나리오와 연결

## 시연 시간
2분 (세미나 §3 데모 3 — 미리보기)

## 메시지 (시연 중)
> "Excel pivot 30분 → AI 1분. 본격 자동화는 Day 2 — 매주 자동 생성·슬랙 알림·고객별 임계치."

## Day 2에서 다룰 것
- `/defect-report` Skill 만들기
- 사내 이슈 트래커 MCP 연결
- 슬랙 알림 자동화
- 고객별 임계치 customization

## 보안 주의
- 실 reliability test 데이터 입력 금지
- 실 고객명·lot ID 입력 금지
- 사내 데이터 활용 시 보안팀 가이드 우선
