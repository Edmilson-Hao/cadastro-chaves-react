import React from 'react'
import Compressor from 'compressorjs'

import { auth, app, db } from '../firebase'

export default props => {

    const resizeImage = e => {
        const file = e.target.files[0]

        const blobImage = URL.createObjectURL(file)
    
        const image = new Image()
        image.src = blobImage
    
        // const reader = new FileReader()
        // reader.readAsDataURL(file);
        
        // var finalImage
        // reader.onloadend = function (){
        //     finalImage = reader.result
        //     console.log(finalImage)
        // }

        // const resizedImage = document.getElementById('resizedImage')
        // resizedImage.style.width = '500px'
        // resizedImage.style.height = '500px'
        // resizedImage.src = blobImage

        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        console.log(image)
        // image.onload = function() {
        //     ctx.drawImage(image, 0, 0)
        //     const finalImage = canvas.toDataURL("image/jpeg",0.9)
        //     console.log(finalImage)
        // }

        ctx.drawImage(blobImage, 0, 0)
        const finalImage = canvas.toDataURL("image/jpeg",0.9)
        console.log(finalImage)











    }
    return(
        // <div>{auth.currentUser.email}</div>

        <div className="send__container">
            <input className="input form-control" list="imobiliaria" name="imobiliaria" type="text" placeholder="Selecione uma imobiliária" />
            <datalist id="imobiliaria">
                <option value="">Selecione uma imobiliária</option>
                <option>3AC Imóveis</option>
                <option>A P S A Administração</option>
                <option>Adri's Corretoras de Imóveis</option>
                <option>Adriano Ferreira Imóveis</option>
                <option>Akitem Imóvel</option>
                <option>ALPOP LOCACAO PARA TODOS</option>
                <option>Âncora Imobiliária</option>
                <option>Anderson Vieira Santana</option>
                <option>Araújo Gestão Imobiliária</option>
                <option>Arquidiocese</option>
                <option>Avançar Negócios Imobiliários Ltda</option>
                <option>Bárbara Torres</option>
                <option>BCI Imobiliária</option>
                <option>Bello Lar Imóveis</option>
                <option>Boa Viagem Consultoria Imobiliária</option>
                <option>C T I Imobiliária</option>
                <option>Caio César Travassos Vanderlei</option>
                <option>Carvalho Consultor Imobiliário</option>
                <option>Cazzoli Assessoria Imobiliária</option>
                <option>CC Imóveis</option>
                <option>Cláudia Zambon</option>
                <option>CM Guerra Imóveis</option>
                <option>Conlar</option>
                <option>CR Consultoria Imobiliária</option>
                <option>Elielton Calino</option>
                <option>Elis Cavalcanti Consultoria Imobiliária</option>
                <option>Fabio Hartmann</option>
                <option>FC Imóveis</option>
                <option>Felipe Júnior Corretor de Imóveis</option>
                <option>Flávio Marques Gueiros Junior</option>
                <option>Francisco Ramos</option>
                <option>Gamboa Consultor Imobiliário</option>
                <option>Harry Black Imobiliária</option>
                <option>Harry Fernandes Negócios Imobiliários</option>
                <option>Hélio Souto</option>
                <option>Helly Seabra Imóveis</option>
                <option>Henrique Roberto</option>
                <option>Hi Imobiliária Digital</option>
                <option>Humayta Construções Incorporações Ltda</option>
                <option>Imobiliária Amuleto</option>
                <option>Imobiliária Inácio Pedro</option>
                <option>Investilar Empreendimentos Imobiliários</option>
                <option>Irmandades</option>
                <option>JD Corretores de Imóveis</option>
                <option>JR Corretor</option>
                <option>Jr Imóveis</option>
                <option>Judson Corretor</option>
                <option>Júnior Rego</option>
                <option>LM Imóveis</option>
                <option>Lourenço Novaes Corretor de Imóveis</option>
                <option>Luciano de Carvalho Cavalcanti</option>
                <option>Luciene Gomes</option>
                <option>Manuella Veloso</option>
                <option>Marcelo Winograd</option>
                <option>Marco Pollo C. Moura</option>
                <option>Marcos Paulo Corretor de Imóveis</option>
                <option>Maria de Fátima Imobiliária</option>
                <option>Máximo Imóveis</option>
                <option>Mazzoni Consultoria Imobiliária</option>
                <option>Mellos Imobiliária</option>
                <option>Meza Imóveis</option>
                <option>MG Administração e Assessoria Imobiliária LTDA</option>
                <option>Mold Systems</option>
                <option>Morada Real</option>
                <option>Moradasol Imobiliária</option>
                <option>Mozart Imóveis</option>
                <option>NewVille Imóveis</option>
                <option>Núcleo de Seguros Imobiliários</option>
                <option>Onofre Lacerda Negócios Imobiliários</option>
                <option>Paschoaleto Imóveis</option>
                <option>Paulo Militão Corretor de Imóveis</option>
                <option>Pedro Albuquerque Corretor de Imóveis</option>
                <option>Pedro Luiz de Brito Silva Corretor</option>
                <option>Previne Imóveis</option>
                <option>Priscila Menezes</option>
                <option>Proimóvel</option>
                <option>Raniere Patriota</option>
                <option>Reginaldo Franklin de Albuquerque Filho</option>
                <option>Rivoli Gestão de Imoveis Ltda</option>
                <option>Roberta Coutinho</option>
                <option>Roberto Magalhães Imóveis</option>
                <option>Rocha Imóveis</option>
                <option>Rodrigo Maciel</option>
                <option>Rosivaldo Teixeira Corretor</option>
                <option>Santa Casa de Misericórdia</option>
                <option>Santos &amp; Silva Consultoria Imobiliaria</option>
                <option>Sarmento Corretor de Imóveis</option>
                <option>Savieira Imobiliária e Administradora</option>
                <option>Silveira Imóveis</option>
                <option>Simone Paiva Consultora Imobiliária</option>
                <option>Tacaruna Imobiliária</option>
                <option>Tânia Macêdo Corretora</option>
                <option>Thiago Rossiter</option>
                <option>Túlio Brilhante Imóveis</option>
                <option>Varanda Administradora de Imóveis Ltda</option>
                <option>Vas Vistorias</option>
                <option>Ventura Imóveis</option>
                <option>Virginia &amp; Wedson Assessoria</option>
                <option>Waldy Rufino Corretor</option>
                <option>XM2 Soluções Imobiliárias</option>
                <option>Zaidan Gestão de Imóveis</option>
            </datalist>

            
            <label className="radio">
                Entrada
                <input className="radio" type="radio" id="entrada" name="tipodevistoria" value="Entrada" defaultChecked />
            </label>
            
            <label className="radio" >
                Saída
                <input className="radio" type="radio" id="saida" name="tipodevistoria" value="Saída" />
            </label>

            <textarea className="input form-control" id="observacao" placeholder="Observação" />

            <input type="file" accept="image/*" id="chaveFoto" onChange={e => resizeImage(e)} />

            <div id="selectedImage"></div>

            <button className="input btn btn-success" id="botaoEnviar">Enviar</button>
<br />
            <img src="" alt="" id='resizedImage' />
        </div>
    )
}