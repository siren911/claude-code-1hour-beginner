# FA 요약 — lot ABC-2025-K42 (사내 공유용)

> 데모 1의 회의록 산출물을 본 데모 2의 입력으로 사용.
> 본 데이터는 모두 **가상**.

## 이슈

- Lot: ABC-2025-K42 (DDR5 8Gb)
- 보고 BER: 5e-7 (고객사 X, 1000h@85°C)
- Spec: 1e-8 max
- 영향: 고객사 X Q2 양산

## FA 결과

- 위치: WL #1024~1056 weak cell 집중
- 재현성: 동일 lot die 3개 중 2개 (66%)
- 원인 추정: ECC 알고리즘 보정 한계
- 추가 검증 진행 중: 동일 wafer 다른 die 50% (~5/20 완료 예정)

## 영향 범위 (현재까지 확인)

- ✅ 확인됨: lot ABC-2025-K42
- ❓ 검증 중: 동일 wafer cohort의 인접 lot (~5/20 결과 예정)
- ❌ 영향 없음 (현재까지): 다른 wafer fab 출신 lot

## 대응 계획

### 임시 (즉시 ~ 5/15)
- lot ABC-2025-K42 출하 보류 (사내 시스템 등록 5/14 완료)
- 고객사 X에 영향 ranges 통지
- 영향 inventory에 대한 hold 권고

### 정식 (6/1 fab 출하분부터)
- ECC v2 알고리즘 적용
- 적용 lot부터는 동일 stress 조건에서 spec 충족 예상
- FA 리포트 5/25까지 (김선임)

### 기존 lot 후속 조치 (논의 중)
- 옵션 A: 재고 회수 + 신 lot 공급
- 옵션 B: 보상 정책 (수율 / 비용 분담)
- 5/27 다음 FA 회의에서 결정 예정

## 답변 가능 / 사내 확인 필요 매트릭스

| 고객 질문 | 답변 가능? | 비고 |
|---|---|---|
| 1. Root cause | 부분 가능 | "조사 중, ECC 알고리즘 한계 추정" 까지만 |
| 2. Affected lots | 부분 가능 | K42 확인, 인접 lot 5/20 결과 후 추가 통지 예정 |
| 3. Replacement/RMA | **사내 확인 필요** | 5/27 회의 결정 사항 |
| 4. Long-term fix | 가능 | ECC v2, 6/1 fab 출하분부터 |

## 회신 시 주의사항

- 추측 표현 금지 ("might", "probably", "could be" 등)
- 미확정 사항은 "we are currently investigating" / "to be confirmed"
- spec 수치 인용 정확히 (1e-8 max — 우리 데이터시트 기준)
- 일정은 확정된 것만 공유 (6/1 ECC v2는 OK, 5/27 회의 결과는 X)
- 톤: formal, 협력적, 책임 회피 X
