import React from 'react'
import Table from 'react-bootstrap/Table';

function List({tasks}) {

  return (

    <div className='row justify-content-center'>
        <div className="col-auto">
        <Table className='table table-responsive' >
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripcion</th>
            </tr>
          </thead>

          <tbody>

            {tasks.map((task) => (
              <tr key={task.json_prueba.id}>
                <td>{task.json_prueba.id}</td>
                <td>{task.json_prueba.nombre}</td>
                <td>{task.json_prueba.descripcion}</td>
              </tr>
            ))} 

          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default List;