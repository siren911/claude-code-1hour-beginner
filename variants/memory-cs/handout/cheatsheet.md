# Claude Code 치트시트 — 메모리 CS팀용 (1장)

> 복부인 with Opus 4.7 · 사내 교육용
> 세미나 후 가져가는 카드. PDF로 인쇄 권장.

---

## 설치 (사내 IT 가이드 우선 확인)

```powershell
# Windows PowerShell
node -v                                # 18+ 확인
npm install -g @anthropic-ai/claude-code
claude login
```

```bash
# macOS / Linux (있는 경우)
node -v
npm install -g @anthropic-ai/claude-code
claude login
```

> 사내 PC 권한 / 방화벽 정책: 사내 IT팀 사전 확인.

## 첫 사용

```bash
cd ~/my-cs-folder
claude
```

> 종료: `exit` 또는 `Ctrl+C`

## 자주 쓰는 명령

| 명령 | 용도 |
|---|---|
| `/clear` | 대화 초기화 (긴 대화 정리) |
| `/help` | 도움말 |
| `/permissions` | 파일·명령 권한 관리 |
| `Tab` | 자동완성 |
| `Shift+Tab` | Plan mode (큰 변경 미리보기) |

## 좋은 프롬프트 5원칙 (CS 직무)

1. **어느 파일** — "이 폴더의 OO.txt"
2. **결과 형식** — "표로 / markdown으로 / 영문 메일로"
3. **가드레일** — "추측 표현 절대 금지" / "spec 수치 정확히 인용"
4. **한계 인정** — "확실하지 않으면 '확인 필요' 표시"
5. **언어 고정** — "한국어로" / "formal English로"

## CLAUDE.md (메모리 CS 5줄)

폴더에 `CLAUDE.md` 만들기:

```markdown
# 내 작업 환경 (메모리 CS)
- 직무: 메모리 CS, [N]년차
- 자주 만드는 결과물: FA 회의록·고객 회신·VOC 정리
- 톤: formal, spec 인용 정확, 추측 금지
- 한글 요약 별도 파일로 항상 생성
- 고객별 톤 매뉴얼: customer_tone/[고객명].md 참조
```

매 대화마다 자동 적용됨.

---

## 🛡️ 보안 — 우리 회사 가이드

### ✅ 가능
- 가공된 가상 데이터로 연습
- 회의록 (외부 공유 가능한 수준의 내부 문서)
- 영문 메일 초안 작성 (실 발송 전 시니어 검토)

### ⚠️ 사내 가이드 확인
- 고객 lot/wafer ID
- 사내 미공개 spec
- 신규 제품 일정

### ❌ 절대 금지
- Datasheet 원본 그대로 업로드 (NDA 위반)
- 미공개 spec·수율·재무 데이터
- 비밀번호·API 키·자격증명
- 신용카드·금융 정보

> **최우선**: [사내 보안 가이드 링크 placeholder]
> 의심스러우면 → 사내 IT/보안팀 문의

---

## CS 업무별 첫 작업 (집에서 30분 안에)

| 직무 | 추천 첫 작업 |
|---|---|
| 회의록 작성 자주 함 | FA/팀 회의 메모를 markdown 회의록으로 |
| 고객 회신 메일 많음 | 영문 메일 초안 → 한글 요약 동시 생성 |
| 데이터 분석 많음 | 가상 CSV 만들어 BER 분석 표 생성 |
| VOC 정리 | 메일 3통을 고객 성향 카드로 |

## 자주 막히는 곳

| 증상 | 해결 |
|---|---|
| `claude: command not found` | Node.js 설치 확인 (`node -v`) |
| 답이 영어로 옴 | `CLAUDE.md`에 "한국어로 답변" |
| 파일 못 만듦 | `/permissions`에서 Write 허용 |
| 답이 엉뚱함 | `/clear` 후 다시, 또는 프롬프트 더 구체적으로 |
| spec 수치 틀림 | 프롬프트에 정확한 수치·datasheet rev 명시 |
| 영문이 부자연스러움 | customer_X_tone.md 매뉴얼 작성·참조 |

## 비용

- 사내 청구 코드: [부서 안내 placeholder]
- 한도 설정: Anthropic 콘솔에서 월별 한도 가능
- 의심 사용량: 사내 IT팀 즉시 보고

---

## 다음 단계

- **오늘 30분 안**: 가상 데이터로 첫 작업 1개
- **내일까지**: CLAUDE.md 5줄 작성
- **1주일 안**: 동료에게 5분 시연·팀에 공유
- **Day 2**: "나만의 CS Agent 만들기" 신청 → [QR 코드 placeholder]

---

[자료 GitHub](https://github.com/) · 복부인 with Opus 4.7 · MIT License (사내 교육용)
