//window.beforeunload: 문서와 리소스가 언로드 되기 직전에 window에서 발생
//이벤트 발생 시점엔 아직 문서를 볼 수 있으며 이벤트도 취소 가능

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = '';
  }

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  }

  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  }

  return {enablePrevent, disablePrevent};
}

export default usePreventLeave;
