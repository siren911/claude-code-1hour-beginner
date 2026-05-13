# Demo 2 — 고객 회신 메일 자동화

> 본 데이터는 모두 **가상**입니다. Customer X·lot ID·spec 수치 일체 가공.

고객 escalation 메일 + 사내 FA 요약 + 톤 매뉴얼을 합쳐 영문 회신 + 한글 요약 두 가지를 생성하는 시연.

## 파일

| 파일 | 용도 |
|---|---|
| [customer_email.txt](customer_email.txt) | 입력 — 고객이 보낸 영문 escalation |
| [fa_summary.md](fa_summary.md) | 입력 — 사내 FA 요약 (데모 1 산출물) |
| [customer_x_tone.md](customer_x_tone.md) | 입력 — Customer X 톤 매뉴얼 |
| [reply.md](reply.md) | 기대 출력 — 영문 회신 메일 |
| [reply_summary_kr.md](reply_summary_kr.md) | 기대 출력 — 한글 요약 (사내 공유) |
| [prompts.md](prompts.md) | 강사 시연 스크립트 (2단계 프롬프트) |

## 핵심 학습 포인트

1. **2단계 프롬프트**: 분석 → 작성 (검토 가능한 흐름)
2. **가드레일 명시**: "추측 표현 절대 금지" 같은 명확한 원칙
3. **톤 매뉴얼 분리**: 고객별 매뉴얼이 있으면 결과 품질 급상승
4. **이중 산출물**: 영문 회신 + 한글 사내 요약 동시 생성

## 가상 시나리오 요약

- **상황**: 데모 1의 후속 — 고객사 X가 보낸 escalation에 박과장이 5/15까지 회신
- **고객 요구**: Root cause / Affected lots / RMA plan / Long-term fix (4가지)
- **답변 가능**: 2개 부분 가능, 1개 사내 확인, 1개 완전 가능

## 청중이 집에서 따라하는 법

1. 빈 폴더에 입력 3개 파일 저장 (가상 데이터)
2. `claude` 실행
3. [prompts.md](prompts.md)의 2단계 프롬프트 순차 실행
4. 결과 2개 파일 검토

## 시연 시간
11분 (세미나 §3 데모 2)

## 메시지
> "매일 5통 회신 = 매일 1시간 절감. 단, 검토 없이 발송은 절대 금지."

## 보안 주의
- ⚠️ **실 고객 메일 입력 금지** — 가상 시나리오만
- ⚠️ **실 spec·미공개 정보** datasheet 원본 그대로 입력 금지
- ⚠️ 실 회신 작성 시: 사내 보안 가이드 + 시니어 검토 필수
