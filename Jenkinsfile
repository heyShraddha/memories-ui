pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    print("Building Code")
                    sh "npm install"
                    sh "npm run build"
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