import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Surname',
        field: 'surname',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Extn.',
        field: 'extn',
        sort: 'asc',
        width: 100
      },
      {
        label: "E-mail",
        field: 'email',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      {
        name: 'Tiger',
        surname: 'Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320,800',
        extn: 5421,
        email: 't.nixon@datatables.net'
      },
      {
        name: 'Garrett',
        surname: 'Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170,750',
        extn: 8422,
        email: 'q.winters@datatables.net'
      },
          
     
    ]
  };

  return (
   <div>
         {/* <TableScrollbar rows={5}>
                    <Table hover  id="http-table">
                                <thead id="table-heading">
                                    <tr>
                                        <th>User ID</th>
                                        <th>User Name</th>
                                        <th>User Email</th>
                                        <th>User Phonenumber</th>
                                        <th>User Type</th>
                                    </tr>                                            
                                </thead>                                    
                                <tbody>
                                    {posts.map(renderPost)}                                
                                </tbody>  

                        </Table>
                </TableScrollbar> */}
   </div>
  );
}

export default DatatablePage;