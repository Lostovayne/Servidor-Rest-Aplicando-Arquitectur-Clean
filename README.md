# Node Rest Server + Arquitectura Limpia

Mi proyecto es un servidor REST que ofrece una API RESTful para interactuar con los recursos de mi aplicación. Proporciona una interfaz de programación de aplicaciones basada en HTTP para realizar operaciones de creación, lectura, actualización y eliminación (CRUD) en los datos almacenados en el servidor. Utilizo tecnologías modernas y estándares como Node.js y Express para implementar la lógica de negocio y gestionar las solicitudes y respuestas HTTP. Con mi servidor REST, los usuarios pueden realizar diversas operaciones y manipulaciones de datos en su aplicación de manera eficiente y segura.


## Instalacion
1. Clonar el repositorio: 
```bash
    git clone https://github.com/tu-usuario/tu-proyecto.git
```
2. Instalar las dependencias:
```bash
    npm  install
```
3. Clonar el .env.template y crear el .env
4. Ejecutar el comando para levantar la base de datos local
```bash
    docker compose up -d
```
1. Cambiar el Url por el de la base de datos en la nube
2. Usar el comando prisma migrate deploy para aprovicionar la bd de la nube


# API REST Endpoints

## Obtener todas las tareas

- Método: GET
- Ruta: `/api/todos`
- Descripción: Obtiene todas las tareas existentes.
- Parámetros de consulta: Ninguno.
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de respuesta: Lista de tareas en formato JSON.

## Obtener una tarea por ID

- Método: GET
- Ruta: `/api/todos/:id`
- Descripción: Obtiene una tarea específica por su ID.
- Parámetros de ruta: `id` (number) - ID de la tarea que se desea obtener.
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de respuesta: Tarea en formato JSON.

## Crear una nueva tarea

- Método: POST
- Ruta: `/api/todos`
- Descripción: Crea una nueva tarea.
- Parámetros de cuerpo: Datos de la tarea en formato JSON.
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de respuesta: Tarea creada en formato JSON.

## Actualizar una tarea existente

- Método: PUT
- Ruta: `/api/todos/:id`
- Descripción: Actualiza una tarea existente por su ID.
- Parámetros de ruta: `id` (number) - ID de la tarea que se desea actualizar.
- Parámetros de cuerpo: Datos actualizados de la tarea en formato JSON.
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de respuesta: Tarea actualizada en formato JSON.

## Eliminar una tarea

- Método: DELETE
- Ruta: `/api/todos/:id`
- Descripción: Elimina una tarea por su ID.
- Parámetros de ruta: `id` (number) - ID de la tarea que se desea eliminar.
- Respuesta exitosa:
  - Código de estado: 200
  - Cuerpo de respuesta: Tarea eliminada en formato JSON.

## Env 

- `PORT=3000`
- `PUBLIC_PATH=public`
- `POSTGRES_URL=postgresql://postgres:123456@localhost:5432/TODO`
- `POSTGRES_USER=postgres`
- `POSTGRES_DB=TODO`
- `POSTGRES_PORT=5432`
- `POSTGRES_PASSWORD=123456`
- `NODE_ENV=development`
