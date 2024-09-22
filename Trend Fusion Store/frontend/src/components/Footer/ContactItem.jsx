const ContactItem = ({ Icon, desc }) => {
  return (
    <div className="flex gap-3 mb-2 text-slate-gray">
        <Icon />
        <p className="lg:w-3/5 text-sm text-slate-gray leading-relaxed">{desc}</p>
    </div>
  )
}

export default ContactItem