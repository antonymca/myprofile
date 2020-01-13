pipeline{
    environment{
        registry = 'antodocker/myprofile'
        registryCredential = 'dockerhub'
        dockerImage=''
    }
    agent any
    tools {nodejs "node"}
    
    stages{
        
        stage('git clone'){
            steps{
                git 'https://github.com/antonymca/myprofile.git'
            }
        }
        
        stage('install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }

        stage('Building Image'){
            steps{
                script{
                    sh 'sudo chmod 700 /var/run/docker.sock'
                    echo 'script executed'
                    dockerImage = docker.build("antodocker/myprofile" + ":$BUILD_NUMBER")
                }
            }
        }

        stage('Deploy Image'){
            steps{
                script{
                    docker.withRegistry('https://registry.hub.docker.com',registryCredential){
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Remove unused docker Image'){
            steps{
                sh 'docker rmi $registry:$BUILD_NUMBER'
            }
        }
        
    }
}