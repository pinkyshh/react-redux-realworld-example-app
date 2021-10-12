pipeline {
    agent {
        docker {
            image 'mrts/docker-python-nodejs-google-chrome'
            args '-p 4100:4100'
        }
    }

    environment {
        HOME="."
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm start &'
                sh 'sleep 1'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh 'fuser -k 4100/tcp || true'
            }
        }


    }
}
