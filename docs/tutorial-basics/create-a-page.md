---
sidebar_position: 1
---

# Pruebas Unitarias

Las pruebas unitarias se enfocan en probar componentes individuales del código. Estas pruebas se suelen automatizar.

## Ejemplo de Prueba Unitaria en Java usando JUnit


```jsx title="src/pages/my-react-page.js"
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculadoraTest {
    @Test
    public void testSuma() {
        Calculadora calc = new Calculadora();
        assertEquals(5, calc.sumar(2, 3));
    }
}
```
Enlace sugerido de documentacion oficial de [JUnit](https://en.wikipedia.org/wiki/Systems_development_life_cycle)

**Pruebas Funcionales**
Estas pruebas verifican si el sistema cumple con los requisitos funcionales. A menudo se hacen pruebas manuales o automatizadas en esta etapa.

**Herramienta recomendada:** Selenium, que permite automatizar pruebas funcionales en navegadores web.

Guia de [Selenium](https://es.parasoft.com/blog/selenium-hacks-for-beginners/)

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
