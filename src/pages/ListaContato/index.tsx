import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AddButton, DeleteButton, EditButton, Table, TableCell, TableContainer, TableHeader } from '../../styles/listacontato';
import { Header } from '../Header/index.tsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListaContato = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<{ id: number, nome: string, telefone: string, email: string, cidade: string }[]>([]);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:8000/contatos');
        setData(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
    };
    
  
    const handleAdd = () => {
        navigate('/cadastrarcontato');
    };
  
    const handleDetails = (id: number) => {
        navigate(`/detalhescontato/${id}`);
    };
  
    return (
      <div>
        <Header></Header>
        <AddButton onClick={handleAdd}>Adicionar</AddButton>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>Nome</TableHeader>
                <TableHeader>Telefone</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Cidade</TableHeader>
                <TableHeader>Ações</TableHeader>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
              <tr key={item.id}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.telefone}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.cidade}</TableCell>
                <TableCell>
                  <EditButton onClick={() => handleDetails(item.id)}>Detalhes</EditButton>
                </TableCell>
              </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </div>
    );
  };

export default ListaContato;