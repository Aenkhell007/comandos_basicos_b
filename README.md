# FISEI · Carreras de ingeniería

Página estática adaptada a las capturas de referencia, con Bootstrap 5.3.8 local.

## Abrir la página

En PowerShell:

```powershell
Start-Process C:\practica_git\index.html
```

No requiere instalar paquetes ni conexión a internet. Si estaba abierta, recargar con Ctrl + F5.

## Contenido y funcionamiento

- Tema oscuro y navegación adaptable a móviles.
- Carrusel de Carrera de Software, Misión y Visión, con flechas e indicadores.
- Tarjetas de Software, Industrial y Robótica, con iconos recreados en CSS.
- Búsqueda de carreras sin distinguir tildes ni mayúsculas; vaciar la búsqueda restaura las tarjetas.
- Enlaces a detalles de carreras, Docentes y Servicios. Estas dos últimas secciones esperan información real.
- Preferencia de movimiento reducido respetada para el desplazamiento y la reproducción automática.

## Comprobación manual

1. Abrir index.html y comprobar que aparecen la barra, el carrusel y las tres tarjetas.
2. Usar las flechas y los tres indicadores del carrusel.
3. Buscar `robotica`, comprobar el resultado y vaciar el campo.
4. Usar Ver más, Ver detalles y los enlaces del menú.
5. Reducir el ancho de la ventana y comprobar el menú desplegable.

Se verificaron las rutas locales, los destinos internos, los identificadores únicos y la sintaxis JavaScript. No se realizó comprobación visual automatizada por falta de un navegador conectado.

## Git

Los cambios están separados en commits locales. No se ha hecho push ni creado un tag.
Para crear al final un tag anotado (ajustar el nombre si corresponde):

```powershell
git tag -a v1.0.0 -m "Pagina FISEI basada en las capturas"
```

Bootstrap conserva su cabecera de licencia MIT en los archivos distribuidos.
