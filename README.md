This is a full stack web application running on a docker-compose network consisting of:
1. SPA 19.1 Elm app running on an Nginx container
2. SPA Vue3 app running on an Nginx container
3. Quarkus backend written in Kotlin on a Red Hat UBI minimal container
4. Postgresql 13.2 database on a postgres13.2 alpine container
5. Nginx proxy server to direct frontend requests to the correct SPA on a Nginx container

--WIP--

###### Quarkus/Backend Environment Setup (Optional unless you want to run the full application):

1. The backend uses the Quarkus framework (an alternative to Spring Boot), so you'll need to install the Quarkus IntelliJ plugin
2. You'll need to install the Kotlin plugin as well if your '.kt' files are not being recognized
3. Additionally, if your backend project is not being correctly recognized, you will need to import the Gradle project (right click the 'backend' directory, and you should see an option along the lines of 'Import Gradle Project')

Tips:
- Quarkus boots up MUCH faster than Spring Boot and supports code hot swapping. You can make backend changes, save your project, and your changes will be picked up automatically.

###### Database

1. I've supplied a simple Postgres 13.2 alpine Dockerfile, follow the Instructions.md in the database directory to get started

