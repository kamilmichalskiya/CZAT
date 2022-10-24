FROM maven:alpine as build
ENV HOME=/usr/be
RUN mkdir -p $HOME
WORKDIR $HOME
ADD pom.xml $HOME
#RUN mvn verify --fail-never
ADD . $HOME
RUN mvn package

FROM openjdk:8-jdk-alpine
COPY --from=build /usr/be/target/*.jar /be/czat.jar
ENTRYPOINT java -jar /be/czat.jar
