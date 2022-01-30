import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #03a9fc;
  height: 100vh;
`;

const Content = styled.div`
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  align-items: center;
`;
const FormContainer = styled.div`
  // border: 1px solid red;
  // width: 80%;
  textarea {
    outline: none;
    resize: vertical;
    width: 250px;
    max-height: 100px;
    padding: 12px 20px;
    text-align:center;
    border: 2px solid #000;
  }
`;

const QRContainer = styled.div`
  // border: 1px solid red;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Button = styled.div`
  font-size: 12px;
  align-items: center;
  padding: 10px 50px;
  outline: none;
  width: max-content;
  justify-item: center;
  color: #000;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 20px 20px;
  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const [qrText, setQr ] = useState('');
  const onChange = (e) => setQr(e.target.value);
  const downloadQR = () => {
    const canvas = document.getElementById("myQR");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myQR.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <AppContainer>
      <Content>
        <FormContainer>
          <textarea type='text' placeholder='Add text to convert' onChange={(e) => onChange(e)} value={qrText}></textarea>
        </FormContainer>

        <QRContainer>
          <QRCode
            id='myQR'
            value={qrText}
            size={290}
            level={"H"}
            includeMargin={true}
          />
        </QRContainer>

        <Button onClick={downloadQR}> Download QR </Button>
      </Content>
    </AppContainer>
  );
}

export default App;
