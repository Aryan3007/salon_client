// import  { useState } from 'react';

// const Images = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     setSuccessMessage(''); // Reset success message when a new file is selected
//     setErrorMessage(''); // Reset error message when a new file is selected
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);
//       formData.append('upload_preset', 'nourist_nest');

//       fetch('https://api.cloudinary.com/v1_1/dla56tkbp/upload', {
//         method: 'POST',
//         body: formData
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Upload successful:', data);
//         setSuccessMessage('Image uploaded successfully.');
//         setErrorMessage('');
//         setSelectedFile(null);
//       })
//       .catch(error => {
//         console.error('Error uploading file:', error);
//         setErrorMessage('Error uploading image. Please try again.');
//         setSuccessMessage('');
//       });
//     } else {
//       setErrorMessage('No file selected');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
//           </svg>
//           <h2 className="mt-1 font-medium tracking-wide text-gray-700">Image File</h2>
//           <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or drag & drop your file SVG, PNG, JPG, or GIF.</p>
//           {selectedFile && <p className="mt-2 text-xs tracking-wide text-gray-200 px-4 py-1 bg-black">{selectedFile.name}</p>}
//           <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
//         </label>
//       </div>
//       <div className='flex justify-center'>
//         <button onClick={handleUpload} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload Image</button>
//       </div>
//       {successMessage && <p className="text-green-500 text-center mt-2">{successMessage}</p>}
//       {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
//     </div>
//   );
// };

// export default Images;


import { useState } from 'react';

const Images = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setSuccessMessage(''); // Reset success message when a new file is selected
    setErrorMessage(''); // Reset error message when a new file is selected
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'nourist_nest'); // Ensure you have an upload preset configured in Cloudinary
      formData.append('folder', 'makeup'); // Add the folder parameter

      fetch('https://api.cloudinary.com/v1_1/dla56tkbp/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(JSON.stringify(err)); });
        }
        return response.json();
      })
      .then(data => {
        console.log('Upload successful:', data);
        setSuccessMessage('Image uploaded successfully.');
        setErrorMessage('');
        setSelectedFile(null);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        setErrorMessage(`Error uploading image: ${error.message}`);
        setSuccessMessage('');
      });
    } else {
      setErrorMessage('No file selected');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="dropzone-file" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
          <h2 className="mt-1 font-medium tracking-wide text-gray-700">Image File</h2>
          <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or drag & drop your file SVG, PNG, JPG, or GIF.</p>
          {selectedFile && <p className="mt-2 text-xs tracking-wide text-gray-200 px-4 py-1 bg-black">{selectedFile.name}</p>}
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
      <div className='flex justify-center'>
        <button onClick={handleUpload} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload Image</button>
      </div>
      {successMessage && <p className="text-green-500 text-center mt-2">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
    </div>
  );
};

export default Images;
