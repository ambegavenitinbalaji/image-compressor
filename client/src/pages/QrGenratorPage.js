import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

const QRCodeGenerator = () => {
    const [text, setText] = useState('');
    const [qrSize, setQrSize] = useState(256);

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleSizeChange = (e) => {
        setQrSize(e.target.value);
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6'>
            <div className='w-full md:w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-6'>
                <h1 className='text-lg md:text-2xl font-bold text-center mb-6'>QR Code Generator</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="textInput" className='block mb-2 font-semibold'>
                            Enter text or URL
                        </label>
                        <input
                            type="text"
                            id='textInput'
                            value={text}
                            onChange={handleTextChange}
                            className='w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter text or URL'
                        />
                    </div>
                    <div>
                        <label htmlFor="qrSize" className='block mb-2 font-semibold'>
                            QR Code Size (in Pixels):
                        </label>
                        <input
                            type='number'
                            id='qrSize'
                            value={qrSize}
                            onChange={handleSizeChange}
                            className='w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            min="100"
                            max="1000"
                        />
                    </div>
                </form>
                <div className='mt-6 flex flex-col items-center'>
                    {text && (
                        <QRCodeCanvas
                            value={text}
                            size={parseInt(qrSize, 10)}
                            bgColor='#ffffff'
                            fgColor='#000000'
                            className='border p-2 rounded-lg'
                        />
                    )}
                </div>
                <div className='mt-4 flex justify-center'>
                    {text && (
                        <a href={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(
                            document.querySelector("canvas")?.toDataURL() || ""
                        )}`}
                        download="qrcode.png"
                        className='py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 font-semibold text-white transition duration-200'
                        >Download QR Code</a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QRCodeGenerator;