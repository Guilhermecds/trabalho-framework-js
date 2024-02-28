import React, { useEffect, useState } from 'react';
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  Button,
  BackgroundContainer,
} from '../../styles/contato.ts';
import { GlobalStyle } from '../../styles/global.ts';
import { Header } from '../Header/index.tsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Contato = () => {
      const navigate = useNavigate(); // Use useNavigate ao invés de useHistory
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        toast("Enviado com Sucesso!")
        navigate('/');
      };
    

    return (
        <BackgroundContainer>
                <Header></Header>
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Nome:</Label>
                            <Input type="text" name="nome" required />
                        </FormGroup>
                
                        <FormGroup>
                            <Label>Telefone:</Label>
                            <Input type="tel" name="telefone" required />
                        </FormGroup>
                
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input type="email" name="email" required />
                        </FormGroup>
                
                        <FormGroup>
                            <Label>Cidade:</Label>
                            <Select name="cidade" required>
                            <option value="cidade1">Cidade 1</option>
                            <option value="cidade2">Cidade 2</option>
                            <option value="cidade3">Cidade 3</option>
                            </Select>
                        </FormGroup>
                
                        <FormGroup>
                            <Label>Mensagem:</Label>
                            <Textarea name="mensagem" rows={4} required />
                        </FormGroup>
                
                        <Button type="submit">Enviar</Button>
                    </form>
                </FormContainer>
        </BackgroundContainer>
    )
  }
  


