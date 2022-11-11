# Solid JS

A little about SolidJS:

- JS Framework
- Ryan Carniato, 2018
- Alto rendimiento


| SolidJS               | React             |
|-----------------------|-------------------|
| JSX                   | JSX               |
| Soporte extra*        | Soporte extra     |
| Function component    | Function component|
| JS Compilado          | Virtual DOM       |
| Crear 1 vez           | Multiples         |
| + control reactividad | - control         |
| Actualizacion Granular| Actualiza todo    |

*lazy loading, context, ssr


## Runtime performance benchmark
![Runtime performance benchmark](src/assets/runtime%20performance%20benchmarks.png)


## Start set up
```
> npx degit solidjs/templates/js nombre-app
> cd nombre-app
> npm install
> npm start
```

Ir a [http://localhost:3000](http://localhost:3000)

## API

### render(component, DOMelement)
> agrega nuestro componente principal al DOM element

### createSignal([value])
> crea un estado, retorna [getter, setter].  Solid puede dar seguimiento a las variables creadas con signal. No necesita estar dentro de un componente para funcionar.
> tambien se pueden crear estados "derivados", con una funcion que usa un signal previo
> los componentes no son dueños de su estado, solo ayudan a estructurar el codigo

### createEffect
> corre cada vez que alguna de las variables de signal o derivadas cambia, sin necesidad de suscribirse a valores para observar, ideal para efectos laterales. 
Signal y effect trabaja con subscripciones y un contexto

### createStore([value])
> maneja el cambio de estados para objetos, listas (anidado)

### onMount(fn)
> empieza  el ciclo del componente

### onCleanup(fn)
> finaliza el ciclo del componente

### createMemo
### use:
> directivas personalizadas

### JSX
> solid tiene otros atributos amigables para el desarrollador como 
> - when(condicional para mostrar el component),
> - for each,  para hacer loops

## Bibliografia
https://www.solidjs.com/docs/latest/api