import React, { useState } from "react";
import API from "../api"  // Import API instance

const ImageCompressor = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [originalSize, setOriginalSize] = useState(null);
    const [compressedImage, setCompressedImage] = useState(null);
    const [targetSize, setTargetSize] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            setSelectedFile(file);
            setOriginalSize((file.size / 1024).toFixed(2));
        }
    };

    // Handle target size input
    const handleSizeChange = (e) => {
        setTargetSize(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedFile || !targetSize) {
            alert("Please upload an image and specify target size.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("targetSize", targetSize);

        setIsLoading(true);
        setCompressedImage(null);

        try {
            // API call to compress image
            const response = await API.post("/api/compress", formData, {
                responseType: "blob",
            });
            // fetch("/api/compress", {
            //     method: "POST",
            //     body: formData,
            // }
            // );

            // if(response.status === 200){
            // //const blob = new Blob();
            // const compressedImageURL = URL.createObjectURL(response.data);
            // setCompressedImage(compressedImageURL);
            // } else {
            //     throw new Error("Failed to compress image");
            // }
            setCompressedImage(URL.createObjectURL(response.data));
        } catch (error) {
            console.log("Error while compressing image", error);
            alert("Failed to compress image.Please try again");
        } finally {
            setIsLoading(false);
        }
    };  

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
            <div className="w-full md:w-full max-w-md bg-gray-700 rounded-lg shadow-lg p-6">
                <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
                    Image Compressor
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="fileInput" className="block mb-2 font-semibold">
                            Upload Image:
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-gray-300 hover:file:bg-gray-600"
                        />
                    </div>
                    <div>
                        <label htmlFor="targetSize" className="block mb-2 font-semibold">
                            Target Size (KB):
                        </label>
                        <input
                            type="number"
                            id="targetSize"
                            value={targetSize}
                            onChange={handleSizeChange}
                            className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter size in KB"
                            min="1"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-2 px-4 rounded-lg font-semibold transition duration-200 ${isLoading
                                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                            }`}
                    >
                        {isLoading ? 'Compressing...' : 'Compress Image'}
                    </button>
                </form>
                {compressedImage && (
                    <div className="mt-6">
                        <h2 className="text-xl font-bold mb-4">Compressed Image:</h2>
                        <img
                            src={compressedImage}
                            alt="Compressed"
                            className="w-full h-96 md:h-auto rounded-lg mb-4"
                        />
                        <p className="text-sm">
                            <span className="font-semibold mb-2">Original Size:</span>{" "}
                            {originalSize} KB
                        </p>
                        <a
                            href={compressedImage}
                            download={`compressed-${selectedFile?.name}`}
                            className="block w-full text-center py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 font-semibold text-white transition duration-200"
                        >
                            Download Compressed Image
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageCompressor;