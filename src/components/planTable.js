import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Icon,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {},
});

const PlanTable = ({name, compareSupports, compareItems}) => {
  const classes = useStyles();
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{name}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.values(compareSupports).map((item) => (
          <TableRow>
            <TableCell
              classes={{
                root:
                  item === 'Bold compare'
                    ? classes.tableCellBold
                    : classes.tableCell,
              }}>
              {item ? <Icon>done</Icon> : ' '}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PlanTable;
