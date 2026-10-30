// Interacciones del CV. Sin dependencias.
(() => {
  'use strict';

  // Descargar PDF: abre el diálogo de impresión (el CSS @media print ya prepara la hoja)
  const printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // Enlaces externos: abrir siempre con rel seguro
  document.querySelectorAll('a[target="_blank"]').forEach((a) => {
    a.rel = 'noopener noreferrer';
  });
})();
