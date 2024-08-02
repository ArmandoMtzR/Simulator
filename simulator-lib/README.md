# Simulator Lib
## Acerca de

> [!important]
> Este proyecto es completamente de código abierto, sientete libre de ver, tocar y modificar los archivos de esta librería.

El contenido de este directorio es el conjunto de librerías necesarias para el funcionamiento del simulador, todo el contenido esta realizado en lenguaje C y compilado con web assembly para mejorar la eficiencia del simulador, dado que está construido en C, es posible compilarlo para su uso en terminal (como los tests).

## Directorios

Cada una de las carpetas contiene archivos que son necesarios para cuestiones concretas:
- **./lib**: contiene las librerias externas que son necesarias para la compilación del proyecto,
- **./src**: tiene el código completo de la librería del simulador,
- **./test**: incluye los tests a probar antes de realizar la compilación, permite verificar que todos las funciones trabajen de manera correcta,
- **./build**: contiene los archivos compilados, que pueden ser usados dentro del proyecto.

### Directorio Src

El directorio de src (source) o código fuente contiene los archivos necesarios para el funcionamiento de la librería:
- **bases**: contiene los archivos base de la construcción y manejo de objetos,
- **utils**: incluye archivos "miscelaneos", es decir que tienen variedad de elementos útiles para la construcción del proyecto,
- **datastructs**: contiene las estructuras de datos necesarias para el desarrollo del proyecto,
- **patterns**: incluye la implementación de los patrones de diseño empleados en el proyecto
- **phisics**: incluye todos los archivos que permiten implementar la funcionalidad fisicamente correcta a los componentes
    - *temperature* incluye las funciones que implementan fisicas de temperatura a los componentes
    - *electromagnetic* incluye las funciones que implementan funcionalidad electrica y magnetica a los componentes
    - *mecanical* incluye las funciones que implementan comportamientos mecanicos a algunos componentes
- **components**: dispone de todos los componentes electrónicos disponibles en el simulador
    - *basics* son los componentes básicos de todo circuito (cables, resistencias, capacitores, inductores, diodos, diodos emisores o leds),
    - *composite* contiene los componentes compuestos de diferentes elementos básicos, pero que no son circuitos integrados (transformador, transistores tipos PNP, NPN, fotoresistencias, etc.),
    - *integrated* dispone de los circuitos integrados básicos incluidos por defecto en el simulador,
    - *mecanics* dispone componentes mecánicos que pueden ser integrados en conjunto a nuestros circuitos.
- **circuits**: contiene los elementos necesarios para la implementación de circuitos basados en grafos con peso

## Makefile

> [!note]
> Para realizar la compilación de la librería necesita tener instalado make y el compilador de gcc. En caso de tener Linux o MacOS ambos vienen por defecto dentro del sistema, para Windows es necesario instalar manualmente mingw y make, para este efecto recomendamos hacer uso del manejador de paquetes para windows [chocolately](https://chocolatey.org/).

> [!note]
> La versión de C empleada es c2x dentro del compilador de gcc, para más información sobre las versiones estándar de C puedes visitar la página de puedes [gnu gcc](https://gcc.gnu.org/onlinedocs/gcc/language-standards-supported-by-gcc/c-language.html).

> [!warning]
> Es posible que existan errores en caso de hacer uso de clang u otro compilador de C diferente al especificado, busca información en la página de [gcc](https://gcc.gnu.org/).

El archivo makefile permite ejecutar las acciones de pruebas y compilación de la librería, para ello tenemos diferentes comandos, según el caso se utiliza 
> make test

para compilar y ejecutar los tests,
> make build-web

para compilar la libreria para web,
> make build-shared

para compilar los archivos como una libreria externa compartida (shared) para proyectos construidos en C