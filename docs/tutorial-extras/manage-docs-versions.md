---
sidebar_position: 1
---

# Jira para Gestión de QA

Jira es una herramienta ampliamente utilizada para gestionar proyectos y errores, ideal para equipos que trabajan con metodologías ágiles.

## Ejemplo de Automatización de Pruebas con Selenium (Python)


<!-- ```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file: -->

```js title="docusaurus.config.js"
module.exports = 
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("http://www.example.com")
assert "Example Domain" in driver.title
elem = driver.find_element_by_name("q")
elem.send_keys("automatización QA")
elem.send_keys(Keys.RETURN)
driver.close()

```

Enlace sugerido Tutorial [Selenium](https://selenium-python.readthedocs.io/)

<!-- ## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello` -->
