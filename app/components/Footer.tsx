export default function Footer() {
  return (
    <footer className="w-800 my-auto mt-10 flex text-md justify-between">
      <span className="text-slate-500">{`Måns Nilsson © ${new Date().getFullYear()}`}</span>
    </footer>
  )
}
