import React, { useState, ChangeEvent } from 'react';
import QRCode from "react-qr-code";

const QRCodePage: React.FC = () => {

    const [qrCode, setQrCode] = useState<string>('');
    const [input, setInput] = useState<string>('');

    const generateCode = (): void => {
        setQrCode(input);
        setInput('');
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value);
    }

    return (
        <div className="app-cont">
            <div className="container">
                <header>
                    <h1>QR Code Generator</h1>
                </header>

                <div className="input-cont">
                    <input
                        className="react-input"
                        onChange={handleInputChange}
                        type="text"
                        value={input}
                        name="qr-code"
                    />
                    <button
                        className="react-btn"
                        disabled={input.trim() === ""}
                        onClick={generateCode}
                    >
                        Generate
                    </button>
                </div>

                <div className="qr-code-cont">
                    <QRCode
                        id="qr-code-value"
                        value={qrCode}
                        size={200}
                        bgColor="#fff"
                    />
                </div>

                <div className="qr-val">{qrCode}</div>
            </div>
        </div>
    );
}

export default QRCodePage;
