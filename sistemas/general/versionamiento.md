---
slug: Versionamiento
title: Versionamiento
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

export const Highlight = ({children, fuente, margenIzq, margenDer}) => (
  <span
    style={{
      fontSize: fuente,
      paddingLeft: margenIzq,
      paddingRight: margenDer,
    }}
    onClick={() => {}}>
    {children}
  </span>
);

La nomenclatura de versionamiento que seguirá para la documentación es la siguiente: 

|<Highlight fuente="18px" margenIzq="151px" margenDer="151px">**Instrucciones de versionamiento (Documentacion Markdown en webpage)**</Highlight>|
|-------------------------------------------------|
|<Highlight fuente="18px" margenIzq="18rem">Se utilizará la siguiente nomenclatura:  **1.2.3**</Highlight>|


|<Highlight fuente="40px">1.</Highlight>|<Highlight fuente="40px" margenIzq="0px" margenDer="0px">2.</Highlight>|<Highlight fuente="40px" margenIzq="0px" margenDer="0px">3</Highlight>|
|---------------------------------------------------------|---------------------------------------------------------|--------------------------------------------------------|
|El primer numero indicará actualizaciones grandes en el modulo | El segundo numero indicará cambios pequeños en el modulo a modificar.|El tercer numero indicara correciones sobre los cambios grandes o pequeños realizados|
|**Ej.** Reesctructura del modulo completo o una gran porcion de este a nivel visual|**Ej.** Implementacion de nuevas funcionalidades sin hacer mayor modificacion en resto del modulo.|**Ej.** Correcion de fallos en los cambios realizados. |
|• Un formulario que se necesita rehacer completamente para mejorarse visualmente.|• Agregar una nueva funcionalidad al modulo ya realizado, un nuevo boton que realice una acción nueva, un nuevo input en un formulario, una nueva columna en una tabla que muestra información, etc.|•  Para el caso de las actualizaciones grandes; si tenemos la version 1.0.0, y se debe hacer una correcion sobre esta version, se coloca 1.0.**1** |
|• Un modulo que contiene una tabla que muestra información la cual se rehará con nuevos estilos completamente.||• Para el caso de actualizaciones pequeñas; si tenemos la version 1.1.0, y se debe hacer una correcion sobre esta version, se coloca 1.1.**1**|
