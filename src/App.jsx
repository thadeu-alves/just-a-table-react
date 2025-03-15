import {data} from "./lib/data.js";

function App() {

  const dataBase = data.get();

  return (
    <div className="overflow-x-auto p-4">
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
          {dataBase.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.profile.name}</td>
              <td className="px-4 py-2">{item.tags[0]}</td>
              <td className="px-4 py-2">{item.workPercentual}</td>
            </tr>
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
