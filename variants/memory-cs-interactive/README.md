# 메모리 CS팀 인터랙티브 세미나 사이트

기존 Slidev 슬라이드(`/memory-cs/`)와 별개로 운영되는 **단일 파일 인터랙티브 사이트**.

## 특징

- 단일 `index.html` (외부 CDN 의존 0개)
- ChatAnimator로 라이브 데모 4종 시뮬레이션
- 60분 카운트다운 + 강사 가이드 사이드바
- History 섹션 sticky scroll 애니메이션
- 챕터 마커 시크, 풀스크린, 색상 토글

## 배포 URL

빌드 후: `https://siren911.github.io/claude-code-1hour-beginner/memory-cs-interactive/`

## 로컬 미리보기

```powershell
# 더블클릭 또는
python -m http.server 8000
# → http://localhost:8000/variants/memory-cs-interactive/
```

## 빌드 파이프라인

`scripts/merge-dist.mjs`에서 `pages-dist/memory-cs-interactive/`로 복사됨.
별도 빌드 단계 없음 — 정적 HTML 단일 파일.

## 슬라이드 vs 인터랙티브 — 언제 뭘 쓸까

| 자료 | 강의 형태 | 장점 |
|------|-----------|------|
| `/memory-cs/` (Slidev) | 슬라이드 발표식 | 좌우 키 진행, 발표자 노트 |
| `/memory-cs-interactive/` | 스크롤+데모 시연 | 챕터 시크, 라이브 데모 애니메이션 |

같은 콘텐츠를 두 가지 형태로 제공 — 강사 스타일에 맞춰 선택.
