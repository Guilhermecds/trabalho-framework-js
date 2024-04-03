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
      const navigate = useNavigate();
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        // Coletar dados do formulário
        const formData = new FormData(e.target);
        const formDataObject: Record<string, string> = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value.toString();
        });
    
        try {
          const response = await fetch('http://localhost:8000/contatos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
          });
    
          if (response.ok) {
            toast.success('Enviado com sucesso!');
            navigate('/contato');
          } else {
            toast.error('Erro ao enviar dados.');
          }
        } catch (error) {
          console.error('Erro ao enviar dados:', error);
          toast.error('Erro ao enviar dados.');
        }
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
                            <option value="Douradina">Douradina</option>
                            <option value="Sao Paulo">Sao Paulo</option>
                            <option value="Umuarama">Umuarama</option>
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
  


