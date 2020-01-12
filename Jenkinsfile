pipeline{
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
        
    }
}