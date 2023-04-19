@echo OFF
start java -jar target/evrika-test-app-0.0.1-SNAPSHOT.jar
cd ui
start npm run serve -- --port 8081
timeout 10
explorer http://localhost:8081




