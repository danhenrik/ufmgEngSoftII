build: 
	mvn clean package

run: 
	java -jar ./Target/Urna.jar

full:
	make build
	make run

test:
	mvn test

e2e:
	npm install
	npm test 
