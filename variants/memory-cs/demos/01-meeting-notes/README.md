# Demo 1 — FA 회의록 정리

> 본 데이터는 모두 **가상**입니다. 실제 lot ID·고객명·spec 수치 일체 없음.

FA 회의 메모(`before.txt`)를 정리된 회의록(`after.md`)으로 변환하는 시연.

## 파일

| 파일 | 용도 |
|---|---|
| [before.txt](before.txt) | 입력 — FA 회의 메모 원본 (가상 lot ABC-2025-K42) |
| [after.md](after.md) | 기대 출력 — 정리된 회의록 |
| [prompts.md](prompts.md) | 강사 시연 스크립트 |

## 가상 시나리오 요약

- **Lot**: ABC-2025-K42 (DDR5 8Gb, 가공 ID)
- **이슈**: Retention failure, BER 5e-7 (spec 1e-8 max 초과)
- **원인 추정**: ECC 알고리즘 보정 한계, WL #1024~1056 weak cell
- **대응**: lot hold + ECC v2 적용 (6/1 fab 출하분부터)
- **고객사**: "Customer X" (가공명)

## 청중이 집에서 따라하는 법

1. 빈 폴더에 `before.txt` 저장 (실 데이터 X)
2. 그 폴더에서 `claude` 실행
3. [prompts.md](prompts.md)의 메인 프롬프트 입력
4. `after.md` 결과 확인

## 시연 시간
11분 (세미나 §3 데모 1)

## 메시지
> "FA 회의록 매주 1시간 → 5분. 단, lot·spec 수치 검토는 반드시 사람이."

## 보안 주의
- ⚠️ 청중이 자기 업무 시도 시 **실 lot ID·고객명·미공개 spec 절대 입력 금지**
- ⚠️ 사내 보안 가이드 우선 — 본 자료는 보조
