# Iniciando o Projeto #
1.  yarn init -y     ..................... cria o package.json
2.  yarn add typescript -D    ............ cria node_modules e yarn.lock
3.  yarn tsc --init    ................... cria tsconfig.json

4.  Alterar o tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",  
    "module": "commonjs",  
    "rootDir": "./src", 
    "outDir": "./dist",
    "esModuleInterop": true, 
    "forceConsistentCasingInFileNames": true,  
    "strict": true,                                  
    "skipLibCheck": true                                
  }
}

5.  Criar a pasta "src"
6.  index.ts

7.  yarn add express cors

8.  yarn add @types/node @types/typescript @types/express @types/cors ts-node-dev -D

9. *****{}Package.json

10.  yarn dev ............. para rodar o código

// GIT => versionador (repositório)
// GITHUB => plataforma

11. criar repositório github (growdev-scrapbook-api)

# Primeira Vez #
12. git init

13. git add .

14. git commit -m "mensagem aqui"

15. git remote add origin ... ( pegar no github )

16. git push ( pegar comando completo na mensagem )

# Demais Vezes #
17. git add .

18. git commit -m "mensagem aqui"

19. git push

# HEROKU # após criar usuário #
20. Create New App ou New

21. App name ( nome único )
    Choose Region ( United States )
    Create App ( clicar no botão )

22. Tela de Deploy ( onde envia os códigos github p o heroku )

23. Conectar ao Github
    Escolha o repositório através de "Search" e clique em "Connect"

24. Tela de Settings
    Add buildpack "clique para escolher o tipo de buildpack" 
    Escolha " nodejs "  e " Save changes " 

25. Tela de Deploy
    clique em " Deploy Branch " para realizar o deploy
    deverá aparecer a seguinte mensagem na tela:
    * Receive code from GitHub: ok
    * Build master: ok
    * Release phase: ok
    * Deploy to Heroku: ok
    




