pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 4100:4100'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('BUILD') {
            steps {
                sh 'npm install'
            }
        }
        stage('DEPLOY') { 
            steps {
                sh 'npm start &'
                sh 'sleep 1'
                input message: 'If you are done using the website, click Proceed to stop.'
                sh 'fuser -k 4100/tcp || true'
            }
        }
    }
}
