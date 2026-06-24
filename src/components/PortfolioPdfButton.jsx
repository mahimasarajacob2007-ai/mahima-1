import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { capturePortfolioPdf } from '../utils/pdfCapture';

export default function PortfolioPdfButton({
  children = 'Resume',
  className = 'btn-primary',
  filename,
}) {
  const [isCapturing, setIsCapturing] = useState(false);

  async function handleCapture() {
    setIsCapturing(true);

    try {
      await capturePortfolioPdf({ filename });
    } catch (error) {
      console.error(error);
      window.alert('PDF capture failed. Please try again after the page finishes loading.');
    } finally {
      setIsCapturing(false);
    }
  }

  return (
    <button
      aria-busy={isCapturing}
      className={`${className} pdf-capture-ignore`}
      disabled={isCapturing}
      onClick={handleCapture}
      type="button"
    >
      <FaDownload />
      {isCapturing ? 'Preparing PDF' : children}
    </button>
  );
}
