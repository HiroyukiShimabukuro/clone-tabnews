# clone-tabnews

Implementação do estudo do https://tabnews.com.br auxiliado pelo https://curso.dev/

prettier < 3.0 - não ignora os arquivos do .gitignore
Para resolver isso criar o arquivo .prettierignore seguindo doc: https://prettier.io/docs/en/ignore

trocar a região da qual está hospedado a vercel
Na raiz do projeto, se você criar um arquivo chamado vercel.json é possível definir qual a região quer fazer deploy, por exemplo:
https://vercel.com/docs/functions/configuring-functions/region
{
"regions": ["iad1"]
}
