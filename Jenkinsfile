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
        stage("BUILD") {
            steps {
                sh 'npm run build'
            }
        }
        stage("DEPLOY") {
            steps {
                sh 'npm start &'
            }
        }
    }
}
