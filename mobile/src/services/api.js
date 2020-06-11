import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3333" 
    //para rodar no meu telefone via USB eu preciso por o ip do meu pc no lugar do localhost 
    //para usar dentro do emulador do genymotion eu uso: 10.0.3.2:3333
});

export default api;