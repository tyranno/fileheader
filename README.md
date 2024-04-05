# t-fileheader Vscode Extension

파일의 헤더에 파일정보를 추가하기 위한 간단 vs extension


---
## 설치 방법

이 확장 기능을 개발 환경에서 설치하고 사용하기 위한 단계는 다음과 같습니다:

### 사전 준비물

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/) (npm 포함)

### 저장소 클론하기

먼저, Git을 사용하여 저장소를 클론합니다:

```bash
git clone [xxx](ssh://git@192.168.123.37:10022/yikim/vscode-fileheader.git)
cd vscode-fileheader
```

## 의존성 설치하기
저장소를 클론한 후, 프로젝트 디렉터리로 이동하여 필요한 의존성을 설치합니다:
```bash
npm install
```

## 빌드하기
의존성을 설치한 후, 다음 명령어로 확장 기능을 빌드할 수 있습니다:
```bash
npm run build
```

## Visual Studio Code에서 프로젝트 열기
의존성이 모두 설치되면, Visual Studio Code에서 프로젝트를 열 수 있습니다:
```
code .
```
## 확장 기능 실행하기
확장 기능을 실행하려면, Visual Studio Code에서 F5를 누릅니다. 이렇게 하면 확장 기능이 로드된 새로운 VSCode 창이 열립니다. 이제 개발 중인 확장 기능을 테스트할 수 있습니다.

---
---
## .vsix 파일로 확장 기능 설치하기

확장 기능의 .vsix 파일을 다운로드한 후, Visual Studio Code의 "VSIX로부터 설치..." 명령을 사용하여 설치할 수 있습니다. 다음 단계를 따르세요:
1. Visual Studio Code를 엽니다.
2. 사이드바의 네모난 아이콘을 클릭하거나 Ctrl+Shift+X를 눌러 확장 뷰로 이동합니다.
3. 확장 뷰의 오른쪽 상단에 있는 "..."를 클릭한 다음 "VSIX로부터 설치..."를 선택합니다.
4. 다운로드한 .vsix 파일을 찾아 선택한 후 "열기"를 클릭합니다.
5. 설치가 완료되면, Visual Studio Code를 재시작할 수도 있습니다.
   
이로써 시스템에 확장 기능이 로컬로 설치되며, 사용할 준비가 됩니다.

## 설정 적용
.vscode/settings.json
```
{
    "fileHeader.authorName": "Your Name",
    "fileHeader.authorEmail": "Your Email",
    "fileHeader.description": "Brief description here"
}
```