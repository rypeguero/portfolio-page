const projects = {
  laura: {
    title: 'Laura Taffur Beauty', category: ['Client website · Live', 'Sitio para cliente · Publicado'],
    description: ['A home for Laura’s beauty business and creator work in Bogotá.', 'Un espacio para el negocio de belleza y el contenido de Laura en Bogotá.'],
    points: [
      ['Services, makeup classes, and a photo gallery.', 'Servicios, clases de maquillaje y galería de fotos.'],
      ['Clients ask about availability through WhatsApp. Laura confirms the appointment in chat.', 'Los clientes consultan disponibilidad por WhatsApp. Laura confirma la cita en el chat.'],
      ['Brands prepare proposals to send through WhatsApp or email.', 'Las marcas preparan propuestas para enviar por WhatsApp o correo.']
    ],
    images: [{src:'images/laura-live.jpg', caption:['Live homepage', 'Página de inicio actual'], alt:['Laura Taffur Beauty homepage with a portrait and service links', 'Inicio de Laura Taffur Beauty con retrato y enlaces a servicios']}],
    links: [{url:'https://laurataffurbeauty.com/', label:['Visit website ↗', 'Visitar sitio ↗']}]
  },
  crm: {
    title: 'Service Studio', category: ['Appointment app · In development', 'App de citas · En desarrollo'],
    description: ['An appointment booking app I’m building, with a working form, Python backend, and database storage.', 'Una app de citas que estoy desarrollando, con formulario, backend en Python y almacenamiento en base de datos.'],
    points: [
      ['Built: service selection, future-date checks, and appointment requests saved in PostgreSQL.', 'Implementado: selección de servicios, validación de fechas futuras y solicitudes guardadas en PostgreSQL.'],
      ['Next: a dashboard to view, approve, and decline requests.', 'Próximo paso: un panel para ver, aprobar y rechazar solicitudes.'],
      ['Currently runs locally. Requests await confirmation; submitting one does not reserve a time slot.', 'Por ahora funciona de forma local. Las solicitudes requieren confirmación; enviarlas no reserva un horario.']
    ],
    images: [{src:'images/service-studio.jpg',caption:['Current front-end preview · In development','Vista actual del sitio · En desarrollo'],alt:['Service Studio booking homepage','Página de inicio para solicitar citas de Service Studio']}],
    links: [{url:'https://github.com/rypeguero/crm-app',label:['Follow the build on GitHub ↗','Ver el desarrollo en GitHub ↗']}]
  },
  travlr: {
    title:'Travlr Getaways', category:['University project', 'Proyecto universitario'],
    description:['A travel website with a separate area to manage trips.', 'Un sitio de viajes con un área independiente para gestionar los destinos.'],
    points:[['Browse rooms, meals, and diving trips.', 'Explora habitaciones, comidas y viajes de buceo.'], ['An administrator can sign in and manage trip listings.', 'Un administrador puede iniciar sesión y gestionar los viajes.']],
    images:[{src:'images/travlr-home.png',caption:['Homepage · 1 / 2', 'Inicio · 1 / 2'],alt:['Travlr Getaways homepage', 'Página de inicio de Travlr Getaways']},{src:'images/travlr-travel.png',caption:['Travel catalog · 2 / 2', 'Catálogo de viajes · 2 / 2'],alt:['Travlr diving trip catalog', 'Catálogo de viajes de buceo de Travlr']}],
    links:[{url:'https://github.com/rypeguero/cs465-full-stack-development',label:['View code ↗', 'Ver código ↗']}]
  },
  honeypot:{images:[{"src": "images/honey-24hr.png", "caption": ["Attack dashboard · 1 / 2", "Panel de ataques · 1 / 2"], "alt": ["Honeypot attack dashboard with charts and a world map", "Panel de ataques con gráficos y mapa mundial"]}, {"src": "images/honey-kibana.png", "caption": ["Investigating activity in Kibana · 2 / 2", "Investigación de actividad en Kibana · 2 / 2"], "alt": ["Kibana activity timeline and event records", "Cronología de actividad y registros de eventos en Kibana"]}],title:['Inside an attack','Dentro de un ataque'],category:['Security lab','Laboratorio de seguridad'],description:['A decoy system used to observe real attack attempts.', 'Un sistema señuelo para observar intentos de ataque reales.'],points:[['Five reports document what attackers tried and the evidence they left.', 'Cinco informes documentan qué intentaron los atacantes y qué pistas dejaron.'],['Tools: T-Pot, Elastic, Kibana, and Linux.', 'Herramientas: T-Pot, Elastic, Kibana y Linux.']],links:[{url:'https://github.com/rypeguero/honeypot-siem-lab',label:['Read the reports ↗','Leer informes ↗']}]},
  fixes:{images:[{"src": "images/security-script.jpg", "caption": ["SMB signing script · Code preview", "Script de firma SMB · Vista del código"], "alt": ["PowerShell security script and validation code on GitHub", "Script de seguridad y código de verificación de PowerShell en GitHub"]}],title:['Small fixes. Safer systems.','Cambios pequeños. Más seguridad.'],category:['Security lab','Laboratorio de seguridad'],description:['Scripts to improve security settings on Windows and Linux.', 'Scripts para mejorar la configuración de seguridad en Windows y Linux.'],points:[['Includes update and configuration fixes.', 'Incluye correcciones de configuración y actualizaciones.'],['Validation steps help check that each fix worked.', 'Pasos de verificación para comprobar que cada cambio funcionó.']],links:[{url:'https://github.com/rypeguero/Vulnerability-Remediations',label:['Explore scripts ↗','Explorar scripts ↗']}]},
  scans:{images:[{"src": "images/security-scan-results.png", "caption": ["Vulnerability reduction across validation scans", "Reducción de vulnerabilidades en los análisis de verificación"], "alt": ["Chart showing fewer vulnerabilities across follow-up scans", "Gráfico con la reducción de vulnerabilidades en los análisis posteriores"]}],title:['Find. Fix. Check.','Encontrar. Corregir. Verificar.'],category:['Security lab','Laboratorio de seguridad'],description:['A practice workflow for finding and fixing security issues.', 'Un ejercicio para encontrar y corregir fallos de seguridad.'],points:[['Scanned the lab, prioritized issues, applied fixes, and scanned again.', 'Analicé el laboratorio, prioricé los fallos, apliqué correcciones y volví a analizar.'],['Follow-up scans reduced lab findings from 30 to 6.', 'Los análisis posteriores mostraron una reducción de 30 a 6 hallazgos en el laboratorio.']],links:[{url:'https://github.com/rypeguero/Vulnerability-Management-Program-Implementation',label:['See the results ↗','Ver resultados ↗']}]},
  hunts:{images:[{"src": "images/security-hunt.jpg", "caption": ["Hide Your RDP · Investigation findings", "Hide Your RDP · Hallazgos de la investigación"], "alt": ["Investigation report with a table of attack evidence", "Informe de investigación con una tabla de evidencias del ataque"]}],title:['Follow the evidence','Seguir las pistas'],category:['Security lab','Laboratorio de seguridad'],description:['Investigating simulated break-ins with Microsoft security tools.', 'Investigación de ataques simulados con herramientas de seguridad de Microsoft.'],points:[['Reviewed sign-ins and device records to reconstruct what happened.', 'Revisé registros de acceso y de dispositivos para reconstruir lo ocurrido.'],['Documented findings and recommended next steps.', 'Documenté los hallazgos y las acciones recomendadas.']],links:[{url:'https://github.com/rypeguero/logn-pacific-cyber-range',label:['Explore investigations ↗','Explorar investigaciones ↗']},{url:'https://github.com/rypeguero/logn-pacific-cyber-range/blob/main/threat-hunting/hide-your-rdp-password-spray-to-full-compromise.md',label:['Read an investigation ↗','Leer una investigación ↗']}]}
};

