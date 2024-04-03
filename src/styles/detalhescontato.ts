import styled from "styled-components";

export const DetailContainer = styled.div`
  margin: 20px auto;
  max-width: 400px;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 8px;
`;

export const DetailItem = styled.div`
  margin-bottom: 10px;
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

export const DetailValue = styled.span`
  margin-left: 10px;
  font-size: 18px;
`;

export const DetailButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  width: 100%;
  height: 40px;
  font-size: 20px;
`;

export const DetailSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;