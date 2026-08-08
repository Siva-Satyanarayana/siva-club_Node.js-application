pipeline {
    agent {
        label 'master'
    }

    environment {
        IMAGE_NAME = 'polavarapusiva/siva_club:app'
    }

    stages {

        stage('Clean workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout code') {
            steps {
                git 'https://github.com/Siva-Satyanarayana/siva-club_Node.js-application.git'
            }
        }

        stage('Build Docker image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('Push image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub-creds') {
                        sh 'docker push ${IMAGE_NAME}'
                    }
                }
            }
        }

        stage('Deploy to Docker Swarm') {
            steps {
                sh 'docker stack deploy -c docker-compose.yml siva-club'
            }
        }

        stage('Verify deployment') {
            steps {
                sh 'docker service ls'
                sh 'docker service ps siva-club_club'
                sh 'docker service inspect siva-club_club'
            }
        }
    }

    post {
        success {
            echo 'Deployment completed successfully'
        }

        failure {
            echo 'Pipeline failed'
        }

        always {
            cleanWs()
        }
    }
}
