pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    print("Building Code")
                    sh "echo something"
                }
            }
        }
        
         stage('Test') {
            steps {
                script {
                    print("Testing Code")
                    sh "npm run sonar"
                }
            }
        }
    }
}