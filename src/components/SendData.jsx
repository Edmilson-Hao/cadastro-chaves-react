import React from 'react'

import { auth, app, db } from '../firebase'
import { documentId } from 'firebase/firestore'
import { getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore'


export default props => {
    let imobiliaria
    let vistoriador
    let endereço
    let tipo
    let observacao
    let dataEnvio
    let timeStamp

    const getFormData = () => {
        imobiliaria = document.getElementsByName('imobiliaria')[0].value
        vistoriador = document.getElementsByName('vistoriador')[0].value
        endereço = document.getElementById('endereco').value
        tipo = document.querySelector('input[name="tipodevistoria"]:checked').value
        observacao = document.getElementById('observacao').value
        dataEnvio = new Date().toLocaleDateString("pt-BR")
        timeStamp = Date.now()
    }

    const keyCollection = collection(db, 'chaves')

    const sendDataToFirebase = async () => {
        
    }
    
    const calculateSize = (img, maxWidth, maxHeight) => {
        let width = img.width;
        let height = img.height;
      
        // calculate the width and height, constraining the proportions
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        return [width, height];
    }

    const resizeImage = e => {
        const file = e.target.files[0]
        const blobImage = URL.createObjectURL(file)
        const image = new Image()
        const canvas = document.getElementById('resizedImage')
        const ctx = canvas.getContext('2d')

        image.src = blobImage
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        image.onload = function() {
            const [newWidth, newHeight] = calculateSize(image, 525, 700)

            canvas.style.display = 'flex'

            ctx.drawImage(image, 0, 0, newWidth, newHeight)

            const finalImage = canvas.toDataURL("image/jpeg",1)
            console.log(`Final compressed image: ${finalImage}`)
        }

        const finalImage = canvas.toDataURL("image/jpeg",0.9)

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

            <button className="input btn btn-success" id="botaoEnviar" onClick={sendDataToFirebase()}>Enviar</button>
<br />
            <canvas id='resizedImage' width='525' height='700' style={{display: 'none'}}></canvas>
        </div>
    )
}