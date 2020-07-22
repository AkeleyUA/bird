import React from 'react';

const PlanTable = () => {
  return (
    <Table>
      <TableBody>
        {compareItems.map((item) => (
          <TableRow>
            <TableCell
              classes={{
                root:
                  item === 'Bold compare'
                    ? classes.tableCellBold
                    : classes.tableCell,
              }}>
              {item}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PlanTable;
