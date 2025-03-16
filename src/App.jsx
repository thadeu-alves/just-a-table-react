import {data} from "./lib/data.js";
import { useState } from "react";
import { TableRow } from "./components/TableRow.jsx";

function App() {
  const [dataBase, setDataBase] = useState(data.get());
  console.log("render");

  const object = {
    "profile": {
      "name": "Thadeu",
      "email": "thadeu@gmail.com",
      "imgUrl": "profile.png"
    },
    "area": "development",
    "tags": ["tech", "leader", "sentimental"],
    "workPercentual": 90
  };

  const handleAdd = () => {
    data.post(object);
    setDataBase([...data.get()]);
  };

  const handleDelete = (id) => {
    data.delete(id);
    setDataBase([...data.get()]); 
  };

  return (
    <div className="overflow-x-auto p-4 space-y-3">
      <button 
      className="bg-purple-800 py-2 px-4 rounded text-white cursor-pointer"
      onClick={handleAdd}>Add</button>

      <table className="w-full border border-gray-200 rounded-lg shadow-md">

        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Idade</th>
            <th className="px-4 py-2 text-left">Cargo</th>
          </tr>
        </thead>


        <tbody>
          {dataBase.map((item, id) => (
            <TableRow item={item} id={id} handleDelete={handleDelete} key={id}/>
          ))}
        </tbody>


        <tfoot className="bg-gray-100 text-gray-700">
          <tr>
            <td colSpan="4" className="px-4 py-2 text-center">
              Total de Registros: {dataBase.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default App
