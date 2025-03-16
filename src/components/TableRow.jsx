export function TableRow({item, id, handleDelete}){
    return (
        <tr 
        key={item.id} 
        className="border-t hover:bg-gray-50 w-full" 
        onClick={() => {handleDelete(id)}}>
          <td className="px-4 py-2">{String(item.id).slice(0, 3)}</td>
          <td className="px-4 py-2">{item.profile.name}</td>
          <td className="px-4 py-2">{item.tags[0]}</td>
          <td className="px-4 py-2">{item.workPercentual}</td>
        </tr>
    )
}