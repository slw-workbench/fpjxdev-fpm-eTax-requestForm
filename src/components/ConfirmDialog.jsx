export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="bg-white border rounded-md shadow-md p-4 flex flex-col gap-2 w-64">
      <span>{message}</span>
      <div className="flex justify-end gap-2">
        <button className="px-3 py-1 rounded-md bg-gray-200" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="px-3 py-1 rounded-md bg-primary text-white"
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
