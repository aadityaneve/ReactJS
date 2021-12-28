import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';

const TableComponent = ({ formData }) => {
    console.log('formData:', formData);
    return (
        <>
            <h1>Details Table</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align='right'>Age</TableCell>
                        <TableCell align='right'>Address</TableCell>
                        <TableCell align='right'>Department</TableCell>
                        <TableCell align='right'>Salary</TableCell>
                        <TableCell align='right'>Marital Status</TableCell>
                        <TableCell align='right'>Profile Photo</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {formData.map((form) => (
                        <TableRow
                            key={form.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component='th' scope='row'>
                                {form.userName}
                            </TableCell>
                            <TableCell align='right'>{form.age}</TableCell>
                            <TableCell align='right'>{form.address}</TableCell>
                            <TableCell align='right'>
                                {form.department}
                            </TableCell>
                            <TableCell align='right'>{form.salary}</TableCell>
                            <TableCell align='right'>
                                {form.maritalStatus}
                            </TableCell>
                            <TableCell align='right'>
                                {form.profilePhoto}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default TableComponent;
