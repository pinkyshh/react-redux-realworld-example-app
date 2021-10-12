pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = true
    }
    stages {
        stage("Build") {
            steps {
                sh 'npm run build'
            }
        }
        stage("Deploy") {
            steps {
                sh 'npm start'
            }
        }
    }
}
