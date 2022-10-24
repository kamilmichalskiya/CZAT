FROM openjdk:8-jdk-slim
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} czat.jar
ENTRYPOINT ["java","-jar","/czat.jar"]
