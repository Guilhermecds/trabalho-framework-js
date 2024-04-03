import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 6px 12px;
`;

export const EditButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
  margin-right: 5px;
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

export const AddButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  text-align: center;
  margin-top: 25px;
  height: 45px;
  font-size: 18px;
`;