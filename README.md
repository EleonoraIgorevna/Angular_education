# Angular_education

ng add @angular-eslint/schematics

ng add @tinkoff/eslint-config-angular

.eslintrc.json


"overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "extends": [
      "@tinkoff/eslint-config/app", 
      "@tinkoff/eslint-config-angular"
      ],
      "rules": {}
    },
    {
      "files": [
        "*.html"
      ],
      "extends": [ "@tinkoff/eslint-config-angular/html-eslint" ],
      "rules": {}
    }
 ]

 ng add taiga-ui