let language = 'en';
try { const saved = localStorage.getItem('portfolio-language'); if (saved === 'es' || saved === 'en') language = saved; } catch {}
const dialog = document.getElementById('project-dialog');
let activeProject = null;
let imageIndex = 0;
let opener = null;
const translated = (value) => Array.isArray(value) ? value[language === 'es' ? 1 : 0] : value;
let activeFilter = 'all';

function updateCount() {
  const count = [...document.querySelectorAll('.card')].filter(card => !card.hidden).length;
  document.getElementById('filter-status').textContent = language === 'es' ? `${count} proyectos visibles` : `${count} projects shown`;
}

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.title = next === 'es' ? 'Ryan Peguero — Desarrollador' : 'Ryan Peguero — Developer';
  document.querySelectorAll('[data-en]').forEach(node => { node.textContent = node.dataset[next]; });
  document.querySelectorAll('[data-aria-en]').forEach(node => { node.setAttribute('aria-label', node.getAttribute(`data-aria-${next}`)); });
  document.querySelectorAll('[data-alt-en]').forEach(node => { node.alt = node.getAttribute(`data-alt-${next}`); });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === next)));
  try { localStorage.setItem('portfolio-language', next); } catch {}
  updateCount();
  if (activeProject) renderProject();
}

function renderImage() {
  const images = projects[activeProject].images || [];
  document.getElementById('dialog-gallery').hidden = !images.length;
  if (!images.length) { document.getElementById('dialog-image').removeAttribute('src'); return; }
  const current = images[imageIndex];
  const image = document.getElementById('dialog-image');
  image.src = current.src;
  image.alt = translated(current.alt);
  document.getElementById('gallery-caption').textContent = translated(current.caption);
  document.getElementById('previous').hidden = images.length < 2;
  document.getElementById('next').hidden = images.length < 2;
}

function renderProject() {
  const project = projects[activeProject];
  document.getElementById('dialog-title').textContent = translated(project.title);
  document.getElementById('dialog-category').textContent = translated(project.category);
  document.getElementById('dialog-description').textContent = translated(project.description);
  const points = document.getElementById('dialog-points');
  points.replaceChildren(...project.points.map(text => { const li = document.createElement('li'); li.textContent = translated(text); return li; }));
  const links = document.getElementById('dialog-links');
  links.replaceChildren(...project.links.map((link, index) => { const a = document.createElement('a'); a.href = link.url; a.target = '_blank'; a.rel = 'noreferrer'; a.className = `button ${index === 0 ? 'primary' : 'secondary'}`; a.textContent = translated(link.label); return a; }));
  renderImage();
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelectorAll('.card').forEach(card => { card.hidden = activeFilter !== 'all' && card.dataset.kind !== activeFilter; });
  updateCount();
}));
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  activeProject = button.dataset.project;
  imageIndex = 0;
  opener = button;
  renderProject();
  dialog.showModal();
  document.body.style.overflow = 'hidden';
  dialog.scrollTop = 0;
  dialog.querySelector('.close').focus();
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; activeProject = null; opener?.focus(); });
dialog.addEventListener('click', event => { if (event.target !== dialog) return; const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); });
function stepImage(delta) { const length = projects[activeProject]?.images?.length || 0; if (length > 1) { imageIndex = (imageIndex + delta + length) % length; renderImage(); } }
document.getElementById('previous').addEventListener('click', () => stepImage(-1));
document.getElementById('next').addEventListener('click', () => stepImage(1));
dialog.addEventListener('keydown', event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); stepImage(event.key === 'ArrowRight' ? 1 : -1); } });
setLanguage(language);
