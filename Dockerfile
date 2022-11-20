FROM node:alpine as fe_build
WORKDIR /fe
COPY /fe/package.json .
RUN npm install
COPY fe .
RUN npm run build

FROM maven:alpine as be_build
ENV HOME=/usr/be
RUN mkdir -p $HOME
WORKDIR $HOME
ADD be/pom.xml $HOME
#RUN mvn verify --fail-never
ADD be $HOME
RUN mvn install
COPY --from=fe_build /fe/build /usr/be/target/classes/static
RUN mvn package

FROM openjdk:8-jdk-alpine
COPY --from=be_build /usr/be/target/*.jar /be/czat.jar
ENTRYPOINT java -jar /be/czat.jar
