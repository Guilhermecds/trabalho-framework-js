import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../Header/index.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { DetailButton, DetailContainer, DetailItem, DetailLabel, DetailSeparator, DetailValue } from '../../styles/detalhescontato.ts';

const DetalhesContato = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contato, setContato] = useState<{
    id: number;
    nome: string;
    telefone: string;
    email: string;
    cidade: string;
  } | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/contatos/${id}`);
      setContato(response.data);
    } catch (error) {
      console.error('Erro ao buscar detalhes:', error);
    }
  };

  const handleBack = () => {
    navigate('/contato');
  };

  return (
    <div>
      <Header />
      <DetailContainer>
        {contato ? (
          <>
            <DetailItem>
              <DetailLabel>Nome:</DetailLabel>
              <DetailValue>{contato.nome}</DetailValue>
            </DetailItem>
            <DetailSeparator />
            <DetailItem>
              <DetailLabel>Telefone:</DetailLabel>
              <DetailValue>{contato.telefone}</DetailValue>
            </DetailItem>
            <DetailSeparator />
            <DetailItem>
              <DetailLabel>Email:</DetailLabel>
              <DetailValue>{contato.email}</DetailValue>
            </DetailItem>
            <DetailSeparator />
            <DetailItem>
              <DetailLabel>Cidade:</DetailLabel>
              <DetailValue>{contato.cidade}</DetailValue>
            </DetailItem>
          </>
        ) : (
          <p>Carregando detalhes...</p>
        )}
        <DetailButton onClick={handleBack}>Voltar</DetailButton>
      </DetailContainer>
    </div>
  );
};

export default DetalhesContato;
