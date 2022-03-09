FROM gitpod/workspace-postgres
USER root

ARG MAVEN_VERSION=3.6.3
SHELL ["/bin/bash", "-c"]

RUN apt install unzip 
RUN curl -s "https://get.sdkman.io" | bash 
RUN source ".sdkman/bin/sdkman-init.sh" &&  sdk install maven ${MAVEN_VERSION} && sdk use maven ${MAVEN_VERSION}