import clsx from 'clsx';

export default function Select({ name, label, register, error, children, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-medium">
        {label}
      </label>
      <select
        id={name}
        className={clsx(
          'w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary',
          error && 'border-red-500'
        )}
        {...register(name)}
        {...props}
        aria-invalid={error ? 'true' : 'false'}
      >
        {children}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
