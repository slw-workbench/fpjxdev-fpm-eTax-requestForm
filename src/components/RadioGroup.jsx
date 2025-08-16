import clsx from 'clsx';

export default function RadioGroup({ name, options, register, error }) {
  return (
    <div className="mb-4">
      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2">
            <input
              type="radio"
              value={opt.value}
              {...register(name)}
              className={clsx('text-primary focus:ring-primary')}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
