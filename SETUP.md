# Setup Notes — 최초 1회만

## GitHub Actions 배포 활성화 (push 후 1회)

이 저장소는 GitHub Pages 자동 배포를 위해 GitHub Actions를 사용합니다.
최초 push 시 OAuth `workflow` 권한 이슈로 `.github/workflows/deploy.yml`이
누락되었을 수 있습니다. 다음 중 하나로 활성화:

### 방법 A — gh CLI 권한 갱신 (권장)

```powershell
gh auth refresh -s workflow
```

브라우저에서 권한 승인 후:

```powershell
Move-Item deploy.yml.pending .github/workflows/deploy.yml
git add .github/workflows/deploy.yml
git rm deploy.yml.pending 2>$null  # 이미 옮겨졌으면 무시
git commit -m "ci: add GitHub Pages deploy workflow"
git push
```

### 방법 B — GitHub 웹 UI에서 수동 추가

1. https://github.com/<user>/claude-code-1hour-beginner 접속
2. `Add file` → `Create new file`
3. 파일명: `.github/workflows/deploy.yml`
4. 내용: 이 저장소의 `deploy.yml.pending` 파일 복사·붙여넣기
5. 커밋

### GitHub Pages 설정 (workflow 추가 후)

1. Settings → Pages
2. **Source**: GitHub Actions 선택
3. workflow가 자동 트리거되어 Pages 빌드·배포 시작
4. 완료 후 URL:
   - `https://<user>.github.io/claude-code-1hour-beginner/` (일반 직장인용)
   - `https://<user>.github.io/claude-code-1hour-beginner/memory-cs/` (메모리 CS팀용)

---

> 이 파일은 setup 완료 후 삭제해도 됩니다.
