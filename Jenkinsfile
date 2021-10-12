pipeline {
    agent {
        docker {
             image 'mrts/docker-python-nodejs-google-chrome'
             args '-p 4100:4100'
        }
    }
    environment {
        CI = true
    }
    stages {
        stage("BUILD") {
            steps {
                
                sh 'npm install'
            }
        }
        stage("DEPLOY") {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh 'npm start &'
            }
        }
    }
}
