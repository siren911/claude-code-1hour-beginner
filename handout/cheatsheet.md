# Claude Code 치트시트 (1장)

> 세미나 끝나고 가져가는 카드. 인쇄 또는 PDF로.

---

## 설치

### macOS / Linux
```bash
npm install -g @anthropic-ai/claude-code
claude login
```

### Windows (PowerShell)
```powershell
npm install -g @anthropic-ai/claude-code
claude login
```

Node.js 없으면 → [nodejs.org](https://nodejs.org) 에서 LTS 다운로드 먼저.

## 첫 사용

```bash
cd ~/내-폴더
claude
```

프롬프트 입력 → Enter → AI가 일함.
종료: `exit` 또는 `Ctrl+C`

## 자주 쓰는 명령

| 명령 | 용도 |
|---|---|
| `/clear` | 대화 초기화 (긴 대화 후 깨끗하게) |
| `/help` | 도움말 |
| `/permissions` | 파일/명령 권한 관리 |
| `Tab` | 자동완성 |
| `Shift+Tab` | Plan mode (큰 변경 전 계획만 보기) |

## 좋은 프롬프트 5가지 원칙

1. **이 폴더의 OO 파일** — 어디를 보라고 지목
2. **결과는 OO 형식으로** — 마크다운·CSV·표 등
3. **OO 절대 금지** — 가드레일 (예: "금전 데이터 추측 금지")
4. **확실하지 않으면 표시** — AI 한계를 인정하게 함
5. **한국어로 답해줘** — 영어 답 방지

## CLAUDE.md (5줄짜리 시작)

폴더에 `CLAUDE.md` 파일을 만들고:

```markdown
# 내 작업 환경
- 직업: PM
- 자주 쓰는 양식: 회의록, 주간 리포트
- 좋아하는 톤: 간결, 표 사용
- 한국어로 답변
- 결정사항·액션 항상 분리
```

이게 있으면 매 대화마다 자동으로 적용됨.

## 자주 막히는 곳

| 증상 | 해결 |
|---|---|
| `claude: command not found` | Node.js 설치 확인 (`node -v`) |
| 답이 영어로 옴 | CLAUDE.md에 "한국어로 답변" 추가 |
| 파일을 못 만듦 | `/permissions`에서 Write 허용 |
| 답이 엉뚱함 | `/clear`로 대화 초기화 후 다시 |
| API 한도 초과 | 작업 잘게 쪼개기 |

## 보안

- ❌ 비밀번호·API 키·신용카드 절대 입력 금지
- ❌ 회사 NDA 코드는 사내 정책 확인 후
- ✅ 가상 데이터로 먼저 연습
- ✅ 엔터프라이즈 옵션은 학습 미사용 가능

## 다음 단계

- 30분 안에: 자기 일에서 가장 귀찮은 텍스트 작업 1개 시켜보기
- 내일까지: CLAUDE.md 5줄 작성
- 1주일 안: 친한 동료에게 시연

---

[자료 GitHub](https://github.com/) · [상급자 자료](https://jhl-labs.github.io/claude-code-1hour/) · MIT License
