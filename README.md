# React Hooks Practice

## useInput

> input의 값을 state에 저장 & 유효성 검사를 해주는 hook


tsconfig.json이 js에서 ts로 변환 시 자동 생성 안됨 --> APP.tsx cannot find module error
tsconfig.json 생성 및 `jsx: "react-jsx"` 옵션 생성 후 정상적으로 작동
useFullScreen hook 사용 시 webkit, ms, mox version FullScreen API 호출 불가한 이슈 있음 <- 해결 예정(1.25 03:25)
