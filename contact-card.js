(() => {
  const createDialog = (title, eyebrow, content) => {
    const dialog = document.createElement("dialog");
    dialog.className = "vanilla-dialog";
    dialog.setAttribute("aria-label", title);
    dialog.innerHTML = `
      <div class="vanilla-dialog-card">
        <button class="vanilla-close" type="button" aria-label="Cerrar">×</button>
        <span class="dialog-eyebrow">${eyebrow}</span>
        <h2 class="dialog-title">${title}</h2>
        <div class="vanilla-content">${content}</div>
      </div>`;
    dialog.querySelector(".vanilla-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    document.body.appendChild(dialog);
    return dialog;
  };

  const socialDialog = createDialog(
    "Redes sociales",
    "Sígueme",
    `<div class="network-grid">
      <a class="network-card instagram-card" href="https://www.instagram.com/sltag777?stkn=c3V3Zm1xa2M0bmVl&utm_source=qr" target="_blank" rel="noreferrer">
        <img src="/brands/instagram.svg" alt="Logo de Instagram">
        <small>Encuéntrame en</small>
        <strong>Instagram</strong>
        <span>@sltag777</span>
      </a>
      <a class="network-card facebook-card" href="https://www.facebook.com/share/1HkFUsKhcL/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
        <img src="/brands/facebook.svg" alt="Logo de Facebook">
        <small>Encuéntrame en</small>
        <strong>Facebook</strong>
        <span>SLTAG</span>
      </a>
    </div>`
  );

  const sltagDialog = createDialog(
    "SLTAG",
    "Mi emprendimiento",
    `<div class="sltag-panel">
      <p>Soluciones NFC y QR para conectar negocios con sus clientes de forma sencilla.</p>
      <div class="service-chips">
        <span>Reseñas de Google</span><span>Tarjetas NFC</span>
        <span>Códigos QR</span><span>Diseño digital</span>
      </div>
      <a class="primary-action" href="https://wa.me/528442256461?text=Hola%20Jonathan%2C%20quiero%20informaci%C3%B3n%20sobre%20SLTAG" target="_blank" rel="noreferrer">Conocer más</a>
      <div class="coming-soon"><span>Sitio web de SLTAG</span><small>Próximamente</small></div>
    </div>`
  );

  const projectsDialog = createDialog(
    "Proyectos",
    "Trabajo realizado",
    `<div class="portfolio-grid">
      <figure><img src="/portfolio/tarjeta-nfc.jpg" alt="Llavero con tarjeta de presentación NFC"><figcaption>Tarjeta de contacto NFC</figcaption></figure>
      <figure><img src="/portfolio/resenas-google.jpg" alt="Exhibidor con QR y NFC para reseñas de Google"><figcaption>Reseñas de Google con NFC + QR</figcaption></figure>
      <figure class="featured-project">
        <img src="/portfolio/llavero-whatsapp-nfc.png" alt="Llavero NFC personalizado para abrir un chat directo de WhatsApp">
        <figcaption>
          <strong>Llavero NFC para contacto por WhatsApp</strong>
          <p>Con un solo toque, el cliente abre una conversación directa por WhatsApp, sin dictar ni guardar el número. Agiliza el contacto, reduce pasos y facilita una interacción inmediata con cada persona.</p>
        </figcaption>
      </figure>
    </div>`
  );

  document.querySelector(".social-orbit")?.addEventListener("click", () => socialDialog.showModal());
  document.querySelector(".circle-deep")?.addEventListener("click", () => sltagDialog.showModal());
  document.querySelector(".circle-cyan")?.addEventListener("click", () => projectsDialog.showModal());
  document.querySelector(".share-button")?.addEventListener("click", async () => {
    const shareData = {
      title: "Jonathan Esquivel",
      text: "Contacto y redes de Jonathan Esquivel",
      url: window.location.origin + window.location.pathname,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (_) {}
      return;
    }
    await navigator.clipboard.writeText(shareData.url);
    window.alert("Enlace copiado");
  });
})();
