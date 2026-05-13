# 데이터 정리 변경 내역

원본: `messy.csv` (총 10행 + 헤더)
정리본: `clean.csv` (총 5행 + 헤더)

## 처리 요약

- 유지: 5건
- 수정: 2건
- 제거: 3건 (중복 2 + 형식 오류 1)
- 보류 (사람 확인 필요): 2건

## 수정 내역

| 원본 행 | 문제 | 처리 | 비고 |
|---|---|---|---|
| 2: `홍길동,hong@example.com,15000` | 없음 | 유지 | |
| 3: `김철수, kimcs @example.com ,` | 이메일 공백, amount 빈칸 | `kimcs@example.com`로 공백 제거, amount는 빈칸 유지 | amount는 추측 위험 → 보류 |
| 4: `이영희,younghee@exampl.com,25000` | 도메인 오타 추정 | `example.com`으로 수정 | **검토 필요**: 추측이므로 |
| 5: `홍길동,hong@example.com,15000` | 2행과 완전 중복 | 제거 | |
| 6: `박민수,minsoo@example,33000` | TLD 누락 | 제거 | **추측 위험**: `example.com`인지 `example.co.kr`인지 불명 |
| 7: `,empty@example.com,12000` | name 빈칸 | 제거 | name 추측 불가 |
| 8: `정수아,sua@example.com,abc` | amount 숫자 아님 | 제거 | amount 추측 위험 |
| 9: `최영수,young@example.com,18000` | 없음 | 유지 | |
| 10: `한지민,jimin@example.com,22000` | 없음 | 유지 | |
| 11: `홍길동,hong@example.com,15000` | 2행과 완전 중복 | 제거 | |

## ⚠️ 사람이 확인해야 할 항목

1. **이영희 도메인 오타** — `exampl.com`을 `example.com`으로 자동 수정했지만, `example.co.kr`이나 다른 도메인일 가능성 있음. 원본 발신자에게 확인 권장.
2. **김철수 amount 빈칸** — 입력 누락인지 0원 거래인지 확인 필요. 자동 채움 위험.

## 처리 원칙

- ✅ 명백한 공백·중복은 자동 처리
- ⚠️ 도메인 오타는 표시 후 보수적 수정 (별도 검토)
- ❌ amount 같은 금전 데이터는 절대 자동 추측 안 함

## ChatGPT와 다른 점

이 작업을 ChatGPT에 시키면 텍스트 답변으로 끝나지만, Claude Code는:
1. `messy.csv` 파일을 직접 읽음
2. 분석 결과를 `changes.md`로 디스크에 저장
3. 정리된 데이터를 `clean.csv`로 저장

→ 슬랙·이메일에 첨부 가능한 결과물이 폴더에 남음.
