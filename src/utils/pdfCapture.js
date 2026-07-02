const PORTFOLIO_CANVAS_SELECTOR = '#portfolio-full-canvas';
const PDF_BACKGROUND_COLOR = '#000000';
const PDF_MARGINS_IN = [0.2, 0.2, 0.2, 0.2];

function injectCaptureFallbackStyles() {
  const style = document.createElement('style');
  style.dataset.portfolioPdfFallbacks = 'true';
  style.textContent = `
    html,
    body {
      background: ${PDF_BACKGROUND_COLOR} !important;
    }

    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing {
      background-color: ${PDF_BACKGROUND_COLOR} !important;
      overflow: visible !important;
      min-height: auto !important;
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }

    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing *,
    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing *::before,
    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing *::after {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }

    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing .nav-wrap {
      position: absolute !important;
    }

    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing [data-reveal] {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }

    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing .pdf-capture-ignore {
      display: none !important;
    }

    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing .glass-card,
    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing .project-card,
    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing .activity-card,
    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing .profile-frame,
    ${PORTFOLIO_CANVAS_SELECTOR}.portfolio-pdf-capturing .section-shell {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  `;
  document.head.append(style);
  return () => style.remove();
}

function waitForPaint() {
  return new Promise((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resolve);
    });
  });
}

export async function capturePortfolioPdf({
  filename = 'mahima-sara-jacob-live-portfolio.pdf',
  targetSelector = PORTFOLIO_CANVAS_SELECTOR,
} = {}) {
  const target = document.querySelector(targetSelector);

  if (!target) {
    throw new Error(`Portfolio PDF target was not found: ${targetSelector}`);
  }

  const cleanupStyles = injectCaptureFallbackStyles();
  target.classList.add('portfolio-pdf-capturing');

  try {
    await waitForPaint();
    const html2pdfModule = await import('html2pdf.js');
    const html2pdf = html2pdfModule.default ?? html2pdfModule;
    const width = Math.max(target.scrollWidth, document.documentElement.clientWidth);
    const height = Math.max(target.scrollHeight, document.documentElement.clientHeight);

    await html2pdf()
      .set({
        filename,
        margin: PDF_MARGINS_IN,
        image: {
          type: 'jpeg',
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: false,
          backgroundColor: PDF_BACKGROUND_COLOR,
          logging: false,
          scrollX: 0,
          scrollY: -window.scrollY,
          windowWidth: width,
          windowHeight: height,
        },
        jsPDF: {
          unit: 'in',
          format: 'a4',
          orientation: 'portrait',
          compress: true,
        },
        pagebreak: {
          mode: ['css', 'legacy'],
          avoid: ['.glass-card', '.project-card', '.activity-card', '.profile-frame'],
        },
      })
      .from(target)
      .save();
  } finally {
    target.classList.remove('portfolio-pdf-capturing');
    cleanupStyles();
  }
}
