---
slug: Autorizaciones
title: Autorizaciones
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
sidebar_position: 1
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      paddingLeft: '7px',
      paddingRight: '8px',
      cursor: 'pointer',
    }}
    onClick={() => {}}>
    {children}
  </span>
);

### Agregar archivos de permiso
<Highlight color="#091EA8"> 1.1.0</Highlight>

Se agrego una nueva columna **Archivos Adjuntos**, la cual contiene 2 botones:

- _Ver Adjunto:_ Al presionarlo despliega el archivo previamente cargado en una nueva ventana.
- _Subir Adjunto:_ Sirve para adjuntar un archivo al registro.
	> Al presionarlo despliega una ventana en donde se solicita agregar un archivo de permiso.
---------------------------------------------------------------------------------------------------
