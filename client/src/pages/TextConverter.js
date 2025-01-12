import React, { useState } from 'react'

const TextConverter = () => {
    const [inputText, setInputText] = useState('');
    const [convertedText, setConvertedText] = useState('');

    const toUpperCase = () => setConvertedText(inputText.toUpperCase());
    const toLowerCase = () => setConvertedText(inputText.toLowerCase());
    const toCamelCase = () => {
        const camelInputText = inputText.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
        setConvertedText(camelInputText);
    }
    const clearText = () => {
        setInputText('');
        setConvertedText('');
    }
    return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6'>
      <div className='w-full md:w-full max-w-lg bg-gray-700 rounded-lg shadow-lg p-6'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Text Converter</h1>
        <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Enter your text here...'
        rows="5"
        className='w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
        ></textarea>
        <div className='grid grid-cols-2 gap-4 mb-4'>
            <button
            className='py-2 px-4 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white'
            onClick={toUpperCase}>
                UPPERCASE
            </button>
            <button
            className='py-2 px-4 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white'
            onClick={toLowerCase}>
                lowercase
            </button>
            <button
            className='py-2 px-4 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white'
            onClick={toCamelCase}>
                camelCase
            </button>
            <button
            className='py-2 px-4 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white'
            onClick={clearText}>
                Clear Text
            </button>
        </div>
        {convertedText && (
            <div className='bg-gray-700 p-4 rounded-lg'>
                <h2 className='text-xl font-semibold mb-2'>Converted Text:</h2>
                <p className='text-gray-300'>{convertedText}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default TextConverter;
