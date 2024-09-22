const FooterList = ({ list }) => {
  return (
    <ul>
        {list.map((listItem) => {
            return(
                <li key={listItem} className="text-sm text-slate-gray mb-2 cursor-pointer">{listItem}</li>
            )
        })}
    </ul>
  )
}

export default FooterList