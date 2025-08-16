import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import Toast from '../components/Toast.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) =>
    setToasts((prev) => prev.filter((t) => t.id !== id));

  const addToast = (toast) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
    if (toast.type !== 'confirm') {
      setTimeout(() => removeToast(id), 3000);
    }
    return id;
  };

  const toast = (message) => addToast({ message, type: 'info' });

  const confirm = (message) =>
    new Promise((resolve) => {
      const id = addToast({
        message,
        type: 'confirm',
        onConfirm: () => {
          removeToast(id);
          resolve(true);
        },
        onCancel: () => {
          removeToast(id);
          resolve(false);
        },
      });
    });

  return (
    <ToastContext.Provider value={{ toast, confirm }}>
      {children}
      {createPortal(
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
          {toasts.map((t) =>
            t.type === 'confirm' ? (
              <ConfirmDialog
                key={t.id}
                message={t.message}
                onConfirm={t.onConfirm}
                onCancel={t.onCancel}
              />
            ) : (
              <Toast key={t.id} message={t.message} />
            )
          )}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
