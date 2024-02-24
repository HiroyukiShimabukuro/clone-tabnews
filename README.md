# clone-tabnews

Implementação do estudo do https://tabnews.com.br auxiliado pelo https://curso.dev/

Protocolos TCP e UDP
UDP - Streams e jogos
TCP - Padrão de formulários

POC - Prova de conceito
Qual o menor custo que eu posso ter para entender se a ideia funciona ou não funciona? Quais as provas?

MVP - Produto Viavel Minimo
Sistema focado e simples para um resolver um determinado problema, pode ser aplicado para novas features

prettier < 3.0 - não ignora os arquivos do .gitignore
Para resolver isso criar o arquivo .prettierignore seguindo doc: https://prettier.io/docs/en/ignore

trocar a região da qual está hospedado a vercel
Na raiz do projeto, se você criar um arquivo chamado vercel.json é possível definir qual a região quer fazer deploy, por exemplo:
https://vercel.com/docs/functions/configuring-functions/region
{
"regions": ["iad1"]
}

Comentário do colega de curso allbertuu

Foco na simplicidade
Lembrar sobre a teoria McDonald's nessa hora é bom. Afinal, a solução por mais bonita, precisa funcionar e ser modificável.

Começar algo pequeno e simples ao invés de algo grande
Evitar começar logo com um grande pedaço de resultado não vai te ajudar. E não vai ser nenhum pouco legal brigar contra isso.

O senso de engenharia vem com a experiência
Infelizmente é mais fácil começar algo complexo devido a entropia do universo. Mas com certeza compensa começar, ou mesmo decidir, iniciar algo simples. E evoluir, se precisar.

A principal característica de um software bom é: modificável!
O foco que todos deveriam ter. A potência que um time tem de mudar um código no curto, médio e longo prazo.
Exemplo: infraestrutura PCI

Link para gerar estrutura de pastas
https://ascii-tree-generator.com/

Comentário do colega de curso AlvaroVargas
Caso alguém mais esteja curioso de pq conseguimos rodar npm test sem o run, eu acredito que seja pq npm test é um comando pré-definido que nos estamos sobrescrevendo.

Se voce rodar só um npm run pra ver os scripts disponiveis

Git - remover dados sensiveis
https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository