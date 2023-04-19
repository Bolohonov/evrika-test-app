@echo OFF
start C:\Users\NoteBook\.jdks\corretto-17.0.4.1\bin\java.exe -jar target/evrika-test-app-0.0.1-SNAPSHOT.jar
cd ui
start npm run serve -- --port 8081
timeout 10
explorer http://localhost:8081




