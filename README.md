<h1>Dictionary web app</h1>

<h2>//EN//</h2>

<p>This is the Dictionary web app (I got this challenge on Frontend Mentor website). This project consumes the Free Dictionary API, which is an API that gives you the phonetic of the word, its meanings, some usage examples, its word classes, how to pronounce it(with a button that plays its pronunciation) and much more. This project has darkmode, which is saved in the localStorage; You can also change the font family of the page(you have 3 options), which is also saved in the localStorage. A error is displayed if the word doesn't exist (you can see how the error is displayed below). I built this project using Angular, Typescript,HTML and CSS. *The pronunciation button is not available for all the words*</p>
<p>This project only works with english words</p>

<p> I posted this project on my LinkedIn! Check it out here: https://www.linkedin.com/in/lucas-gon%C3%A7alves-3a2662252/ </p>
<p>Live demo: https://dictionary-web-app-nine-jet.vercel.app/</p>

<h3>How I organized the project</h3>

<p>I prefer to work on a component by dividing it into multiple sections, with each section having its specific CSS file located inside a 'styles' folder. This approach makes it easier to maintain the code and locate specific elements for modification. Additionally, I created a service to handle HTTP requests, for which I had to inject the HttpClient into the service to utilize the 'get' method. In the 'app.component.ts' file, I established methods to manage HTTP requests using the injected service. These methods are employed to set the searched word as a query parameter, allowing me to retrieve the word from the URL and display its associated information.</p>

<p>I also worked with ReactiveFormsModule since the project has an input, and I needed to add validators. Additionally, I used local storage to save user preferences for dark mode and font style, so that when users reload or revisit the page later, their preferences will be stored.</p>

<p>It was a little bit complicated to work with this API because it didn't follow a specific pattern, and some words didn't have the information that other words had, making it difficult to display information for certain words.</p>

<h3>Some of the Angular features I worked with</h3>

<p>This project consumes an API, so I had to use the HttpClientModule. I also had to use ngFor, ngIf, template expressions and string interpolations</p>

<h2>//PT-BR//</h2>

<p>Este é o Dictionary web app (Peguei esse desafio/design no site Frontend Mentor). Este projeto consome a Free Dictionary  API, que é uma API que fornece a fonética da palavra, seus significados, alguns exemplos de uso, suas classes gramaticais, como pronunciá-la (com um botão que reproduz sua pronúncia) e muito mais. Este projeto possui darkmode, que é salvo no localStorage; Você também pode alterar a font family da página (você tem 3 opções), que também é salva no localStorage. Um erro é exibido se a palavra não existir (você pode ver como o erro é exibido abaixo). Construí este projeto usando Angular, Typescript, HTML e CSS. *O botão de pronúncia não está disponível para todas as palavras.
</p>

<p>Também postei esse projeto no meu LinkedIn: https://www.linkedin.com/in/lucas-gon%C3%A7alves-3a2662252/</p>
<p>Link do site: https://dictionary-web-app-nine-jet.vercel.app/</p>

<h3>Como eu organizei o projeto</h3>

<p>Prefiro trabalhar em um componente dividindo-o em várias seções, com cada seção tendo seu próprio arquivo CSS específico localizado dentro de uma pasta 'styles'. Essa abordagem facilita a manutenção do código e a localização de elementos específicos para modificação. Além disso, criei um serviço para lidar com solicitações HTTP, para o qual precisei injetar o HttpClient no serviço para utilizar o método 'get'. No arquivo 'app.component.ts', estabeleci métodos para gerenciar solicitações HTTP usando o serviço injetado. Esses métodos são usados para definir a palavra pesquisada como um query parameter, permitindo-me recuperar a palavra da URL e exibir suas informações associadas.</p>
<p>Este projeto só funciona com palavras em inglês</p>

<p>Também trabalhei com ReactiveFormsModule já que o projeto possui input, e assim eu poderia usar validadores. Além disso, utilizei o local storage para salvar as preferências do usuário para o modo escuro e o estilo da fonte, de modo que, quando os usuários recarregarem ou revisitarem a página posteriormente, suas preferências serão mantidas.</p>

<p>Foi um pouco complicado trabalhar com esta API porque ela não seguia um padrão específico, e algumas palavras não tinham as informações que outras palavras tinham, tornando difícil exibir informações para certas palavras</p>

<h3>Principais features do Angular que eu usei</h3>

<p>Este projeto consome uma API, então eu tive que usar o HttpClientModule. Também tive que usar ngFor, ngIf, template strings e string interpolation.</p>

<h3>
  Project pictures
</h3>

![m1](https://github.com/LucasS-Goncalves/scoot/assets/122225674/642c83ce-06e4-4d9e-b385-20b7f52aaf54)
![m2](https://github.com/LucasS-Goncalves/scoot/assets/122225674/cea665aa-a988-421f-808e-b0185cb3a49d)

![d1](https://github.com/LucasS-Goncalves/scoot/assets/122225674/08d2cdf1-1f35-4b65-bfdd-6bf2738983fe)
![d2](https://github.com/LucasS-Goncalves/scoot/assets/122225674/e44f6d07-5804-4b40-9c0e-77b96f390abf)
![d3](https://github.com/LucasS-Goncalves/scoot/assets/122225674/3a0d51c2-bd61-4a6e-8168-4435a17803c1)



