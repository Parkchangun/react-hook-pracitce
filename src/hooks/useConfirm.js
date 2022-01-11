const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== 'function' && typeof onCancel !== 'function') return;

  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) onConfirm();
    else onCancel();
  }

  return confirmAction;
}

export default useConfirm;